(function () {
  "use strict";

  var EXAM_LENGTH = 25;
  var PASS_PCT = 80;
  var STORAGE_PROFILE = "kde_profile";

  // ---------------------------------------------------------------------
  // Persistence helpers
  // ---------------------------------------------------------------------
  function statsKey(first, last) {
    return "kde_stats_" + (first + "_" + last).toLowerCase().trim().replace(/\s+/g, "_");
  }

  function loadJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveJSON(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { /* storage unavailable — fail silently */ }
  }

  function defaultStats() {
    return { perQuestion: {}, perTopic: {}, examHistory: [] };
  }

  // ---------------------------------------------------------------------
  // Question bank grouped by topic (QUESTIONS / TOPICS come from questions.js)
  // ---------------------------------------------------------------------
  var TOPIC_KEYS = Object.keys(TOPICS);
  var QUESTIONS_BY_TOPIC = {};
  TOPIC_KEYS.forEach(function (t) { QUESTIONS_BY_TOPIC[t] = []; });
  QUESTIONS.forEach(function (q) { QUESTIONS_BY_TOPIC[q.topic].push(q); });

  function displayTopic(t) {
    return (TOPICS[t] || t).replace(/^Section \d+:\s*/, "");
  }

  // ---------------------------------------------------------------------
  // App state
  // ---------------------------------------------------------------------
  var profile = null;
  var stats = null;
  var exam = [];
  var currentIndex = 0;
  var examAnswers = [];
  var revealed = false;
  var selectedChoice = null;

  // ---------------------------------------------------------------------
  // DOM references
  // ---------------------------------------------------------------------
  var screens = {
    name: document.getElementById("screen-name"),
    dashboard: document.getElementById("screen-dashboard"),
    quiz: document.getElementById("screen-quiz"),
    results: document.getElementById("screen-results")
  };

  var el = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    nameForm: document.getElementById("nameForm"),
    headerUser: document.getElementById("headerUser"),
    headerUserName: document.getElementById("headerUserName"),
    switchUserBtn: document.getElementById("switchUserBtn"),

    dashboardGreeting: document.getElementById("dashboardGreeting"),
    dashboardSub: document.getElementById("dashboardSub"),
    statGrid: document.getElementById("statGrid"),
    weakTopicsWrap: document.getElementById("weakTopicsWrap"),
    weakTopicsChips: document.getElementById("weakTopicsChips"),
    startExamBtn: document.getElementById("startExamBtn"),
    resetDataBtn: document.getElementById("resetDataBtn"),

    progressFill: document.getElementById("progressFill"),
    questionCounter: document.getElementById("questionCounter"),
    topicTag: document.getElementById("topicTag"),
    questionText: document.getElementById("questionText"),
    optionsWrap: document.getElementById("optionsWrap"),
    feedbackPanel: document.getElementById("feedbackPanel"),
    feedbackHeading: document.getElementById("feedbackHeading"),
    feedbackExplain: document.getElementById("feedbackExplain"),
    nextBtn: document.getElementById("nextBtn"),

    scoreRing: document.getElementById("scoreRing"),
    scoreBigNumber: document.getElementById("scoreBigNumber"),
    resultsHeadline: document.getElementById("resultsHeadline"),
    resultsSub: document.getElementById("resultsSub"),
    topicBreakdown: document.getElementById("topicBreakdown"),
    reviewMissedBtn: document.getElementById("reviewMissedBtn"),
    retakeBtn: document.getElementById("retakeBtn"),
    backToDashBtn: document.getElementById("backToDashBtn"),
    missedReview: document.getElementById("missedReview")
  };

  function showScreen(name) {
    Object.keys(screens).forEach(function (k) { screens[k].hidden = true; });
    screens[name].hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function escapeHtml(str) {
    var d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // ---------------------------------------------------------------------
  // Adaptive exam builder
  // ---------------------------------------------------------------------
  function weaknessScore(qStat) {
    var seen = (qStat && qStat.seen) || 0;
    var wrong = (qStat && qStat.wrong) || 0;
    // Laplace-smoothed miss rate, plus small exploration noise so the same
    // handful of missed questions don't show up in every single exam.
    var base = (wrong + 1) / (seen + 2);
    return base + Math.random() * 0.15;
  }

  function weightedPickWithoutReplacement(items, weights, count) {
    var pool = items.map(function (it, i) { return { it: it, w: Math.max(weights[i], 0.0001) }; });
    var picked = [];
    for (var n = 0; n < count && pool.length > 0; n++) {
      var total = pool.reduce(function (s, p) { return s + p.w; }, 0);
      var r = Math.random() * total;
      var idx = 0;
      for (; idx < pool.length; idx++) {
        r -= pool[idx].w;
        if (r <= 0) break;
      }
      if (idx >= pool.length) idx = pool.length - 1;
      picked.push(pool[idx].it);
      pool.splice(idx, 1);
    }
    return picked;
  }

  function buildExam() {
    var base = Math.floor(EXAM_LENGTH / TOPIC_KEYS.length);
    var remainder = EXAM_LENGTH - base * TOPIC_KEYS.length;

    var perTopicCount = {};
    TOPIC_KEYS.forEach(function (t) { perTopicCount[t] = base; });

    // Extra slots (beyond the even split) go to the user's weakest topics.
    var topicWeakness = TOPIC_KEYS.map(function (t) {
      var ts = stats.perTopic[t];
      if (!ts || ts.seen === 0) return 0.5; // neutral default for unseen topics
      return ts.wrong / ts.seen;
    });
    var order = TOPIC_KEYS.map(function (t, i) { return i; })
      .sort(function (a, b) { return topicWeakness[b] - topicWeakness[a]; });
    for (var i = 0; i < remainder; i++) {
      perTopicCount[TOPIC_KEYS[order[i % order.length]]] += 1;
    }

    var selected = [];
    TOPIC_KEYS.forEach(function (t) {
      var pool = QUESTIONS_BY_TOPIC[t];
      var count = Math.min(perTopicCount[t], pool.length);
      var weights = pool.map(function (q) { return weaknessScore(stats.perQuestion[q.id]); });
      selected = selected.concat(weightedPickWithoutReplacement(pool, weights, count));
    });

    selected = shuffle(selected);

    return selected.map(function (q) {
      var copy = Object.assign({}, q);
      copy.displayChoices = shuffle(q.choices);
      return copy;
    });
  }

  // ---------------------------------------------------------------------
  // Quiz rendering & flow
  // ---------------------------------------------------------------------
  function startExam() {
    exam = buildExam();
    currentIndex = 0;
    examAnswers = [];
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    revealed = false;
    selectedChoice = null;

    var q = exam[currentIndex];
    el.questionCounter.textContent = "Question " + (currentIndex + 1) + " of " + exam.length;
    el.topicTag.textContent = displayTopic(q.topic);
    el.questionText.textContent = q.q;
    el.progressFill.style.width = ((currentIndex / exam.length) * 100) + "%";

    el.optionsWrap.innerHTML = "";
    q.displayChoices.forEach(function (choiceText) {
      var div = document.createElement("div");
      div.className = "option";
      div.setAttribute("role", "radio");
      div.setAttribute("aria-checked", "false");
      div.tabIndex = 0;
      var bullet = document.createElement("span");
      bullet.className = "bullet";
      var label = document.createElement("span");
      label.className = "choice-text";
      label.textContent = choiceText;
      div.appendChild(bullet);
      div.appendChild(label);
      div.addEventListener("click", function () { selectOption(div, choiceText); });
      div.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectOption(div, choiceText); }
      });
      el.optionsWrap.appendChild(div);
    });

    el.feedbackPanel.hidden = true;
    el.nextBtn.textContent = "Next";
    el.nextBtn.disabled = true;
  }

  function selectOption(div, text) {
    if (revealed) return;
    var opts = el.optionsWrap.querySelectorAll(".option");
    opts.forEach(function (o) { o.classList.remove("selected"); o.setAttribute("aria-checked", "false"); });
    div.classList.add("selected");
    div.setAttribute("aria-checked", "true");
    selectedChoice = text;
    el.nextBtn.disabled = false;
  }

  function revealAnswer() {
    revealed = true;
    var q = exam[currentIndex];
    var isCorrect = selectedChoice === q.answer;

    var opts = el.optionsWrap.querySelectorAll(".option");
    opts.forEach(function (o) {
      o.classList.add("locked");
      var text = o.querySelector(".choice-text").textContent;
      if (text === q.answer) o.classList.add("correct");
      else if (text === selectedChoice && !isCorrect) o.classList.add("incorrect");
    });

    el.feedbackPanel.hidden = false;
    el.feedbackHeading.textContent = isCorrect ? "Correct!" : "Not quite — here's why:";
    el.feedbackHeading.className = "feedback-heading " + (isCorrect ? "is-correct" : "is-incorrect");
    el.feedbackExplain.textContent = (isCorrect ? "" : "The correct answer is: \"" + q.answer + "\". ") + q.explain;

    recordAnswer(q, isCorrect);

    var isLast = currentIndex === exam.length - 1;
    el.nextBtn.textContent = isLast ? "See Results" : "Continue";
  }

  function recordAnswer(q, isCorrect) {
    if (!stats.perQuestion[q.id]) stats.perQuestion[q.id] = { seen: 0, wrong: 0, right: 0 };
    if (!stats.perTopic[q.topic]) stats.perTopic[q.topic] = { seen: 0, wrong: 0, right: 0 };
    stats.perQuestion[q.id].seen++;
    stats.perTopic[q.topic].seen++;
    if (isCorrect) {
      stats.perQuestion[q.id].right++;
      stats.perTopic[q.topic].right++;
    } else {
      stats.perQuestion[q.id].wrong++;
      stats.perTopic[q.topic].wrong++;
    }
    saveStats();

    examAnswers.push({
      id: q.id, topic: q.topic, question: q.q,
      chosen: selectedChoice, correctAnswer: q.answer,
      isCorrect: isCorrect, explain: q.explain
    });
  }

  function advance() {
    if (currentIndex === exam.length - 1) {
      finishExam();
    } else {
      currentIndex++;
      renderQuestion();
    }
  }

  function finishExam() {
    var total = exam.length;
    var correctCount = examAnswers.filter(function (a) { return a.isCorrect; }).length;
    var pct = Math.round((correctCount / total) * 100);

    var topicStats = {};
    examAnswers.forEach(function (a) {
      if (!topicStats[a.topic]) topicStats[a.topic] = { right: 0, total: 0 };
      topicStats[a.topic].total++;
      if (a.isCorrect) topicStats[a.topic].right++;
    });

    stats.examHistory.push({ date: new Date().toISOString(), score: correctCount, total: total, pct: pct, topicStats: topicStats });
    saveStats();

    renderResults(correctCount, total, pct, topicStats);
    showScreen("results");
  }

  function renderResults(correctCount, total, pct, topicStats) {
    el.scoreRing.style.setProperty("--pct", pct);
    el.scoreBigNumber.textContent = pct + "%";
    var passed = pct >= PASS_PCT;
    el.resultsHeadline.textContent = passed ? "You passed! 🎉" : "Keep practicing";
    el.resultsSub.textContent = "You scored " + correctCount + " out of " + total + " (" + pct + "%). " +
      (passed
        ? "That meets the " + PASS_PCT + "% needed to pass the real knowledge test."
        : "You'll need " + PASS_PCT + "% to pass the real knowledge test — review what tripped you up below.");

    el.topicBreakdown.innerHTML = "";
    Object.keys(topicStats)
      .sort(function (a, b) {
        var ra = topicStats[a].right / topicStats[a].total;
        var rb = topicStats[b].right / topicStats[b].total;
        return ra - rb;
      })
      .forEach(function (topic) {
        var right = topicStats[topic].right, t = topicStats[topic].total;
        var p = Math.round((right / t) * 100);
        var color = p >= 80 ? "var(--green-500)" : (p >= 50 ? "var(--gold-600)" : "var(--red-500)");
        var row = document.createElement("div");
        row.className = "topic-row";
        row.innerHTML =
          '<span class="topic-name">' + escapeHtml(displayTopic(topic)) + "</span>" +
          '<span class="topic-bar-track"><span class="topic-bar-fill" style="width:' + p + "%;background:" + color + '"></span></span>' +
          '<span class="topic-score">' + right + "/" + t + "</span>";
        el.topicBreakdown.appendChild(row);
      });

    var missed = examAnswers.filter(function (a) { return !a.isCorrect; });
    el.missedReview.innerHTML = "";
    el.missedReview.hidden = true;
    el.reviewMissedBtn.textContent = "Review Missed Questions (" + missed.length + ")";
    el.reviewMissedBtn.disabled = missed.length === 0;

    missed.forEach(function (m) {
      var div = document.createElement("div");
      div.className = "missed-item";
      div.innerHTML =
        '<p class="m-q">' + escapeHtml(m.question) + "</p>" +
        '<p class="m-line m-wrong">Your answer: ' + escapeHtml(m.chosen) + "</p>" +
        '<p class="m-line m-right">Correct answer: ' + escapeHtml(m.correctAnswer) + "</p>" +
        '<p class="m-explain">' + escapeHtml(m.explain) + "</p>";
      el.missedReview.appendChild(div);
    });
  }

  // ---------------------------------------------------------------------
  // Dashboard
  // ---------------------------------------------------------------------
  function renderDashboard() {
    el.dashboardGreeting.textContent = "Welcome back, " + profile.firstName + "!";
    var examsTaken = stats.examHistory.length;
    var best = examsTaken ? Math.max.apply(null, stats.examHistory.map(function (e) { return e.pct; })) : 0;
    var last = examsTaken ? stats.examHistory[stats.examHistory.length - 1].pct : null;

    el.dashboardSub.textContent = examsTaken
      ? "You've taken " + examsTaken + " practice exam" + (examsTaken > 1 ? "s" : "") + " so far. Each new exam leans a bit more on the topics you've missed."
      : "Take your first practice exam — 25 questions covering every section of the handbook.";

    el.statGrid.innerHTML =
      '<div class="stat-tile"><span class="stat-value">' + examsTaken + '</span><span class="stat-label">Exams Taken</span></div>' +
      '<div class="stat-tile"><span class="stat-value">' + (examsTaken ? best + "%" : "—") + '</span><span class="stat-label">Best Score</span></div>' +
      '<div class="stat-tile"><span class="stat-value">' + (last !== null ? last + "%" : "—") + '</span><span class="stat-label">Last Score</span></div>';

    var weak = TOPIC_KEYS
      .map(function (t) { return { t: t, s: stats.perTopic[t] }; })
      .filter(function (x) { return x.s && x.s.seen >= 3 && (x.s.wrong / x.s.seen) >= 0.35; })
      .sort(function (a, b) { return (b.s.wrong / b.s.seen) - (a.s.wrong / a.s.seen); })
      .slice(0, 5);

    if (weak.length) {
      el.weakTopicsWrap.hidden = false;
      el.weakTopicsChips.innerHTML = weak.map(function (w) {
        return '<span class="chip">' + escapeHtml(displayTopic(w.t)) + " · " + Math.round((w.s.wrong / w.s.seen) * 100) + "% missed</span>";
      }).join("");
    } else {
      el.weakTopicsWrap.hidden = true;
    }
  }

  // ---------------------------------------------------------------------
  // Profile / stats wiring
  // ---------------------------------------------------------------------
  function loadStatsForProfile() {
    stats = loadJSON(statsKey(profile.firstName, profile.lastName), null) || defaultStats();
    el.headerUser.hidden = false;
    el.headerUserName.textContent = profile.firstName + " " + profile.lastName;
  }

  function saveStats() {
    saveJSON(statsKey(profile.firstName, profile.lastName), stats);
  }

  // ---------------------------------------------------------------------
  // Event wiring
  // ---------------------------------------------------------------------
  el.nameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var first = el.firstName.value.trim();
    var last = el.lastName.value.trim();
    if (!first || !last) return;
    profile = { firstName: first, lastName: last };
    saveJSON(STORAGE_PROFILE, profile);
    loadStatsForProfile();
    renderDashboard();
    showScreen("dashboard");
  });

  el.switchUserBtn.addEventListener("click", function () {
    el.headerUser.hidden = true;
    el.firstName.value = "";
    el.lastName.value = "";
    showScreen("name");
    el.firstName.focus();
  });

  el.startExamBtn.addEventListener("click", startExam);

  el.resetDataBtn.addEventListener("click", function () {
    var ok = confirm("Reset all saved progress for " + profile.firstName + " " + profile.lastName + "? This cannot be undone.");
    if (!ok) return;
    stats = defaultStats();
    saveStats();
    renderDashboard();
  });

  el.nextBtn.addEventListener("click", function () {
    if (!revealed) revealAnswer();
    else advance();
  });

  el.reviewMissedBtn.addEventListener("click", function () {
    var hiddenNow = !el.missedReview.hidden;
    el.missedReview.hidden = hiddenNow;
    var missedCount = examAnswers.filter(function (a) { return !a.isCorrect; }).length;
    el.reviewMissedBtn.textContent = (el.missedReview.hidden ? "Review Missed Questions (" : "Hide Missed Questions (") + missedCount + ")";
  });

  el.retakeBtn.addEventListener("click", startExam);

  el.backToDashBtn.addEventListener("click", function () {
    renderDashboard();
    showScreen("dashboard");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") return;
    if (screens.quiz.hidden) return;
    if (document.activeElement && document.activeElement.tagName === "BUTTON") return;
    if (!el.nextBtn.disabled) el.nextBtn.click();
  });

  // ---------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------
  (function init() {
    var saved = loadJSON(STORAGE_PROFILE, null);
    if (saved && saved.firstName && saved.lastName) {
      el.firstName.value = saved.firstName;
      el.lastName.value = saved.lastName;
    }
    showScreen("name");
  })();

})();
