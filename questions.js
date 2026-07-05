/*
 * Kansas Driver's License Knowledge Exam — Question Bank
 * Every question is derived directly from docs/handbook.pdf
 * (Kansas Driving Handbook, Non-Commercial Driver's Manual, Revised Feb 2022).
 * Field notes:
 *   id       - unique integer
 *   topic    - internal topic key (see TOPICS below)
 *   choices  - array of 4 answer strings (order is shuffled at render time)
 *   answer   - the exact string (must match one of `choices`) that is correct
 *   explain  - shown after the user answers; states the rule and why
 */

const TOPICS = {
  license:            "Section 1: The Driver's License",
  state_laws:         "Section 2: State Laws & Rules of the Road",
  fitness:            "Section 3: Be in Shape to Drive",
  before_driving:     "Section 4: Before You Drive",
  basic_driving:      "Section 5: Basic Driving",
  rules_road:         "Section 6: Rules of the Road",
  safe_driving:       "Section 7: Safe Driving Tips",
  collisions:         "Section 8: Avoiding Collisions & Emergencies",
  sharing_road:       "Section 9: Sharing the Road",
  special_situations: "Section 10: Special Driving Situations",
  test_prep:          "Section 11: Preparing for Your License Test",
  optional:           "Section 12: Trip Planning & Weather"
};

const QUESTIONS = [

// ============================= SECTION 1: THE DRIVER'S LICENSE (license) =============================
{ id:1, topic:"license", q:"What is the minimum age to apply for a Farm Permit in Kansas?",
  choices:["14 years old (but less than 17)","12 years old","16 years old","18 years old"],
  answer:"14 years old (but less than 17)",
  explain:"K.S.A. 8-296 sets the Farm Permit minimum age at 14 but less than 17. The applicant must also reside on, or be employed on, a farm." },

{ id:2, topic:"license", q:"For Farm Permit purposes, the handbook defines a \"farm\" as land of at least how many acres used in agricultural operations?",
  choices:["20 acres","5 acres","10 acres","40 acres"],
  answer:"20 acres",
  explain:"The handbook specifies a farm is at least 20 acres used in agricultural operations. If employed rather than resident, an employer affidavit is also required." },

{ id:3, topic:"license", q:"A 14-15 year old driving on a Farm Permit is restricted from doing which of the following?",
  choices:["Carrying a non-sibling minor passenger","Driving directly to and from school","Driving to a farm job","Driving during daylight hours"],
  answer:"Carrying a non-sibling minor passenger",
  explain:"14-15 year old Farm Permit and general restrictions both prohibit non-sibling minor passengers. Driving to/from school and farm work are specifically permitted trips." },

{ id:4, topic:"license", q:"What is the minimum age for a Class C or M Instruction Permit in Kansas?",
  choices:["14 years old","15 years old","16 years old","13 years old"],
  answer:"14 years old",
  explain:"K.S.A. 8-239 sets the minimum age for a Class C or M Instruction Permit at 14. Applicants under 16 need a parent/guardian's written application." },

{ id:5, topic:"license", q:"A Kansas Non-Commercial Class C Instruction Permit expires and may be renewed after:",
  choices:["1 year, with retesting","6 months, automatically","2 years, with a fee only","It never expires"],
  answer:"1 year, with retesting",
  explain:"The Class C Instruction Permit expires in 1 year and may be renewed by retaking and passing the written examination." },

{ id:6, topic:"license", q:"While driving on an Instruction Permit, the licensed adult supervising you in the front seat must be at least:",
  choices:["21 years old with at least one year of driving experience","18 years old, any experience level","25 years old with a clean record","21 years old, experience not required"],
  answer:"21 years old with at least one year of driving experience",
  explain:"Instruction Permit restrictions require the supervising adult to be at least 21 with at least one year of driving experience, seated in the front and being the only other occupant of the front seat." },

{ id:7, topic:"license", q:"A 15-year-old applying for a Restricted License must have completed how many hours of supervised driving?",
  choices:["25 hours","50 hours","10 hours","75 hours"],
  answer:"25 hours",
  explain:"15-year-old Restricted License applicants must complete 25 hours of supervised driving (plus an approved Driver's Education course); 16-year-olds need 50 hours with 10 at night." },

{ id:8, topic:"license", q:"A 16-year-old applicant for a Restricted License must complete 50 hours of supervised driving, including how many hours at night?",
  choices:["10 hours","5 hours","20 hours","0 hours, night driving is not required"],
  answer:"10 hours",
  explain:"16-year-old Restricted License applicants must complete 50 hours of supervised driving with at least 10 of those hours at night." },

{ id:9, topic:"license", q:"What is the minimum age for an Unrestricted Driver's License (K.S.A. 8-235d)?",
  choices:["17 years old","16 years old","18 years old","15 years old"],
  answer:"17 years old",
  explain:"The Unrestricted Driver's License has a minimum age of 17, and requires passing the vision, written, and driving exams (or a DE-99 slip)." },

{ id:10, topic:"license", q:"After holding a Restricted License at age 16, how many months must pass before all age-related driving restrictions are removed?",
  choices:["6 months","3 months","12 months","1 month"],
  answer:"6 months",
  explain:"After age 16, once a Restricted License (or Less Restricted Farm Permit) has been held for 6 months, all age-related driving restrictions are removed." },

{ id:11, topic:"license", q:"To pass the vision requirement for a Kansas driver's license, an applicant must have at least what visual acuity in one eye?",
  choices:["20/40, with or without corrective lenses","20/20 in both eyes","20/60, uncorrected only","20/100 in one eye"],
  answer:"20/40, with or without corrective lenses",
  explain:"Vision must be at least 20/40 in one eye. If corrective lenses are needed to meet this, a \"corrective lenses\" restriction is placed on the license." },

{ id:12, topic:"license", q:"If you fail your written or driving test, when can you retake it?",
  choices:["The next working day, after paying a $1.50 re-exam fee","The same day, free of charge","After a mandatory 7-day wait","After a mandatory 30-day wait"],
  answer:"The next working day, after paying a $1.50 re-exam fee",
  explain:"You may retake a failed test the next working day after paying a $1.50 re-exam fee, or wait longer to study or practice more." },

{ id:13, topic:"license", q:"How many total chances do you have to pass the written knowledge test before you must wait six months to try again?",
  choices:["4 chances","3 chances","2 chances","Unlimited chances"],
  answer:"4 chances",
  explain:"You get four chances to pass the written test (and four for the driving test). After a fourth failure, you must wait a minimum of six months from the most recent failed exam." },

{ id:14, topic:"license", q:"After moving to Kansas, how soon must you obtain a Kansas driver's license?",
  choices:["Within 90 days","Within 30 days","Within 6 months","Immediately upon arrival"],
  answer:"Within 90 days",
  explain:"Kansas requires new residents to obtain a Kansas driver's license within 90 days of moving to the state." },

// ============================= SECTION 2: STATE LAWS (state_laws) =============================
{ id:15, topic:"state_laws", q:"Kansas' Basic Speed Law (K.S.A. 8-1557) requires that you:",
  choices:["Never drive faster than is reasonable and prudent for the conditions then existing","Always drive at the posted speed limit","Drive at least the posted minimum speed at all times","Reduce speed by 5 mph in every school zone regardless of signage"],
  answer:"Never drive faster than is reasonable and prudent for the conditions then existing",
  explain:"The Basic Speed Law says you must never drive faster than reasonable and prudent given road, weather, traffic, and vehicle conditions — even below the posted limit." },

{ id:16, topic:"state_laws", q:"Unless otherwise posted, what is the maximum speed limit in an urban district (town or city)?",
  choices:["30 mph","25 mph","35 mph","20 mph"],
  answer:"30 mph",
  explain:"K.S.A. 8-1558 sets the default maximum speed in any urban district at 30 mph unless otherwise posted." },

{ id:17, topic:"state_laws", q:"Unless otherwise posted, the maximum speed on a separated, multilane highway designated by the Secretary of Transportation is:",
  choices:["75 mph","70 mph","65 mph","80 mph"],
  answer:"75 mph",
  explain:"Separated, multilane highways designated and posted by the Secretary of Transportation default to a 75 mph maximum." },

{ id:18, topic:"state_laws", q:"Unless otherwise posted, the maximum speed on any State or Federal Highway in Kansas is:",
  choices:["65 mph","55 mph","75 mph","60 mph"],
  answer:"65 mph",
  explain:"State and Federal highways default to a 65 mph maximum speed limit unless otherwise posted." },

{ id:19, topic:"state_laws", q:"Unless otherwise posted, the maximum speed on any County or Township road is:",
  choices:["55 mph","65 mph","50 mph","45 mph"],
  answer:"55 mph",
  explain:"County or Township roads default to a 55 mph maximum unless otherwise posted." },

{ id:20, topic:"state_laws", q:"Unless otherwise posted, the maximum speed limit in a properly marked school zone is:",
  choices:["20 mph","15 mph","25 mph","30 mph"],
  answer:"20 mph",
  explain:"Unless otherwise posted, maximum speed in a properly marked school zone (or business district) is 20 mph." },

{ id:21, topic:"state_laws", q:"It is unlawful to drive so slowly that you impede the normal flow of traffic, EXCEPT when:",
  choices:["Slow speed is necessary for safe operation under the basic speed law","You are driving exactly at a posted minimum speed","A minimum speed is posted on the roadway","You are within city limits"],
  answer:"Slow speed is necessary for safe operation under the basic speed law",
  explain:"Impeding traffic is unlawful, but the one exception is when driving slowly is necessary for safe operation in compliance with the basic speed law (e.g., hazardous conditions)." },

{ id:22, topic:"state_laws", q:"Kansas seatbelt law makes unrestrained occupants a \"Primary Violation,\" meaning:",
  choices:["An officer may stop a vehicle solely because an occupant is unrestrained","Officers may only cite it after stopping you for another reason","It only applies to drivers under age 18","It only applies while on interstate highways"],
  answer:"An officer may stop a vehicle solely because an occupant is unrestrained",
  explain:"Because seatbelt use is a Primary Violation, an officer who sees an unrestrained adult in the front seat, or an unrestrained child anywhere in the vehicle, can stop the vehicle for that reason alone." },

{ id:23, topic:"state_laws", q:"Under Kansas child restraint law, all children under age 4 must be restrained in:",
  choices:["A federally approved child safety seat","A booster seat only","A lap belt only","Any restraint that fits them"],
  answer:"A federally approved child safety seat",
  explain:"K.S.A. 8-1344 requires all children under age 4 to be restrained in a federally approved child safety seat." },

{ id:24, topic:"state_laws", q:"Children ages 4 to 8 must use a child safety seat or booster seat UNLESS the child is:",
  choices:["Taller than 4'9\" or weighs more than 80 pounds","Taller than 4 feet","Older than 6 years","Enrolled in school"],
  answer:"Taller than 4'9\" or weighs more than 80 pounds",
  explain:"Children 4 to 8 need a safety seat or booster unless they are taller than 4'9\" OR weigh more than 80 pounds — then a seatbelt is required instead." },

{ id:25, topic:"state_laws", q:"Turn signals must be given at least how many feet before making the actual turn or lane change?",
  choices:["100 feet","50 feet","200 feet","25 feet"],
  answer:"100 feet",
  explain:"K.S.A. 8-1548 requires signaling at least 100 feet before making the move, held until you are ready to actually turn." },

{ id:26, topic:"state_laws", q:"You may not make a \"U\" turn anywhere you cannot be seen by other drivers for at least:",
  choices:["500 feet","200 feet","100 feet","1,000 feet"],
  answer:"500 feet",
  explain:"K.S.A. 8-1546 prohibits U-turns on a curve, near the top of a hill, or anywhere you can't be seen by other drivers for at least 500 feet." },

{ id:27, topic:"state_laws", q:"When another vehicle is passing you, you should:",
  choices:["Stay in your lane and not increase your speed","Speed up slightly to help them finish faster","Move onto the shoulder to give them room","Brake to let them pass more quickly"],
  answer:"Stay in your lane and not increase your speed",
  explain:"When being overtaken, stay in your lane and don't increase speed — this keeps the pass predictable and safe." },

{ id:28, topic:"state_laws", q:"Which sign is the only pennant (pointed flag) shaped warning sign, marking the start of a no-passing zone?",
  choices:["No Passing Zone sign","Yield sign","School Crossing sign","Railroad Crossing sign"],
  answer:"No Passing Zone sign",
  explain:"The No Passing Zone sign is the only pennant-shaped warning sign and is placed on the left side of the road facing the driver." },

{ id:29, topic:"state_laws", q:"A double solid yellow centerline means:",
  choices:["Passing is prohibited for traffic in both directions","Passing is allowed on the side nearer the dashed portion","Passing is allowed only for vehicles turning right","U-turns are always permitted at any point"],
  answer:"Passing is prohibited for traffic in both directions",
  explain:"A double solid yellow line prohibits traffic in both directions from crossing the centerline to pass (though you may cross to turn where safe gaps exist)." },

{ id:30, topic:"state_laws", q:"After passing another vehicle, you must return to your lane before coming within how many feet of an oncoming vehicle?",
  choices:["200 feet","100 feet","300 feet","500 feet"],
  answer:"200 feet",
  explain:"You must return to your driving lane before coming within 200 feet of any vehicle approaching from the opposite direction." },

{ id:31, topic:"state_laws", q:"The \"two-second rule\" for following distance applies under which conditions?",
  choices:["Normal, prime driving conditions (use four seconds in adverse conditions)","Only in heavy fog","Only on the interstate","Only when following motorcycles"],
  answer:"Normal, prime driving conditions (use four seconds in adverse conditions)",
  explain:"Use the two-second rule under prime conditions; increase to a four-second following rule under adverse weather or traffic conditions." },

{ id:32, topic:"state_laws", q:"You must come to a complete stop when a school crossing guard is displaying:",
  choices:["An official flag in the STOP position","A raised hand only","An orange safety vest","A whistle signal"],
  answer:"An official flag in the STOP position",
  explain:"K.S.A. 8-15,103 requires a complete stop when a school crossing guard displays an official flag in the STOP position." },

{ id:33, topic:"state_laws", q:"Kansas law (K.S.A. 8-1598) specifically prohibits using an electronic device while driving to:",
  choices:["Write, send, or read a written communication (such as texting or email)","Use a GPS navigation device","Check the weather report","Talk on a hands-free phone"],
  answer:"Write, send, or read a written communication (such as texting or email)",
  explain:"Kansas law prohibits using an electronic device to write, send, or read a written communication while driving. GPS and weather reports are excluded, and talking/dialing is not specifically illegal (though still distracting)." },

{ id:34, topic:"state_laws", q:"Which of these behaviors, according to the handbook, is typically associated with aggressive driving?",
  choices:["Following too closely and making erratic, unsafe lane changes","Signaling every lane change well in advance","Driving the posted speed limit","Yielding the right-of-way when unsure"],
  answer:"Following too closely and making erratic, unsafe lane changes",
  explain:"Aggressive driving behaviors listed include exceeding the speed limit, following too closely, erratic lane changes, improper signaling, and failing to obey traffic controls." },

// ============================= SECTION 3: BE IN SHAPE TO DRIVE (fitness) =============================
{ id:35, topic:"fitness", q:"Kansas requires a vision test measuring at least what level of visual acuity, with or without corrective lenses?",
  choices:["20/40 in at least one eye","20/20 in both eyes","20/50 in one eye","20/30 in both eyes"],
  answer:"20/40 in at least one eye",
  explain:"The vision test measures at least 20/40 in at least one eye. If corrective lenses are needed to meet it, the license is restricted to require corrective lenses." },

{ id:36, topic:"fitness", q:"At night, you should avoid wearing corrective lenses that are:",
  choices:["Dark or tinted","Bifocal","Made of plastic","Polarized"],
  answer:"Dark or tinted",
  explain:"Avoid dark or tinted lenses at night, even if you think they help with glare — they cut down the light you need to see clearly at night." },

{ id:37, topic:"fitness", q:"Most adults need how many hours of sleep to maintain proper alertness during the day?",
  choices:["7 to 9 hours","5 to 6 hours","4 to 5 hours","10 to 12 hours"],
  answer:"7 to 9 hours",
  explain:"The handbook recommends 7 to 9 hours of sleep for most adults to maintain proper driving alertness." },

{ id:38, topic:"fitness", q:"On a long trip, you should schedule proper breaks about every:",
  choices:["100 miles or 2 hours","50 miles or 1 hour","200 miles or 4 hours","300 miles or 5 hours"],
  answer:"100 miles or 2 hours",
  explain:"Schedule breaks about every 100 miles or 2 hours during long trips to help prevent fatigue." },

{ id:39, topic:"fitness", q:"To fight fatigue while driving, a quick safe-area nap should last about:",
  choices:["15 to 20 minutes","5 minutes","45 minutes","1 hour"],
  answer:"15 to 20 minutes",
  explain:"Find a safe parking area and take a 15- to 20-minute nap to help combat driver fatigue." },

{ id:40, topic:"fitness", q:"Caffeine equal to about two cups of coffee can increase alertness for:",
  choices:["Several hours","Only a few minutes","The rest of the day","It has no measurable effect"],
  answer:"Several hours",
  explain:"About two cups of coffee worth of caffeine can increase alertness for several hours, but it eventually wears off and shouldn't be relied on to prevent fatigue." },

{ id:41, topic:"fitness", q:"To prevent a fatigue-related crash, the handbook advises trying not to drive late at night between:",
  choices:["Midnight and 6 a.m.","9 p.m. and midnight","6 a.m. and 9 a.m.","10 p.m. and 2 a.m."],
  answer:"Midnight and 6 a.m.",
  explain:"The handbook specifically advises avoiding driving between midnight and 6 a.m. to reduce fatigue-related crash risk." },

{ id:42, topic:"fitness", q:"Which of the following is listed in the handbook as a possible in-vehicle driver distraction?",
  choices:["Adjusting the radio or climate controls","Checking mirrors before changing lanes","Signaling before a turn","Scanning intersections for cross traffic"],
  answer:"Adjusting the radio or climate controls",
  explain:"Adjusting radio, CD, or climate controls is explicitly listed as a distraction. Checking mirrors, signaling, and scanning intersections are recommended safe-driving habits, not distractions." },

{ id:43, topic:"fitness", q:"Aggressive driving is defined in the handbook as when a driver:",
  choices:["Intentionally commits an action or moving traffic offense that endangers others","Drives at the speed limit in the left lane","Signals a turn slightly late","Drives an unfamiliar route"],
  answer:"Intentionally commits an action or moving traffic offense that endangers others",
  explain:"Aggressive driving occurs when a driver intentionally commits an act or offense that endangers other persons or property, losing control of their emotions." },

{ id:44, topic:"fitness", q:"If confronted by an aggressive driver, you should:",
  choices:["Get out of their way and avoid eye contact","Speed up to hold your position in traffic","Make eye contact to show confidence","Return their gestures to de-escalate"],
  answer:"Get out of their way and avoid eye contact",
  explain:"Recommended responses include getting out of their way, not challenging them by speeding up, avoiding eye contact, and ignoring gestures or name-calling." },

{ id:45, topic:"fitness", q:"According to the handbook, alcohol begins to impair vision at what blood alcohol concentration (BAC), for all drivers?",
  choices:[".02 BAC",".05 BAC",".08 BAC",".10 BAC"],
  answer:".02 BAC",
  explain:"The handbook states vision is impacted at .02 BAC for all drivers, well below the legal adult limit." },

{ id:46, topic:"fitness", q:"In Kansas, drivers under age 21 can be arrested for alcohol impairment at a BAC of:",
  choices:[".02%",".08%",".05%","Any detectable amount only after a second offense"],
  answer:".02%",
  explain:"Kansas \"Zero Tolerance\" enforcement allows arrest of under-21 drivers at .02% BAC, far stricter than the .08 adult standard." },

{ id:47, topic:"fitness", q:"An adult driver (21 or older) is in violation of Kansas law with a BAC of:",
  choices:[".08 or higher",".05 or higher",".10 or higher",".06 or higher"],
  answer:".08 or higher",
  explain:"A BAC of .08 or higher is a violation of the law for adult drivers, though the handbook notes you can still be convicted of impaired driving even under .08." },

{ id:48, topic:"fitness", q:"Under Kansas' implied consent law, refusing a BAC test results in a license suspension of how long for a FIRST refusal?",
  choices:["1 year","6 months","2 years","30 days"],
  answer:"1 year",
  explain:"Refusing a chemical test carries a mandatory 1-year suspension for a first refusal (2 years for a second, 3 for a third, 10 for a fourth)." },

{ id:49, topic:"fitness", q:"According to the handbook, about how long does it take the body to eliminate the alcohol from one normal drink?",
  choices:["About one hour","About 15 minutes","About four hours","It cannot be estimated at all"],
  answer:"About one hour",
  explain:"It takes about an hour for the body to remove one normal drink's worth of alcohol; time is the only medically proven method — coffee, cold showers, and food do not help." },

{ id:50, topic:"fitness", q:"A first conviction for driving under the influence of alcohol may result in a fine of:",
  choices:["$750 to $1,000 plus court costs","$100 to $250","$2,000 to $5,000","No fine, only a license suspension"],
  answer:"$750 to $1,000 plus court costs",
  explain:"A first alcohol conviction may bring a fine of $750-$1,000 plus court costs, a minimum of 48 hours in jail or 100 hours community service, license suspension, and an ignition interlock requirement." },

// ============================= SECTION 4: BEFORE YOU DRIVE (before_driving) =============================
{ id:51, topic:"before_driving", q:"The top of the steering wheel should be no higher than:",
  choices:["The top of your shoulders (and below chin level)","Eye level","The top of your head","Chest level only"],
  answer:"The top of your shoulders (and below chin level)",
  explain:"Proper seat/wheel adjustment keeps the wheel top no higher than your shoulders and below chin level, for both control and airbag safety." },

{ id:52, topic:"before_driving", q:"There should be about how many inches between your body and the bottom of the steering wheel?",
  choices:["10 inches","5 inches","15 inches","20 inches"],
  answer:"10 inches",
  explain:"The handbook recommends about 10 inches of space between your body and the steering wheel for proper control and airbag clearance." },

{ id:53, topic:"before_driving", q:"A properly adjusted head restraint helps prevent whiplash by contacting:",
  choices:["The back of your head, not below the level of your ears","The top of your head only","Your neck directly","The base of your skull only"],
  answer:"The back of your head, not below the level of your ears",
  explain:"To help prevent whiplash, the head restraint should contact the back of your head and not sit below ear level." },

{ id:54, topic:"before_driving", q:"Compared to the Traditional mirror setting, the Enhanced mirror setting adds how much additional viewing area to each side?",
  choices:["12 to 16 degrees","5 to 10 degrees","20 to 25 degrees","30 degrees"],
  answer:"12 to 16 degrees",
  explain:"The Enhanced mirror setting adds 12 to 16 degrees of additional viewing area to each side compared to the Traditional setting, though it may not work on all vehicles." },

{ id:55, topic:"before_driving", q:"The Traditional mirror setting (showing the edge of your own vehicle) is described as more appropriate for:",
  choices:["Towing or backing in tight areas","All everyday highway driving","Parallel parking exclusively","Nighttime driving only"],
  answer:"Towing or backing in tight areas",
  explain:"The handbook notes the Traditional setting may be more appropriate for trucks, vans, and SUVs when towing or backing in tight areas." },

{ id:56, topic:"before_driving", q:"In Kansas, it is illegal to drive or ride as a front-seat passenger without wearing:",
  choices:["Safety belts","A helmet","Reflective clothing","Gloves"],
  answer:"Safety belts",
  explain:"K.S.A. 8-2503 makes it illegal to drive or be a front-seat passenger without a safety belt." },

{ id:57, topic:"before_driving", q:"Air bags are designed to work best when combined with:",
  choices:["Safety belts","Head restraints alone","Tinted windows","A firm grip at 12 o'clock"],
  answer:"Safety belts",
  explain:"Air bags are supplemental restraints designed to work best with safety belts, which position your body correctly to maximize the air bag's benefit." },

{ id:58, topic:"before_driving", q:"In most vehicles, you should adjust your seat so there are at least how many inches between the center of your chest and the steering wheel?",
  choices:["10 inches","5 inches","15 inches","20 inches"],
  answer:"10 inches",
  explain:"At least 10 inches between chest center and steering wheel center is recommended to reduce injury risk from air bag deployment force." },

{ id:59, topic:"before_driving", q:"When gripping the steering wheel in an air-bag-equipped vehicle, your hands should be placed:",
  choices:["On the outside of the wheel, never across it","At 12 o'clock only","Crossed at the center for extra control","Anywhere that feels comfortable"],
  answer:"On the outside of the wheel, never across it",
  explain:"Hands should stay on the outside of the steering wheel, never across it, since that's where the air bag deploys from with great force." },

{ id:60, topic:"before_driving", q:"Children age 12 and under should ride in which seating position?",
  choices:["The rear seat","The front seat with the air bag switched off","Either seat if belted","The front seat only if taller than 4'9\""],
  answer:"The rear seat",
  explain:"Children 12 and under should sit in the rear seat to avoid injury from air bag deployment during a crash." },

{ id:61, topic:"before_driving", q:"Infants should ride rear-facing until at least age one AND a minimum weight of:",
  choices:["20 pounds","10 pounds","30 pounds","40 pounds"],
  answer:"20 pounds",
  explain:"Infants from birth to at least age one, and until at least 20 pounds, should ride rear-facing in the back seat." },

{ id:62, topic:"before_driving", q:"Children typically outgrow a booster seat around age 8 or when they reach a height of:",
  choices:["4 feet 9 inches","4 feet","5 feet 2 inches","4 feet 4 inches"],
  answer:"4 feet 9 inches",
  explain:"When children outgrow their booster seats — usually around age 8 or 4'9\" tall — they can use the adult safety belt in the back seat." },

// ============================= SECTION 5: BASIC DRIVING (basic_driving) =============================
{ id:63, topic:"basic_driving", q:"Before starting your vehicle, you should first make sure that:",
  choices:["The parking brake is set","The vehicle is already in Drive","Your foot is on the accelerator","The headlights are switched off"],
  answer:"The parking brake is set",
  explain:"Make sure the parking brake is set before starting the vehicle, then check the gear selector/clutch and indicator lights." },

{ id:64, topic:"basic_driving", q:"Hand-to-hand (\"push/pull\") steering is used when:",
  choices:["Turning the wheel during normal driving above 10-15 mph","Parking at very low speed","Backing up only","Only on the interstate"],
  answer:"Turning the wheel during normal driving above 10-15 mph",
  explain:"Hand-to-hand steering, the preferred method, is used for normal forward driving above about 10-15 mph." },

{ id:65, topic:"basic_driving", q:"In hand-to-hand steering, the left hand grasps the wheel between 7 and 8 o'clock; where does the right hand grasp?",
  choices:["Between 4 and 5 o'clock","Between 1 and 2 o'clock","Between 9 and 10 o'clock","Between 2 and 3 o'clock"],
  answer:"Between 4 and 5 o'clock",
  explain:"In hand-to-hand steering, the right hand grasps the wheel between 4 and 5 o'clock while the left grasps between 7 and 8 o'clock." },

{ id:66, topic:"basic_driving", q:"Hand-over-hand steering is recommended for:",
  choices:["Turning the wheel at low speeds, such as parking or at intersections","High-speed highway driving","Evasive maneuvers only","Backing up only"],
  answer:"Turning the wheel at low speeds, such as parking or at intersections",
  explain:"Hand-over-hand steering is used when turning the wheel at low speeds, such as at an intersection or while parking." },

{ id:67, topic:"basic_driving", q:"The handbook notes the \"2 and 10 o'clock\" steering hand position is:",
  choices:["Not recommended, since it can be dangerous in air-bag equipped vehicles","The preferred method for all driving","Required by Kansas law for new drivers","Only used while backing"],
  answer:"Not recommended, since it can be dangerous in air-bag equipped vehicles",
  explain:"2 and 10 o'clock is specifically called out as not recommended because it can be dangerous in vehicles equipped with a driver air bag." },

{ id:68, topic:"basic_driving", q:"During evasive action steering, it is critical to limit steering input to no more than:",
  choices:["180 degrees","45 degrees","360 degrees","90 degrees"],
  answer:"180 degrees",
  explain:"Limiting steering input to no more than 180 degrees during evasive action helps avoid traction loss and crossing into oncoming lanes." },

{ id:69, topic:"basic_driving", q:"One-hand steering should be used only when:",
  choices:["Backing the vehicle or operating controls like wipers or lights","Driving on the highway","Making a sharp turn at speed","Driving in heavy traffic"],
  answer:"Backing the vehicle or operating controls like wipers or lights",
  explain:"One-hand steering is reserved for backing or for briefly reaching controls like wipers, flashers, or lights." },

{ id:70, topic:"basic_driving", q:"When backing your vehicle, the handbook says to grasp the wheel at 12 o'clock with your:",
  choices:["Left hand","Right hand","Both hands together","Either hand, as preferred"],
  answer:"Left hand",
  explain:"When backing, grasp the wheel at 12 o'clock with your left hand, turn the wheel right, and look through the rear window with your right arm on the seatback." },

{ id:71, topic:"basic_driving", q:"If you release a manual transmission clutch too suddenly while accelerating, the vehicle will:",
  choices:["Jerk forward, and the engine may stall","Accelerate very smoothly","Automatically upshift","Come to a complete stop"],
  answer:"Jerk forward, and the engine may stall",
  explain:"Releasing the clutch suddenly causes the vehicle to jerk forward and the engine may stall — release it slowly instead." },

{ id:72, topic:"basic_driving", q:"Your grip on the steering wheel should be:",
  choices:["Firm but gentle, using your fingers rather than your palms","As tight as possible with flat palms","Loose, using only one finger","Tight, with thumbs through the spokes at all times"],
  answer:"Firm but gentle, using your fingers rather than your palms",
  explain:"Grip the wheel firmly but gently using your fingers (not your palms), keeping thumbs up along the wheel's face, never gripping from inside the rim." },

// ============================= SECTION 6: RULES OF THE ROAD (rules_road) =============================
{ id:73, topic:"rules_road", q:"At an uncontrolled intersection (no signs or signals), when two vehicles arrive at approximately the same time from different roadways, who must yield?",
  choices:["The driver on the left yields to the vehicle on the right","The driver on the right yields to the vehicle on the left","Whichever driver is going faster has the right-of-way","Neither driver yields; both proceed simultaneously"],
  answer:"The driver on the left yields to the vehicle on the right",
  explain:"When two vehicles enter an intersection from different roadways at about the same time, the driver on the left must yield to the vehicle on the right." },

{ id:74, topic:"rules_road", q:"At a 4-way stop, if more than one vehicle arrives at approximately the same time, who should go first?",
  choices:["The vehicle on the right","The vehicle on the left","Whichever vehicle honks first","The largest vehicle"],
  answer:"The vehicle on the right",
  explain:"At a 4-way stop, the driver who arrives first gets the right-of-way; if multiple vehicles arrive together, the vehicle on the right goes first." },

{ id:75, topic:"rules_road", q:"A driver turning left at an intersection must yield the right-of-way to:",
  choices:["Vehicles approaching from the opposite direction going straight or turning right","Only vehicles behind them","Pedestrians only, not other vehicles","No one, since a left-turning vehicle always has priority"],
  answer:"Vehicles approaching from the opposite direction going straight or turning right",
  explain:"A left-turning driver must yield to oncoming vehicles going straight or turning right. If both vehicles enter at the same time, the one going straight has the right-of-way." },

{ id:76, topic:"rules_road", q:"When entering a road from a driveway, alley, or private road, you must yield to:",
  choices:["Vehicles already on the public street or highway","Only vehicles signaling a turn","Vehicles behind you only","No one, if you signal first"],
  answer:"Vehicles already on the public street or highway",
  explain:"Vehicles on a public street or highway have the right-of-way over vehicles entering from a private drive or side road (K.S.A. 8-1555)." },

{ id:77, topic:"rules_road", q:"As a driver, you must yield to pedestrians in the roadway:",
  choices:["Always, even if they are jaywalking","Only if they are in a marked crosswalk","Only if a traffic signal favors them","Only during daylight hours"],
  answer:"Always, even if they are jaywalking",
  explain:"You must do everything possible to avoid striking a pedestrian — even one crossing illegally — and must always yield to them." },

{ id:78, topic:"rules_road", q:"When a pedestrian is crossing guided by a dog or carrying a white cane, a driver must:",
  choices:["Come to a complete stop and never sound the horn","Slow down but may proceed if the path looks clear","Honk to alert the pedestrian of the vehicle's presence","Yield only if the pedestrian is in a marked crosswalk"],
  answer:"Come to a complete stop and never sound the horn",
  explain:"Pedestrians using a guide dog or white cane must always be given the right-of-way; never use the horn, as it could confuse or frighten them." },

{ id:79, topic:"rules_road", q:"A steady YELLOW traffic light means:",
  choices:["The light is about to turn red; slow down and stop if traffic behind allows","You may speed up to clear the intersection before it turns red","Proceed with caution as if it were flashing yellow","Yield only to pedestrians, then proceed"],
  answer:"The light is about to turn red; slow down and stop if traffic behind allows",
  explain:"A steady yellow light warns that the signal is about to turn red — slow and stop if it's safe to do so; if already in the intersection, continue through safely." },

{ id:80, topic:"rules_road", q:"A flashing YELLOW traffic light means:",
  choices:["Slow down and proceed with caution","Stop completely, then proceed when clear","You have the right-of-way over all cross traffic","Treat it the same as a flashing red light"],
  answer:"Slow down and proceed with caution",
  explain:"A flashing yellow signal means slow down and proceed with caution, being ready to stop for traffic entering the intersection." },

{ id:81, topic:"rules_road", q:"A flashing RED traffic light should be treated the same as:",
  choices:["A stop sign — stop completely, then proceed when it's safe","A steady green light","A yield sign only","A do-not-enter sign, meaning you can never proceed"],
  answer:"A stop sign — stop completely, then proceed when it's safe",
  explain:"A flashing red light requires the same procedure as a stop sign: stop completely, look both ways, and yield the right-of-way before proceeding." },

{ id:82, topic:"rules_road", q:"A GREEN ARROW at a signal means:",
  choices:["You may safely turn in the arrow's direction if the intersection is clear","You must wait for the steady green light before turning","Oncoming traffic has the right-of-way over your turn","You may proceed straight through only, not turn"],
  answer:"You may safely turn in the arrow's direction if the intersection is clear",
  explain:"A green arrow means you may turn in that direction if the intersection is clear; oncoming or crossing traffic should yield to your protected turn." },

{ id:83, topic:"rules_road", q:"At a steady red light, when may you legally turn right on red in Kansas?",
  choices:["After stopping and checking for traffic and pedestrians, unless a sign prohibits it","Never, right turns on red are always illegal in Kansas","Only if a police officer waves you through","Only between 9 a.m. and 5 p.m."],
  answer:"After stopping and checking for traffic and pedestrians, unless a sign prohibits it",
  explain:"Unless a sign prohibits it, you may turn right after stopping at a red light and checking for traffic and pedestrians." },

{ id:84, topic:"rules_road", q:"A RED ARROW at a signal means:",
  choices:["You must stop and may not go in the arrow's direction until the green returns","You may proceed cautiously if no other traffic is present","It functions exactly like a flashing red light","You may turn if pedestrians are not present"],
  answer:"You must stop and may not go in the arrow's direction until the green returns",
  explain:"A red arrow requires a stop, and you may not proceed in that direction until the green arrow or green light returns." },

{ id:85, topic:"rules_road", q:"If you are stopped at an intersection and the light turns green, you must:",
  choices:["Allow crossing traffic already in the intersection to clear before proceeding","Immediately proceed since you now have the right-of-way","Honk to warn any remaining crossing traffic to hurry","Wait an additional 5 seconds regardless of traffic"],
  answer:"Allow crossing traffic already in the intersection to clear before proceeding",
  explain:"Even with a green light, you must let crossing traffic already in the intersection clear before you go, since the light alone doesn't grant right-of-way over vehicles already there." },

{ id:86, topic:"rules_road", q:"Warning signs (like curve or merge warnings) are typically what shape and color?",
  choices:["Yellow diamond with black lettering or symbols","White rectangle with black lettering","Orange diamond with white lettering","Red octagon with white lettering"],
  answer:"Yellow diamond with black lettering or symbols",
  explain:"Warning signs are usually diamond-shaped, yellow with black lettering or symbols (some, like school signs, may be fluorescent yellow)." },

{ id:87, topic:"rules_road", q:"Regulatory signs, such as speed limit or no-turn signs, are typically what color?",
  choices:["White, with black, red, or green lettering","Yellow, with black lettering","Orange, with black lettering","Blue, with white lettering"],
  answer:"White, with black, red, or green lettering",
  explain:"Regulatory signs are square, rectangular, or specially shaped and are white with black, red, or green letters or symbols." },

{ id:88, topic:"rules_road", q:"A regulatory sign showing a red circle with a red slash over a symbol means:",
  choices:["That action is prohibited","That action is recommended, but optional","A warning of possible danger ahead","Direction to a nearby service or amenity"],
  answer:"That action is prohibited",
  explain:"Signs like \"No Left Turn\" or \"No U-Turn\" use a red circle-and-slash symbol to indicate a prohibited action." },

{ id:89, topic:"rules_road", q:"Temporary work zone signs use what color combination?",
  choices:["Orange background with black letters or symbols","Yellow background with red letters","White background with orange letters","Pink background with black letters"],
  answer:"Orange background with black letters or symbols",
  explain:"All temporary work zone signs have an orange background with black letters or symbols, telling you what to do and how soon you'll encounter the zone." },

{ id:90, topic:"rules_road", q:"A stop sign's shape and color are:",
  choices:["Eight-sided (octagon), red with white letters","Four-sided (square), red with white letters","Triangular, red and white","Round, red with white letters"],
  answer:"Eight-sided (octagon), red with white letters",
  explain:"A stop sign has eight sides and is red with white lettering; a 4-WAY, 3-WAY, or ALL-WAY placard may be added below it." },

{ id:91, topic:"rules_road", q:"A yield sign's shape and color are:",
  choices:["A red and white downward-pointing triangle","An orange diamond","A blue rectangle","A yellow octagon"],
  answer:"A red and white downward-pointing triangle",
  explain:"A yield sign is a red-and-white downward-pointing triangle, meaning slow down and let traffic with the right-of-way pass before entering." },

{ id:92, topic:"rules_road", q:"The round, yellow warning sign with a black \"X\" and \"RR\" placed before a highway-railroad grade crossing means:",
  choices:["Slow down, look and listen for a train, and be prepared to stop","You have the right-of-way over any oncoming train","Trains only cross during scheduled daytime hours","The crossing is permanently closed to vehicle traffic"],
  answer:"Slow down, look and listen for a train, and be prepared to stop",
  explain:"This sign cautions you to slow down, look and listen for a train or railroad vehicle, and be prepared to stop if one is approaching." },

{ id:93, topic:"rules_road", q:"If your vehicle stalls while crossing railroad tracks, you should get everyone out and:",
  choices:["Run in the direction from which the train is approaching","Run in the same direction the train is traveling","Stay inside the vehicle with hazards on","Try to push the vehicle off the tracks first"],
  answer:"Run in the direction from which the train is approaching",
  explain:"Run toward the train's approach direction — running the same direction as the train risks being hit by flying debris when the train strikes the vehicle." },

{ id:94, topic:"rules_road", q:"A dashed yellow centerline on your side of the road means:",
  choices:["You may pass if there is a safe gap in traffic","Passing is prohibited on both sides","You must always use your high beams to pass","Passing is allowed only for trucks"],
  answer:"You may pass if there is a safe gap in traffic",
  explain:"A dashed yellow line on your side means you may pass when a safe gap in traffic is available." },

{ id:95, topic:"rules_road", q:"A solid white line between lanes of traffic moving in the same direction means:",
  choices:["You must stay in your lane unless a special situation requires changing","You may change lanes freely at any time","It marks a reversible lane only","It indicates a bike lane"],
  answer:"You must stay in your lane unless a special situation requires changing",
  explain:"A solid white line means you must stay within your lane unless a special situation requires a lane change; it's also used near intersections to prevent lane changes." },

{ id:96, topic:"rules_road", q:"The broken (dashed) yellow centerlines of a shared center left-turn lane mean:",
  choices:["Vehicles from either direction may use the lane only to turn left","The lane may be used for passing slower traffic","Only northbound traffic may use the lane","The lane is reserved for buses only"],
  answer:"Vehicles from either direction may use the lane only to turn left",
  explain:"The broken yellow centerlines show vehicles traveling either direction may use the shared center lane only to make left turns, never for passing or through travel." },

{ id:97, topic:"rules_road", q:"When entering a roundabout or traffic circle, you should:",
  choices:["Yield to circulating traffic and travel counterclockwise around the center island","Travel clockwise and yield only to pedestrians","Enter at full speed since circulating traffic must yield to you","Come to a full stop regardless of circulating traffic"],
  answer:"Yield to circulating traffic and travel counterclockwise around the center island",
  explain:"Entering traffic yields to vehicles already circulating; vehicles travel counterclockwise around the raised center island at a slow speed (about 15-20 mph)." },

{ id:98, topic:"rules_road", q:"You must stop for a school bus with flashing red lights and an extended stop arm:",
  choices:["And remain stopped until the lights stop flashing and the stop arm retracts","Only if the bus is on your side of the road","Only at intersections, not on straight roadway sections","Only if you are following directly behind the bus"],
  answer:"And remain stopped until the lights stop flashing and the stop arm retracts",
  explain:"You must stop when meeting or overtaking a school bus with flashing red lights/extended stop arm and remain stopped until the signal is retracted and lights turn off." },

{ id:99, topic:"rules_road", q:"You are NOT required to stop for an oncoming school bus that is loading/unloading children if:",
  choices:["The roadway is separated by a median or other physical barrier","The bus is more than one block away","You are driving a commercial vehicle","It is nighttime"],
  answer:"The roadway is separated by a median or other physical barrier",
  explain:"Traffic approaching a school bus on the opposing roadway of a divided highway separated by a median or physical barrier is not required to stop." },

// ============================= SECTION 7: SAFE DRIVING TIPS (safe_driving) =============================
{ id:100, topic:"safe_driving", q:"In the city, you should look ahead of your vehicle at least:",
  choices:["Two blocks or two traffic signals","One block","Half a block","Five blocks"],
  answer:"Two blocks or two traffic signals",
  explain:"In the city, look at least two blocks or two traffic signals ahead (three in an urban area) to spot developing hazards early." },

{ id:101, topic:"safe_driving", q:"On the highway, you should look ahead of your vehicle at least:",
  choices:["A quarter of a mile","100 feet","One mile","One block"],
  answer:"A quarter of a mile",
  explain:"On the highway, you should look at least a quarter of a mile ahead to give yourself time to react to developing hazards." },

{ id:102, topic:"safe_driving", q:"A \"visual lead\" refers to an area how many seconds ahead of your vehicle that you should be scanning for problems?",
  choices:["20 to 30 seconds","5 to 10 seconds","60 to 90 seconds","2 to 3 seconds"],
  answer:"20 to 30 seconds",
  explain:"A visual lead is an area 20 to 30 seconds ahead of the front of your vehicle, used to identify potential problems with enough time to react." },

{ id:103, topic:"safe_driving", q:"At 60 mph on dry pavement with good tires and brakes, total stopping distance is about:",
  choices:["359 feet","123 feet","500 feet","200 feet"],
  answer:"359 feet",
  explain:"At 60 mph, it can take about 4 to 5 seconds and 359 feet to react to a problem and bring the vehicle to a complete stop." },

{ id:104, topic:"safe_driving", q:"At 50 mph, total stopping distance (perception + reaction + braking) is a minimum of about:",
  choices:["268 feet","158 feet","55 feet","400 feet"],
  answer:"268 feet",
  explain:"At 50 mph, total stopping distance is a minimum of about 268 feet, combining perception distance, reaction distance, and braking distance." },

{ id:105, topic:"safe_driving", q:"When you double your speed from 20 to 40 mph, the impact and braking distance become:",
  choices:["4 times greater","2 times greater","8 times greater","16 times greater"],
  answer:"4 times greater",
  explain:"Doubling speed from 20 to 40 mph makes impact and braking distance 4 times greater — speed's effect on stopping distance is not linear." },

{ id:106, topic:"safe_driving", q:"Tripling your speed from 20 to 60 mph makes the impact and braking distance:",
  choices:["9 times greater","3 times greater","6 times greater","12 times greater"],
  answer:"9 times greater",
  explain:"Tripling speed from 20 to 60 mph makes impact and braking distance 9 times greater; at 80 mph it becomes 16 times greater than at 20 mph." },

{ id:107, topic:"safe_driving", q:"On wet roadways, you should reduce your speed by about how much below the recommended dry-pavement speed?",
  choices:["10 mph","5 mph","20 mph","2 mph"],
  answer:"10 mph",
  explain:"On wet roadways, reduce speed about 10 mph below recommended speeds to allow for additional stopping distance and potential traction loss." },

{ id:108, topic:"safe_driving", q:"If there is packed snow on the road, you should reduce your speed by:",
  choices:["Half or more","10 mph flat","A quarter","5 mph flat"],
  answer:"Half or more",
  explain:"For packed snow, reduce your speed by half or more; on ice-covered roads, reduce speed even further to allow for stopping and recovering from traction loss." },

{ id:109, topic:"safe_driving", q:"In heavy rain, tires can lose ALL traction with the road (full hydroplaning) at speeds of about:",
  choices:["45 to 50 mph","20 to 25 mph","60 to 70 mph","35 to 40 mph"],
  answer:"45 to 50 mph",
  explain:"In heavy rain, tires can lose all traction with the road at 45-50 mph as water pushes against the tires; badly worn tires lose traction at even lower speeds." },

{ id:110, topic:"safe_driving", q:"Under normal, prime driving conditions, the minimum safe following distance is:",
  choices:["Two seconds","One second","Four seconds","Six seconds"],
  answer:"Two seconds",
  explain:"Keep a minimum following distance of two seconds under prime conditions, adding at least one more second for unusual weather or traffic conditions." },

{ id:111, topic:"safe_driving", q:"Under adverse weather conditions, you should increase your following distance to about:",
  choices:["Four seconds","Two seconds","Three seconds","Ten seconds"],
  answer:"Four seconds",
  explain:"Use a four-second following rule under adverse conditions, versus two seconds under normal, prime conditions." },

{ id:112, topic:"safe_driving", q:"When merging or changing lanes, you should look for a gap in traffic of about:",
  choices:["4 to 6 seconds","1 to 2 seconds","10 to 12 seconds","2 to 3 seconds"],
  answer:"4 to 6 seconds",
  explain:"Select a 4 to 6 second gap in traffic when merging or changing lanes, moving into the middle of the gap so both vehicles can adjust to a 3-second interval." },

{ id:113, topic:"safe_driving", q:"Many states require drivers to stay at least how far behind emergency equipment operating on the roadway?",
  choices:["500 feet","100 feet","1,000 feet","200 feet"],
  answer:"500 feet",
  explain:"Many states, including Kansas, require staying at least 500 feet to the rear of emergency equipment — about 12 seconds at 30 mph or 6 seconds at 60 mph." },

{ id:114, topic:"safe_driving", q:"Under normal circumstances, completing a right turn and getting up to traffic speed takes about:",
  choices:["12 to 15 seconds","3 to 5 seconds","20 to 25 seconds","30 seconds"],
  answer:"12 to 15 seconds",
  explain:"A right turn and acceleration to speed typically takes 12 to 15 seconds, while a left turn takes 15 to 18 seconds since it usually crosses more traffic." },

{ id:115, topic:"safe_driving", q:"An oncoming vehicle that is more than how many seconds away generally appears to be standing still, tricking drivers into passing too soon?",
  choices:["25 seconds","10 seconds","40 seconds","5 seconds"],
  answer:"25 seconds",
  explain:"An oncoming vehicle more than 25 seconds away often looks like it's standing still — if you can actually see it closing in, it's probably already closer than 25 seconds." },

{ id:116, topic:"safe_driving", q:"Before passing near a hill or curve, you should not attempt the pass unless you can see ahead at least:",
  choices:["About 1/3 of a mile (20-25 seconds at highway speed)","100 feet","1/10 of a mile","A full mile"],
  answer:"About 1/3 of a mile (20-25 seconds at highway speed)",
  explain:"You need to see about 1/3 of a mile (20-25 seconds at 55-60 mph) ahead before passing; treat a blind hill or curve as if an oncoming vehicle is just out of sight." },

{ id:117, topic:"safe_driving", q:"ABS stands for:",
  choices:["Anti-Lock Braking System","Automatic Brake Sensor","Advanced Braking Servo","Anti-Skid Body Stabilizer"],
  answer:"Anti-Lock Braking System",
  explain:"ABS (Anti-Lock Braking System) allows steering and braking at the same time without losing vehicle balance, especially helpful on wet surfaces." },

{ id:118, topic:"safe_driving", q:"When using ABS to stop quickly, you should:",
  choices:["Press the brake pedal as hard as you can and keep pressing","Pump the brake pedal rapidly on and off","Ease off if you feel the pedal pushing back","Brake gently to avoid triggering the system"],
  answer:"Press the brake pedal as hard as you can and keep pressing",
  explain:"With ABS, press the brake pedal as hard as you can and keep pressing — the pedal may push back as ABS works, but you should not let up." },

{ id:119, topic:"safe_driving", q:"In urban areas, you should signal at least how many feet before making a turn or lane change?",
  choices:["100 feet (3-5 seconds)","50 feet","300 feet","20 feet"],
  answer:"100 feet (3-5 seconds)",
  explain:"Signal at least 100 feet, or 3-5 seconds, before a turn or lane change in urban areas." },

{ id:120, topic:"safe_driving", q:"At speeds above 40 mph, you should signal at least how many feet before turning or changing lanes?",
  choices:["200 feet","100 feet","50 feet","400 feet"],
  answer:"200 feet",
  explain:"Above 40 mph, signal at least 200 feet (3-5 seconds) before turning or changing lanes, giving others more time to react at higher speed." },

{ id:121, topic:"safe_driving", q:"When overtaking a pedestrian walking along the roadway while an oncoming vehicle approaches, you should:",
  choices:["Slow down and let the oncoming vehicle pass first, handling one hazard at a time","Keep driving at the same speed since both can be handled at once","Honk your horn so the pedestrian moves aside","Speed up to clear the pedestrian before the oncoming vehicle arrives"],
  answer:"Slow down and let the oncoming vehicle pass first, handling one hazard at a time",
  explain:"When possible, take potential hazards one at a time — slow down and let the oncoming vehicle pass first so you only pass one roadway user at once." },

// ============================= SECTION 8: AVOIDING COLLISIONS & EMERGENCIES (collisions) =============================
{ id:122, topic:"collisions", q:"When trying to avoid a collision, your three basic options are:",
  choices:["Brake, steer, or accelerate","Brake, honk, or flash your lights","Steer, stop, or reverse","Accelerate, swerve, or coast"],
  answer:"Brake, steer, or accelerate",
  explain:"The handbook identifies three basic options to avoid a collision: braking, steering, or accelerating out of danger." },

{ id:123, topic:"collisions", q:"If your vehicle (WITHOUT ABS) begins to skid because you braked too hard, you should:",
  choices:["Ease up on the brake pedal, then reapply with control","Keep the brake pedal fully pressed down","Pump the accelerator to regain traction","Turn the wheel sharply away from the direction of the skid"],
  answer:"Ease up on the brake pedal, then reapply with control",
  explain:"Without ABS, if the brakes lock and you skid, ease up on the pedal, then reapply with control — repeat as needed until stopped." },

{ id:124, topic:"collisions", q:"With ABS engaged, if you need to steer around a hazard while braking, you should:",
  choices:["Keep pressing the brake pedal firmly while steering toward your intended path","Release the brake completely before steering","Pump the brake while steering","Apply the parking brake instead"],
  answer:"Keep pressing the brake pedal firmly while steering toward your intended path",
  explain:"With ABS, continue pressing the brake pedal as hard as you can while steering in the direction you want to travel." },

{ id:125, topic:"collisions", q:"If your vehicle loses traction and continues traveling straight even while you're steering, this indicates traction loss to the:",
  choices:["Front tires","Rear tires","Brakes only","Transmission"],
  answer:"Front tires",
  explain:"If the vehicle continues straight while steering, traction is lost to the front tires; if it moves sideways without steering input, the rear tires have lost traction." },

{ id:126, topic:"collisions", q:"If the rear tires lose traction and the vehicle starts moving sideways, you should:",
  choices:["Steer toward your intended path of travel and countersteer as needed","Steer opposite of the direction you want to go","Brake hard immediately","Accelerate hard to \"power out\" of the skid"],
  answer:"Steer toward your intended path of travel and countersteer as needed",
  explain:"Turn the wheel toward your intended path and continue to steer and countersteer, looking where you want to go, until the vehicle travels straight again." },

{ id:127, topic:"collisions", q:"If your brakes fail while driving, the FIRST thing you should try is:",
  choices:["Rapidly pump the brake pedal several times","Pull the parking brake hard and fast","Turn off the engine immediately","Shift into the lowest gear at highway speed"],
  answer:"Rapidly pump the brake pedal several times",
  explain:"First, rapidly pump the brake pedal — this often builds up enough pressure to stop. If that fails, use the parking brake slowly, then look for a safe place to stop." },

{ id:128, topic:"collisions", q:"If a FRONT tire suddenly blows out, the vehicle will tend to:",
  choices:["Pull sharply in the direction of the blowout","Pull sharply away from the blowout side","Continue perfectly straight with no effect","Wobble but stay centered in the lane"],
  answer:"Pull sharply in the direction of the blowout",
  explain:"A front tire blowout pulls the vehicle sharply toward the side of the blowout; a rear blowout causes wobbling and shaking with some pull." },

{ id:129, topic:"collisions", q:"If a tire blows out while driving, you should:",
  choices:["Ease off the accelerator and avoid hard braking, letting the vehicle slow gradually","Brake hard immediately to stop as fast as possible","Accelerate briefly to maintain control","Turn sharply toward the shoulder right away"],
  answer:"Ease off the accelerator and avoid hard braking, letting the vehicle slow gradually",
  explain:"Grip the wheel firmly, ease off the accelerator, avoid braking (or brake very gently if needed), and pull off the road once slowed." },

{ id:130, topic:"collisions", q:"If your engine shuts off while driving, you should:",
  choices:["Shift to neutral, look for an escape path, and brake with steady pressure","Shift into Park immediately","Pump the accelerator repeatedly","Turn off the ignition right away, before pulling over"],
  answer:"Shift to neutral, look for an escape path, and brake with steady pressure",
  explain:"Keep a strong grip on the wheel (it may be harder to turn), shift to neutral, find an escape path, and brake with steady (not hard) pressure while pulling off the road." },

{ id:131, topic:"collisions", q:"If your wheels leave the pavement onto a lower shoulder (an uneven surface drop-off), you should:",
  choices:["Ease off the accelerator, slow to 25 mph or less, and avoid overs steering","Brake hard and turn the wheel sharply back onto the road","Accelerate to power the vehicle back onto the road","Turn the wheel a full turn to return quickly"],
  answer:"Ease off the accelerator, slow to 25 mph or less, and avoid overs steering",
  explain:"Ease off the accelerator (do not brake hard), slow to 25 mph or less, straddle the edge, and only steer back gently — panic overs steering is what causes crashes here." },

{ id:132, topic:"collisions", q:"When steering back onto the pavement from a shoulder drop-off, you should turn the wheel:",
  choices:["About a quarter-turn, never oversteering","A full turn immediately","A half turn, then straighten out","As sharply as possible to return quickly"],
  answer:"About a quarter-turn, never oversteering",
  explain:"Turn the wheel about a quarter-turn to return to the pavement, then steer back into your lane — oversteering here is what leads to loss of control." },

{ id:133, topic:"collisions", q:"Rollover crashes are more common in which type of vehicle, due to a higher center of gravity?",
  choices:["SUVs, vans, pickups, and small trucks","Compact passenger sedans","Motorcycles","Low-profile sports cars"],
  answer:"SUVs, vans, pickups, and small trucks",
  explain:"Vehicles with higher centers of gravity — SUVs, vans, pickups, and small trucks — are more top-heavy and prone to rollovers." },

{ id:134, topic:"collisions", q:"What percentage of rollover crashes involve only a single vehicle (no other vehicle involved)?",
  choices:["More than 80%","About 25%","About 50%","Less than 10%"],
  answer:"More than 80%",
  explain:"More than 80% of all rollovers involve no other vehicle besides the one that rolls over — most happen during ordinary driving after a swerve or an off-road excursion." },

{ id:135, topic:"collisions", q:"The most effective way to reduce the risk of injury or death in a rollover crash is to:",
  choices:["Wear your safety belt","Never exceed 30 mph in any vehicle","Keep both hands at 12 o'clock at all times","Avoid driving any vehicle with high ground clearance"],
  answer:"Wear your safety belt",
  explain:"Wearing a safety belt is the single most effective way to reduce rollover injury/death risk — unbelted occupants can be thrown from the vehicle." },

{ id:136, topic:"collisions", q:"Your low-beam headlights let you see clearly about how far ahead at night?",
  choices:["150 to 200 feet","350 to 400 feet","50 to 75 feet","500 feet"],
  answer:"150 to 200 feet",
  explain:"Low beams let you see about 150-200 feet ahead (safe at about 45 mph); high beams extend that to 350-400 feet (safe at about 65 mph)." },

{ id:137, topic:"collisions", q:"When visibility is reduced to no farther than 100 feet due to fog, heavy rain, snow, or smoke, you should not drive faster than:",
  choices:["30 mph","45 mph","20 mph","55 mph"],
  answer:"30 mph",
  explain:"When you cannot see farther than 100 feet ahead due to adverse weather, you cannot safely drive faster than 30 mph." },

// ============================= SECTION 9: SHARING THE ROAD (sharing_road) =============================
{ id:138, topic:"sharing_road", q:"If there is no sidewalk, a pedestrian should walk:",
  choices:["On the left side of the street, facing oncoming traffic","On the right side of the street, with the flow of traffic","In the middle of the road for visibility","On whichever side is more shaded"],
  answer:"On the left side of the street, facing oncoming traffic",
  explain:"Without a sidewalk, pedestrians should walk on the left, facing oncoming traffic, so they can see approaching vehicles." },

{ id:139, topic:"sharing_road", q:"As a driver, if a pedestrian is jaywalking (crossing outside a crosswalk illegally), you must:",
  choices:["Stop for them regardless","Only stop if they are in a marked crosswalk","Proceed, since they are breaking the law","Honk and continue driving through"],
  answer:"Stop for them regardless",
  explain:"Even if a pedestrian is jaywalking, you must stop for them — the law requires yielding to pedestrians in the roadway under all circumstances." },

{ id:140, topic:"sharing_road", q:"If a flashing \"DON'T WALK\" signal appears while a pedestrian is already crossing the street, they should:",
  choices:["Finish crossing the street","Immediately stop and reverse back to the curb they left","Run back to whichever curb is closer","Sit down in the crosswalk and wait"],
  answer:"Finish crossing the street",
  explain:"A pedestrian already in the crosswalk when the flashing DON'T WALK appears may finish crossing; they should not begin a new crossing at that point." },

{ id:141, topic:"sharing_road", q:"As a bicyclist, Kansas law requires you to ride:",
  choices:["On the right side of the roadway","On the left side, facing traffic","On the sidewalk wherever available","In the center of the travel lane at all times"],
  answer:"On the right side of the roadway",
  explain:"Bicyclists are required to ride on the right side of the roadway, following the same basic rules of the road as motor vehicles." },

{ id:142, topic:"sharing_road", q:"Under Kansas' \"Dead Red Law,\" a bicyclist at an intersection whose signal will not turn green may:",
  choices:["Cross after waiting a reasonable time, if it can be done safely without impeding cross traffic","Never legally cross until the signal changes","Immediately proceed, regardless of cross traffic","Only cross if a police officer directs them to"],
  answer:"Cross after waiting a reasonable time, if it can be done safely without impeding cross traffic",
  explain:"The Dead Red Law lets a bicyclist cross after a reasonable wait if the signal won't detect the bike, as long as they don't impede cross-traffic or cause a crash." },

{ id:143, topic:"sharing_road", q:"A bicyclist may use the full width of a travel lane when:",
  choices:["An obstacle or hazard exists, such as debris, cracks, or parked cars","It is never allowed under any circumstance","Only after dark","Only when riding with another cyclist"],
  answer:"An obstacle or hazard exists, such as debris, cracks, or parked cars",
  explain:"Bicyclists may take the full lane when a hazard exists that could impede their riding path, such as road debris, cracks, or parked vehicles." },

{ id:144, topic:"sharing_road", q:"If you are about to make a right turn just after passing a bicyclist, you should:",
  choices:["Slow down and let the cyclist clear the intersection before turning","Pass quickly, then turn right immediately","Honk to move the cyclist aside first","Turn right in front of them since you have the right-of-way"],
  answer:"Slow down and let the cyclist clear the intersection before turning",
  explain:"To avoid a collision, slow down and let the bicyclist clear the intersection before completing your right turn — never turn sharply in front of a cyclist." },

{ id:145, topic:"sharing_road", q:"\"Sharrows\" are pavement markings that:",
  choices:["Recommend where a bicyclist should ride to flow with traffic on higher-volume roads","Mark a fully separated, bicycle-only lane","Indicate a low-traffic bikeway or bike route","Mark a pedestrian crossing zone"],
  answer:"Recommend where a bicyclist should ride to flow with traffic on higher-volume roads",
  explain:"Sharrows (a bicycle icon with two chevrons) recommend where in the lane a bicyclist should ride on roads with higher traffic volumes; they don't mark an exclusive lane." },

{ id:146, topic:"sharing_road", q:"A motorized bicycle or moped, by the handbook's definition, has a maximum design speed of no more than:",
  choices:["30 mph","20 mph","45 mph","55 mph"],
  answer:"30 mph",
  explain:"A moped/motorized bicycle is defined as having a maximum design speed of no more than 30 mph, among other criteria like engine size." },

{ id:147, topic:"sharing_road", q:"A motorized bicycle or moped, by definition, has a motor producing no more than:",
  choices:["3.5 brake horsepower","10 brake horsepower","1 brake horsepower","50 brake horsepower"],
  answer:"3.5 brake horsepower",
  explain:"The definition requires a motor producing no more than 3.5 brake horsepower and a cylinder capacity no larger than 130cc, with automatic transmission." },

{ id:148, topic:"sharing_road", q:"Nearly 40 percent of motorcycle crashes involving another vehicle are caused by:",
  choices:["The other vehicle turning left in front of the motorcyclist","The motorcyclist speeding excessively","The motorcyclist running a red light","A car following too closely behind the motorcycle"],
  answer:"The other vehicle turning left in front of the motorcyclist",
  explain:"Nearly 40% of these crashes happen when another vehicle turns left in front of the motorcyclist — drivers should look carefully for motorcycles before turning left." },

{ id:149, topic:"sharing_road", q:"When following a motorcycle, you should allow a following distance of at least:",
  choices:["3 to 4 seconds (more in wet conditions)","1 second","6 to 8 seconds","10 seconds minimum"],
  answer:"3 to 4 seconds (more in wet conditions)",
  explain:"Allow 3 to 4 seconds (or more in wet conditions) when following a motorcycle, since they can stop quickly and following too closely is dangerous." },

{ id:150, topic:"sharing_road", q:"You should not assume a motorcyclist is about to turn just because their turn signal is flashing because:",
  choices:["Motorcycle signals may not self-cancel and could have been left on by mistake","Motorcyclists never actually use turn signals","A flashing signal always means they are about to stop completely","It usually indicates a mechanical malfunction"],
  answer:"Motorcycle signals may not self-cancel and could have been left on by mistake",
  explain:"Motorcycle turn signals may not self-cancel, so the rider may have simply forgotten to turn it off — don't pull out until you actually see the motorcycle begin to turn." },

{ id:151, topic:"sharing_road", q:"When you hear a siren or see an emergency vehicle approaching with flashing lights, you should:",
  choices:["Move to the right and pull over to the curb or edge of the road and stop","Speed up to clear the area quickly","Stop immediately in your current lane, wherever you are","Pull to the left shoulder and stop"],
  answer:"Move to the right and pull over to the curb or edge of the road and stop",
  explain:"Move to the right and stop as close to the curb or edge of the road as possible, keeping intersections clear, and never follow the emergency vehicle." },

{ id:152, topic:"sharing_road", q:"After an emergency vehicle passes, how far must you stay from it before returning to normal driving?",
  choices:["At least 500 feet","At least 100 feet","At least 1,000 feet","At least 50 feet"],
  answer:"At least 500 feet",
  explain:"You must stay at least 500 feet away from the emergency vehicle even after it has passed and you resume driving." },

{ id:153, topic:"sharing_road", q:"The \"No-Zone\" refers to:",
  choices:["Blind spot areas around large trucks and buses where vehicles disappear from the driver's view","A restricted zone where no vehicles of any kind may enter","The area directly in front of any vehicle at a stop light","A designated no-parking zone near schools"],
  answer:"Blind spot areas around large trucks and buses where vehicles disappear from the driver's view",
  explain:"The No-Zone describes the large blind spots on the sides, front, and rear of trucks and buses where other vehicles vanish from the commercial driver's view." },

{ id:154, topic:"sharing_road", q:"If you cannot see a truck driver's face in their side mirror, this means:",
  choices:["The truck driver cannot see you either","The truck driver can still see you clearly","You are following too closely regardless of mirror visibility","The truck's mirror is broken"],
  answer:"The truck driver cannot see you either",
  explain:"A simple rule of thumb: if you can't see the truck driver's face in their mirror, they can't see you — avoid lingering in that blind spot." },

{ id:155, topic:"sharing_road", q:"A loaded truck traveling at 55 mph under ideal conditions needs a minimum stopping distance of about:",
  choices:["335 feet","158 feet","500 feet","100 feet"],
  answer:"335 feet",
  explain:"A loaded truck at 55 mph needs at least 335 feet to stop — over 1.5 times the stopping distance of a car — so never cut sharply in front of one." },

{ id:156, topic:"sharing_road", q:"You are NOT required to stop for a transit (city) bus that is dropping off or picking up passengers unless:",
  choices:["You are directly behind it","It is after dark","Children are visible near the bus","The bus has its hazard lights on"],
  answer:"You are directly behind it",
  explain:"Unlike a school bus, you don't have to stop for a transit bus loading/unloading passengers unless you are directly behind it." },

{ id:157, topic:"sharing_road", q:"A fluorescent orange-and-red slow-moving-vehicle triangle displayed on the rear of a vehicle indicates it is traveling:",
  choices:["Less than 25 mph","Less than 45 mph","In reverse only","Under a special road-closure permit"],
  answer:"Less than 25 mph",
  explain:"This triangle emblem, seen on farm equipment and animal-drawn vehicles, warns that the vehicle is traveling less than 25 mph." },

// ============================= SECTION 10: SPECIAL DRIVING SITUATIONS (special_situations) =============================
{ id:158, topic:"special_situations", q:"At night, high-beam headlights let you see about how much farther ahead than low beams?",
  choices:["Twice as far","The same distance","Three times as far","Half as far"],
  answer:"Twice as far",
  explain:"High beams let you see clearly about twice as far as low beams — use them whenever there is no oncoming traffic." },

{ id:159, topic:"special_situations", q:"You should dim your high beams when an oncoming vehicle is within about:",
  choices:["One block","500 feet exactly","One mile","100 feet"],
  answer:"One block",
  explain:"Dim your high beams when you come within about one block of an oncoming vehicle to avoid blinding the other driver." },

{ id:160, topic:"special_situations", q:"If an oncoming driver fails to dim their high beams and you flash yours once with no response, you should:",
  choices:["Look toward the right side of the road to avoid being blinded","Keep your own high beams on to \"get back\" at them","Look directly at their headlights to judge distance","Come to a complete stop in your lane"],
  answer:"Look toward the right side of the road to avoid being blinded",
  explain:"If the other driver won't dim their lights, look toward the right edge of the road — don't retaliate by leaving your brights on, as that can blind both drivers." },

{ id:161, topic:"special_situations", q:"While driving at night, you should avoid wearing:",
  choices:["Sunglasses or colored glasses","Your seatbelt","Prescription corrective lenses","A wristwatch"],
  answer:"Sunglasses or colored glasses",
  explain:"Colored or tinted lenses cause your eyes to adjust more slowly and reduce vision at night — avoid them after dark." },

{ id:162, topic:"special_situations", q:"About how much water is needed to reach the bottom of most passenger cars and potentially cause a stall or loss of control?",
  choices:["6 inches","1 inch","12 inches","24 inches"],
  answer:"6 inches",
  explain:"Just 6 inches of water can reach the bottom of most passenger cars, causing loss of control or stalling." },

{ id:163, topic:"special_situations", q:"About how much rushing floodwater can carry away most vehicles?",
  choices:["2 feet","6 inches","6 feet","1 foot"],
  answer:"2 feet",
  explain:"Just 2 feet of rushing water can carry away most vehicles — never attempt to drive through fast-moving floodwater." },

{ id:164, topic:"special_situations", q:"If you see a flooded roadway ahead, you should:",
  choices:["Turn around and find another route","Check the depth with a stick, then cross if it looks shallow","Follow the vehicle ahead of you through it","Proceed slowly since most cars can cross safely"],
  answer:"Turn around and find another route",
  explain:"Never attempt to cross a flooded road — floodwater can hide dips or have washed away the road surface. Turn around and find another route." },

{ id:165, topic:"special_situations", q:"Fines for speeding in a work zone are:",
  choices:["Doubled","Tripled","The same as normal fines","Waived if no workers are visible"],
  answer:"Doubled",
  explain:"Fines for speeding in a work zone are doubled, reflecting the increased risk to workers and drivers alike." },

{ id:166, topic:"special_situations", q:"Big-game animal collisions (mostly deer) are most likely during dawn/dusk and which months?",
  choices:["October through December","June through August","January through March","April through June"],
  answer:"October through December",
  explain:"Use extra caution at dawn and dusk and between October and December, when deer and other big game are most active." },

{ id:167, topic:"special_situations", q:"If a collision with an animal is unavoidable, you should:",
  choices:["Not swerve, and keep the vehicle under control on the roadway","Swerve sharply no matter what to avoid the impact","Brake hard and turn off the engine mid-collision","Accelerate to pass over the animal quickly"],
  answer:"Not swerve, and keep the vehicle under control on the roadway",
  explain:"If a collision is inevitable, do not swerve — your risk of personal injury may be greater if you do. Keep control of the vehicle instead." },

{ id:168, topic:"special_situations", q:"If a dog is chasing your vehicle, the recommended response is to:",
  choices:["Slow down until it is near, then accelerate away from it","Speed up immediately to outrun it","Stop completely and wait for it to leave","Honk continuously until it retreats"],
  answer:"Slow down until it is near, then accelerate away from it",
  explain:"Dogs chasing vehicles tend to approach in a straight line — slow down until it's near your vehicle, then accelerate away from the dog." },

{ id:169, topic:"special_situations", q:"When driving on gravel or dirt roads, compared to pavement, you should:",
  choices:["Reduce speed and increase your following distance","Increase speed to maintain momentum and control","Reduce speed but decrease your following distance","Drive the same as you would on pavement"],
  answer:"Reduce speed and increase your following distance",
  explain:"Gravel and dirt roads offer less traction, so reduce speed and increase following distance since it takes longer to stop." },

{ id:170, topic:"special_situations", q:"Open steel bridge gratings can cause:",
  choices:["Reduced traction for braking and steering","Increased tire grip compared to asphalt","No change in vehicle handling","Better visibility of the roadway at night"],
  answer:"Reduced traction for braking and steering",
  explain:"Open bridge gratings and steel bridges reduce traction for braking and steering — reduce speed and keep a firm grip on the wheel." },

{ id:171, topic:"special_situations", q:"On rural roads, dust from dry gravel roads reduces visibility. You should respond by:",
  choices:["Using low beam headlights, slowing down, and increasing following distance","Using high beam headlights to cut through the dust","Speeding up to drive out of the dust cloud quickly","Turning off your headlights to reduce glare in the dust"],
  answer:"Using low beam headlights, slowing down, and increasing following distance",
  explain:"In dusty conditions on gravel roads, use low beams to be more visible, slow down, and increase following distance." },

{ id:172, topic:"special_situations", q:"Uncontrolled intersections on rural roads (no stop or yield signs) require you to:",
  choices:["Slow down and be prepared to stop for crossing or oncoming traffic","Maintain speed since rural roads have lower traffic volume","Always come to a complete stop regardless of visibility","Only slow down if another vehicle is visible"],
  answer:"Slow down and be prepared to stop for crossing or oncoming traffic",
  explain:"Uncontrolled rural intersections can be dangerous — always approach with caution, slowing down and being ready to stop." },

// ============================= SECTION 11: PREPARING FOR YOUR LICENSE TEST (test_prep) =============================
{ id:173, topic:"test_prep", q:"The Kansas knowledge test consists of how many multiple-choice questions?",
  choices:["25","20","30","50"],
  answer:"25",
  explain:"The knowledge test consists of 25 multiple-choice questions on traffic laws, signs, and driving practices." },

{ id:174, topic:"test_prep", q:"To pass the Kansas knowledge test, you must score at least:",
  choices:["80%","70%","90%","60%"],
  answer:"80%",
  explain:"You must score an 80% or higher to pass the knowledge test and become eligible for the skills tests." },

{ id:175, topic:"test_prep", q:"If you fail the knowledge test on your 4th attempt, how long must you wait before starting the process again?",
  choices:["6 months from the most recent failed exam","30 days","1 year","3 months"],
  answer:"6 months from the most recent failed exam",
  explain:"You get 4 opportunities to pass the knowledge exam; after a 4th failure, you must wait 6 months from the most recent failed exam." },

{ id:176, topic:"test_prep", q:"After passing the knowledge test, which three additional tests must you pass to receive your driver's license?",
  choices:["Pre-Trip Vehicle Safety Inspection, Basic Vehicle Control Skills, and Road Test","A written essay, a medical physical, and a defensive driving course","Vision, hearing, and reflex tests only","Parallel parking, highway merging, and night-driving tests only"],
  answer:"Pre-Trip Vehicle Safety Inspection, Basic Vehicle Control Skills, and Road Test",
  explain:"You must pass the Pre-Trip Vehicle Safety Inspection Test, the Basic Vehicle Control Skills Test, and the Road Test to receive your license." },

{ id:177, topic:"test_prep", q:"Using the tire \"penny test,\" if part of Lincoln's head is covered by the tread, this means:",
  choices:["You have a safe amount of tread remaining","Your tread is dangerously worn and the tire must be replaced now","The tire is over-inflated","The tire has a manufacturing defect"],
  answer:"You have a safe amount of tread remaining",
  explain:"If any part of Lincoln's head is covered by the tread when inserted into the groove, you have a safe amount of tread; if his whole head is visible, the tread is too worn." },

{ id:178, topic:"test_prep", q:"For the Driver's License Test vehicle inspection, if the outside temperature is over 85°F, the vehicle must have:",
  choices:["A properly working air conditioner","An open window only, no A/C required","A working heater","No specific temperature-related requirement"],
  answer:"A properly working air conditioner",
  explain:"Above 85°F, the air conditioner must work properly. Between 75-85°F, A/C must work OR the passenger window must roll down. Under 45°F, the heater must work properly." },

{ id:179, topic:"test_prep", q:"For the Driver's License Test vehicle inspection, if the outside temperature is under 45°F, the vehicle must have:",
  choices:["A properly working heater","A properly working air conditioner","An open window","No specific requirement"],
  answer:"A properly working heater",
  explain:"Under 45°F outside temperature, the vehicle's heater must work properly for the road test vehicle to be acceptable." },

{ id:180, topic:"test_prep", q:"During a Basic Vehicle Control Skills exercise, stopping and reversing direction to get a better position is scored as a:",
  choices:["Reversal","Encroachment","Final position error","Automatic failure"],
  answer:"Reversal",
  explain:"A reversal happens each time you stop and change direction to reposition; each reversal counts as an error (simply stopping without changing direction does not)." },

{ id:181, topic:"test_prep", q:"Touching or crossing an exercise boundary line or cone with any part of the vehicle (except the mirrors) is scored as a(n):",
  choices:["Encroachment","Reversal","Head check error","Automatic failure"],
  answer:"Encroachment",
  explain:"An encroachment is touching or crossing a boundary line or cone with any part of the vehicle other than the mirrors; each one counts as an error." },

{ id:182, topic:"test_prep", q:"During right-side or left-side parallel parking, your vehicle must come within how many inches of the curb without crossing the boundary lines?",
  choices:["12 inches","6 inches","24 inches","3 inches"],
  answer:"12 inches",
  explain:"You must bring the vehicle within 12 inches of the curb side of the space without crossing the side or rear boundaries." },

{ id:183, topic:"test_prep", q:"Which of the following will result in an AUTOMATIC FAILURE on the road test?",
  choices:["Not wearing your safety belt","Signaling a few seconds earlier than necessary","Driving 3 mph under the posted speed limit","Braking gently and smoothly at a stop sign"],
  answer:"Not wearing your safety belt",
  explain:"Automatic failures include not wearing your safety belt, not checking blind spots, receiving a moving-violation citation, not yielding to pedestrians, or being in an avoidable crash." },

{ id:184, topic:"test_prep", q:"Failing to check your blind spots during the road test will result in:",
  choices:["An automatic failure","A minor point deduction only","A verbal warning from the examiner","No penalty if no other vehicle was present"],
  answer:"An automatic failure",
  explain:"Not checking your blind spots is listed explicitly as an automatic failure on the road test." },

{ id:185, topic:"test_prep", q:"When stopping behind another vehicle, a safe gap is one where you can see:",
  choices:["The rear tires of the vehicle ahead of you","Only the vehicle's license plate","The top of the vehicle's trunk","Exactly one car length, regardless of visibility"],
  answer:"The rear tires of the vehicle ahead of you",
  explain:"A safe stopping gap behind another vehicle is one where you can see the rear tires of the vehicle ahead touching the pavement." },

{ id:186, topic:"test_prep", q:"The knowledge test is not timed, but generally takes about:",
  choices:["15 to 20 minutes","5 minutes","45 minutes to an hour","2 hours"],
  answer:"15 to 20 minutes",
  explain:"The test is not timed but generally takes about 15 to 20 minutes to complete." },

{ id:187, topic:"test_prep", q:"If you are under 17 years old, before taking the Driver's License road test you must:",
  choices:["Hold your Instruction Permit for one full year, or until turning 17, whichever comes first","Hold your permit for at least 90 days only","Take an additional written test beyond the knowledge exam","Complete driver's education with no minimum permit period"],
  answer:"Hold your Instruction Permit for one full year, or until turning 17, whichever comes first",
  explain:"Applicants under 17 must hold their Instruction Permit for a full year or until they turn 17, whichever happens first, before taking the road test." },

{ id:188, topic:"test_prep", q:"An \"encroachment\" during a skills test exercise does NOT include contact made by the vehicle's:",
  choices:["Mirrors","Bumper","Tires","Door"],
  answer:"Mirrors",
  explain:"The definition of an encroachment specifically excludes the vehicle's mirrors — touching a line or cone with the mirror is not counted as an error." },

// ============================= SECTION 12: TRIP PLANNING & WEATHER (optional) =============================
{ id:189, topic:"optional", q:"If one person is doing all the driving on a trip, the daily driving limit should be considered:",
  choices:["6 to 8 hours","10 to 12 hours","3 to 4 hours","There is no recommended limit"],
  answer:"6 to 8 hours",
  explain:"If one person does all the driving, 6 to 8 hours in a day should be considered the limit; with two or more sharing, total time should not exceed 10-11 hours." },

{ id:190, topic:"optional", q:"When two or more people share the driving on a trip, total driving time should not exceed:",
  choices:["10 to 11 hours","6 to 8 hours","15 hours","24 hours"],
  answer:"10 to 11 hours",
  explain:"When driving is shared among two or more people, total daily driving time should not exceed 10 to 11 hours." },

{ id:191, topic:"optional", q:"On major highways, the recommended pace is about 100-110 miles every two hours, with breaks of:",
  choices:["10 to 15 minutes every 2 to 3 hours","30 minutes every hour","5 minutes every 4 hours","No breaks are recommended"],
  answer:"10 to 15 minutes every 2 to 3 hours",
  explain:"Plan for 10-15 minute breaks every 2-3 hours, plus a 1-hour stop for meals, when covering 100-110 miles every two hours." },

{ id:192, topic:"optional", q:"Studded snow tires are legal to use on Kansas vehicles from:",
  choices:["November 1st through April 1st","Year-round, with no restriction","December through February only","October through May"],
  answer:"November 1st through April 1st",
  explain:"Studded snow tires are only legal in Kansas from November 1st through April 1st each year." },

{ id:193, topic:"optional", q:"If you become stranded in your vehicle during cold weather, you should:",
  choices:["Stay with your vehicle","Walk to find help immediately","Leave the vehicle and shelter under a bridge","Abandon the vehicle as soon as it stalls"],
  answer:"Stay with your vehicle",
  explain:"Stay with your vehicle unless you know exactly where you are and how far help is — most cold-weather deaths occur when people leave their vehicle and become lost." },

{ id:194, topic:"optional", q:"While waiting for help in a stranded, cold vehicle, you should run the engine and heater for about how long each hour?",
  choices:["About 10 minutes","The entire hour continuously","About 2 minutes","Only if the temperature drops below zero"],
  answer:"About 10 minutes",
  explain:"Run the engine and heater for about 10 minutes each hour to charge the battery and warm the interior, then turn it off and repeat as fuel allows." },

{ id:195, topic:"optional", q:"While running the engine for warmth in a stranded vehicle, you should:",
  choices:["Leave a window partially open for ventilation","Keep all windows tightly shut for maximum warmth","Turn off the heater to conserve fuel instead","Run the air conditioner instead of the heater"],
  answer:"Leave a window partially open for ventilation",
  explain:"Leave at least one window partially open even in extreme cold — this prevents carbon monoxide buildup, which heavy snow and ice can otherwise seal in." },

{ id:196, topic:"optional", q:"In very hot weather, you should inspect your tires every:",
  choices:["Two hours or 100 miles","500 miles","Once per day regardless of distance","Only before a long trip"],
  answer:"Two hours or 100 miles",
  explain:"Inspect tire mounting and pressure every two hours or every 100 miles when driving in hot weather, since heat increases tire pressure." },

{ id:197, topic:"optional", q:"In hot weather, if your tire pressure increases due to heat, you should:",
  choices:["Not let air out, or the pressure will be too low once the tires cool","Let air out immediately to normalize the pressure","Add more air to compensate for the heat","Ignore it, since pressure change doesn't matter"],
  answer:"Not let air out, or the pressure will be too low once the tires cool",
  explain:"Air pressure naturally increases with heat; letting air out while hot leaves the tires under-inflated once they cool back down." },

{ id:198, topic:"optional", q:"\"Bleeding tar\" on road pavement in very hot weather can cause:",
  choices:["Very slippery spots requiring caution","Improved traction from added texture","No real impact on driving conditions","A stronger smell but no safety concern"],
  answer:"Very slippery spots requiring caution",
  explain:"Tar that rises to the surface in hot weather creates very slippery spots — use caution whenever you see bleeding tar on the roadway." },

{ id:199, topic:"optional", q:"If you spot a tornado while driving, you should avoid seeking shelter:",
  choices:["Under a bridge or overpass","In a sturdy, well-built structure","By driving away from the tornado's path","In a low-lying ditch away from the vehicle"],
  answer:"Under a bridge or overpass",
  explain:"Avoid overpasses and bridges — the \"wind tunnel effect\" makes winds stronger underneath them, and they offer little protection from flying debris." },

{ id:200, topic:"optional", q:"If your vehicle is sinking in floodwater and you cannot open a window, you should:",
  choices:["Take a breath, kick the window out, then swim to any air pocket for one more breath before escaping","Wait calmly inside the vehicle for rescue","Try to pry open the trunk from inside first","Honk the horn continuously until the water recedes"],
  answer:"Take a breath, kick the window out, then swim to any air pocket for one more breath before escaping",
  explain:"If a side window won't open, take a breath and kick it out; if needed, go to the air pocket near the highest point of the vehicle for one more breath, then escape." }

];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTIONS, TOPICS };
}
