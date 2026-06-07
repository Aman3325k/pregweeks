export interface WeekData {
  week: number;
  trimester: number;
  babySize: {
    name: string;
    lengthCm: number;
    weightG: number;
    visualDescription: string;
  };
  babyDevelopment: string;
  motherChanges: string;
  symptoms: string[];
  tips: string[];
  milestones: string[];
}

export const pregnancyData: WeekData[] = [
  {
    week: 1,
    trimester: 1,
    babySize: { name: "Not yet conceived", lengthCm: 0, weightG: 0, visualDescription: "The journey is just beginning." },
    babyDevelopment: "This week is actually your menstrual period. Although you are not technically pregnant yet, your body is preparing for ovulation. The cycle of egg development begins now.",
    motherChanges: "You are experiencing your period. Your uterus is shedding its lining from the previous cycle in preparation for a new potential pregnancy.",
    symptoms: ["Menstrual bleeding", "Cramping", "Fatigue", "Mood changes", "Bloating"],
    tips: [
      "Start taking a prenatal vitamin with at least 400 mcg of folic acid daily.",
      "Track your cycle length to estimate your ovulation window.",
      "Avoid smoking, alcohol, and unnecessary medications."
    ],
    milestones: ["Cycle Start"]
  },
  {
    week: 2,
    trimester: 1,
    babySize: { name: "Ovulating", lengthCm: 0, weightG: 0, visualDescription: "Your body is preparing for conception." },
    babyDevelopment: "Towards the end of this week, ovulation occurs. If an egg is released and fertilized by a sperm, conception takes place. This is when the genetic makeup of your baby is determined.",
    motherChanges: "Estrogen levels rise, thickening the uterine lining. You may notice clear, slippery cervical mucus, which is a sign of high fertility.",
    symptoms: ["Increased energy", "Mild lower abdominal pain (mittelschmerz)", "Light spotting", "Breast tenderness"],
    tips: [
      "Have intercourse every other day during your fertile window (typically days 11-15 of a 28-day cycle).",
      "Stay hydrated and maintain a balanced diet.",
      "Keep track of ovulation signs, such as basal body temperature changes."
    ],
    milestones: ["Ovulation & Conception"]
  },
  {
    week: 3,
    trimester: 1,
    babySize: { name: "Microscopic Blastocyst", lengthCm: 0.1, weightG: 0.01, visualDescription: "Smaller than a grain of salt." },
    babyDevelopment: "The fertilized egg (zygote) divides rapidly as it travels down the fallopian tube. It becomes a hollow ball of cells called a blastocyst and begins to implant into the uterine lining.",
    motherChanges: "Implantation triggers the production of hCG (human chorionic gonadotropin), the hormone detected by pregnancy tests. You won't feel this yet, but your body is undergoing a massive shift.",
    symptoms: ["Mild cramping", "Light implantation spotting", "Fatigue", "Slight breast sensitivity"],
    tips: [
      "Continue taking prenatal vitamins.",
      "Keep eating nutrient-dense foods, focusing on leafy greens, lean proteins, and whole grains.",
      "Rest when you feel tired; early hormonal changes are starting to drain your energy."
    ],
    milestones: ["Fertilization", "Implantation Initiated"]
  },
  {
    week: 4,
    trimester: 1,
    babySize: { name: "Poppy Seed", lengthCm: 0.15, weightG: 0.05, visualDescription: "About the size of a tiny poppy seed." },
    babyDevelopment: "The blastocyst is now officially an embryo. The cells are organizing into layers: one will form the baby, another the amniotic sac, and the third the placenta.",
    motherChanges: "Your missed period is the biggest indicator. A home pregnancy test can likely detect a positive result now. Your uterine lining is enriching to support the embryo.",
    symptoms: ["Missed period", "Fatigue", "Breast soreness", "Frequent urination", "Mild bloating"],
    tips: [
      "Take a home pregnancy test if your period is late.",
      "Schedule your first prenatal appointment (usually set for week 8 to 12).",
      "Limit caffeine intake to less than 200mg per day (about one 12oz cup of coffee)."
    ],
    milestones: ["Positive Pregnancy Test Possible", "Embryo Formation"]
  },
  {
    week: 5,
    trimester: 1,
    babySize: { name: "Apple Seed", lengthCm: 0.2, weightG: 0.1, visualDescription: "About the size of an apple seed." },
    babyDevelopment: "The baby's heart, brain, spinal cord, and blood vessels are beginning to form. The tiny heart is starting to beat and pump blood.",
    motherChanges: "Hormone levels (hCG, progesterone, and estrogen) are surging. This can trigger early pregnancy symptoms as your cardiovascular system expands.",
    symptoms: ["Morning sickness / nausea", "Extreme fatigue", "Tender, swollen breasts", "Frequent urination", "Metallic taste in mouth"],
    tips: [
      "Eat small, frequent meals to help combat nausea.",
      "Ginger tea or peppermint can help settle an upset stomach.",
      "Drink plenty of water to support your expanding blood volume."
    ],
    milestones: ["Heart Starts Beating", "Neural Tube Closes"]
  },
  {
    week: 6,
    trimester: 1,
    babySize: { name: "Sweet Pea", lengthCm: 0.5, weightG: 0.2, visualDescription: "Similar to a small sweet pea." },
    babyDevelopment: "The embryo's jaw, cheeks, chin, and ears are taking shape. Tiny buds that will become arms and legs are appearing. The heart is beating at about 100-150 times per minute.",
    motherChanges: "Mood swings are common due to hormonal shifts. You might also start feeling aversion to certain foods and smells.",
    symptoms: ["Nausea with or without vomiting", "Fatigue", "Sore breasts", "Frequent urination", "Mood swings"],
    tips: [
      "Keep simple crackers by your bedside to eat before getting up to curb morning sickness.",
      "Listen to your body and nap when needed.",
      "Avoid raw fish, undercooked meats, and unpasteurized dairy."
    ],
    milestones: ["Limb Buds Develop"]
  },
  {
    week: 7,
    trimester: 1,
    babySize: { name: "Blueberry", lengthCm: 1.3, weightG: 0.5, visualDescription: "About the size of a fresh blueberry." },
    babyDevelopment: "The baby's brain is growing rapidly, generating about 100,000 new brain cells every minute! Tiny nostrils, mouth, and eye lenses are forming, and the limb buds are developing joints.",
    motherChanges: "Your uterus has doubled in size over the last five weeks. You may notice your clothes feeling a bit snugger around the waist, though you probably aren't showing yet.",
    symptoms: ["Increased morning sickness", "Saliva buildup", "Cravings or food aversions", "Mild pelvic pressure", "Heartburn"],
    tips: [
      "Stay hydrated—sip water throughout the day rather than drinking large amounts at once.",
      "Invest in a comfortable, supportive bra.",
      "Look into low-impact exercises like prenatal yoga or walking."
    ],
    milestones: ["Brain Rapid Growth"]
  },
  {
    week: 8,
    trimester: 1,
    babySize: { name: "Raspberry", lengthCm: 1.6, weightG: 1.0, visualDescription: "About the size of a ripe raspberry." },
    babyDevelopment: "The hands and feet are developing webbed fingers and toes. The baby's tail (extension of the tailbone) is disappearing. Lungs and breathing tubes begin to form.",
    motherChanges: "Your blood volume is increasing to supply the baby. You may experience vivid dreams, which is common due to hormonal activity and interrupted sleep patterns.",
    symptoms: ["Vivid dreams", "Nausea", "Fatigue", "Constipation", "Stuffy nose"],
    tips: [
      "Increase fiber intake (fruits, vegetables, whole grains) to prevent constipation.",
      "Write down your questions for your first doctor's visit.",
      "Keep up oral hygiene—pregnancy hormones can make gums sensitive and prone to bleeding."
    ],
    milestones: ["Fingers and Toes Form", "Embryonic Tail Disappears"]
  },
  {
    week: 9,
    trimester: 1,
    babySize: { name: "Green Olive", lengthCm: 2.3, weightG: 2.0, visualDescription: "About the size of a medium green olive." },
    babyDevelopment: "The embryonic stage ends, and the fetal stage begins. The baby's basic physiology is in place. Joints like elbows and knees are functioning, allowing the fetus to move its limbs.",
    motherChanges: "Hormone production is peaking, which might make you feel emotionally sensitive. Your waistline is expanding, and you may experience headaches or dizziness.",
    symptoms: ["Mood swings", "Nausea", "Frequent urination", "Headaches", "Fatigue", "Mild bloating"],
    tips: [
      "Stand up slowly to avoid dizzy spells.",
      "Try cold foods if hot foods trigger your morning sickness.",
      "Start moisturizing your belly, hips, and breasts to soothe dry skin."
    ],
    milestones: ["Transition to Fetus", "First Joint Movements"]
  },
  {
    week: 10,
    trimester: 1,
    babySize: { name: "Prune", lengthCm: 3.1, weightG: 4.0, visualDescription: "About the size of a sweet dried prune." },
    babyDevelopment: "Vital organs—including the brain, kidneys, intestines, and liver—are starting to function. Tiny nails are forming on the fingers and toes, and the baby can swallow amniotic fluid.",
    motherChanges: "Your uterus is now the size of a large grapefruit. You might see blue veins appearing on your breasts and abdomen as blood flow increases.",
    symptoms: ["Fatigue starting to improve slightly", "Visible veins", "Round ligament pain (sharp side cramps)", "Heartburn"],
    tips: [
      "Wear loose, comfortable clothing.",
      "Practice pelvic floor exercises (Kegels) to strengthen your pelvic muscles.",
      "Look into Non-Invasive Prenatal Testing (NIPT) options if recommended by your doctor."
    ],
    milestones: ["Organ Function Begins", "Nails Form"]
  },
  {
    week: 11,
    trimester: 1,
    babySize: { name: "Lime", lengthCm: 4.1, weightG: 7.0, visualDescription: "About the size of a fresh green lime." },
    babyDevelopment: "The baby's head is still about half the length of its body, but the body is catching up. Skin is transparent, and tooth buds are forming under the gums. The baby is active, though you can't feel it yet.",
    motherChanges: "As hCG levels begin to level off, you might experience a slight lift in nausea. Your hair and nails may grow faster and feel stronger due to hormone surges.",
    symptoms: ["Increased appetite", "Gas and bloating", "Dry or itchy skin", "Slightly less nausea"],
    tips: [
      "Incorporate calcium-rich foods (yogurt, cheese, leafy greens) to support baby's bone development.",
      "Apply a gentle moisturizer to alleviate itchy skin.",
      "Consider scheduling your first trimester screening ultrasound."
    ],
    milestones: ["Active Fetal Movements", "Tooth Buds Appear"]
  },
  {
    week: 12,
    trimester: 1,
    babySize: { name: "Plum", lengthCm: 5.4, weightG: 14.0, visualDescription: "About the size of a sweet plum." },
    babyDevelopment: "The baby's reflexes are developing; they can open and close their hands and curl their toes. The kidneys are producing urine, and the bone marrow is starting to make white blood cells.",
    motherChanges: "Your uterus is rising out of the pelvic cavity, relieving pressure on your bladder, which means fewer trips to the bathroom! You may start showing a small baby bump.",
    symptoms: ["Reduced morning sickness", "Fewer bathroom trips", "Headaches", "Dizziness", "Pregnancy glow"],
    tips: [
      "Maintain a safe exercise routine; walking and swimming are excellent.",
      "Start sleeping on your side (preferably left side) instead of your back.",
      "Plan how you want to announce your pregnancy to friends and family."
    ],
    milestones: ["Reflexes Develop", "Uterus Rises from Pelvis"]
  },
  {
    week: 13,
    trimester: 1,
    babySize: { name: "Lemon", lengthCm: 7.4, weightG: 23.0, visualDescription: "About the size of a juicy lemon." },
    babyDevelopment: "This is the final week of the first trimester. The baby has unique fingerprints! Vocal cords are beginning to form, and the intestines are moving from the umbilical cord into the abdomen.",
    motherChanges: "Your energy levels are returning, and nausea is fading. Your libido might increase. The risk of miscarriage drops significantly after this week.",
    symptoms: ["Increased energy", "Higher sex drive", "Visible baby bump", "Leukorrhea (milky discharge)"],
    tips: [
      "Start looking into maternity clothes or belly bands.",
      "Discuss a birth plan draft with your partner.",
      "Enjoy the boost in energy; do some light nesting or plan a babymoon."
    ],
    milestones: ["End of Trimester 1", "Fingerprints Formed"]
  },
  {
    week: 14,
    trimester: 2,
    babySize: { name: "Nectarine", lengthCm: 8.7, weightG: 43.0, visualDescription: "About the size of a nectarine." },
    babyDevelopment: "Welcome to the second trimester! The baby can make facial expressions like squinting, frowning, and grimacing. The thyroid gland is matured, and the baby is starting to grow fine hair called lanugo.",
    motherChanges: "Often called the 'honeymoon phase,' you likely feel much better. Your stomach is beginning to look rounder, and you might feel proud of your growing bump.",
    symptoms: ["Improved appetite", "Round ligament pain", "Stuffy nose", "Thicker hair"],
    tips: [
      "Eat foods high in iron (red meat, spinach, beans) to prevent anemia as your blood volume continues to rise.",
      "Ensure you practice good posture to avoid back strains.",
      "Stay hydrated to minimize round ligament pain."
    ],
    milestones: ["Start of Trimester 2", "Facial Expressions", "Lanugo Appears"]
  },
  {
    week: 15,
    trimester: 2,
    babySize: { name: "Apple", lengthCm: 10.1, weightG: 70.0, visualDescription: "About the size of a sweet apple." },
    babyDevelopment: "The baby's skeleton is developing bones (ossification). They can sense light through their fused eyelids, and their hearing is starting to develop, allowing them to hear your heartbeat and digestive sounds.",
    motherChanges: "You might experience 'pregnancy brain' or forgetfulness. Nasal congestion and occasional nosebleeds can happen due to increased blood flow to mucous membranes.",
    symptoms: ["Forgetfulness", "Nosebleeds or stuffy nose", "Bleeding gums", "Heartburn"],
    tips: [
      "Keep checklists and reminders to manage forgetfulness.",
      "Use a saline nasal spray or humidifier for congestion.",
      "Continue brushing and flossing gently, and visit your dentist."
    ],
    milestones: ["Hearing Development Begins", "Bone Ossification"]
  },
  {
    week: 16,
    trimester: 2,
    babySize: { name: "Avocado", lengthCm: 11.6, weightG: 100.0, visualDescription: "About the size of a ripe avocado." },
    babyDevelopment: "The baby's eyes can make slow movements, and the ears are closer to their final position. The nervous system is connecting to the muscles, so movements are becoming coordinated.",
    motherChanges: "You may feel the baby move for the first time, a sensation known as 'quickening' (often feels like butterflies or bubbles). Your skin may glow due to increased blood flow.",
    symptoms: ["Quickening (first movements)", "Backaches", "Growing breasts", "Dry eyes"],
    tips: [
      "Pay close attention to your body to catch those subtle first movements.",
      "Wear supportive shoes to help with backaches.",
      "Use artificial tears if your eyes feel unusually dry."
    ],
    milestones: ["Quickening (First Movements)", "Coordinated Limb Control"]
  },
  {
    week: 17,
    trimester: 2,
    babySize: { name: "Pomegranate", lengthCm: 13.0, weightG: 140.0, visualDescription: "About the size of a pomegranate." },
    babyDevelopment: "A layer of fat (adipose tissue) starts to form under the baby's skin to provide warmth. The sweat glands are developing, and the baby is practicing sucking and swallowing.",
    motherChanges: "Your center of gravity is shifting, which can make you feel slightly off-balance. Your appetite might be robust, and you may experience sciatic nerve pain.",
    symptoms: ["Sciatica (shooting pain down legs)", "Increased appetite", "Tailbone pain", "Skin pigmentation changes (linea nigra)"],
    tips: [
      "Do gentle stretching or pelvic tilts to relieve sciatic nerve pain.",
      "Choose healthy snacks like nuts, fruit, and yogurt for your increased appetite.",
      "Be careful when walking; wear flat, stable shoes."
    ],
    milestones: ["Fat Storage Begins", "Sweat Glands Form"]
  },
  {
    week: 18,
    trimester: 2,
    babySize: { name: "Artichoke", lengthCm: 14.2, weightG: 190.0, visualDescription: "About the size of an artichoke." },
    babyDevelopment: "The baby's ears stand out from the head, and they can hear external sounds. The baby may be startled by loud noises. A protective coating called vernix caseosa begins to cover the skin.",
    motherChanges: "Your uterus is now about the height of your belly button. You might feel your baby kick, roll, or punch more clearly now.",
    symptoms: ["Clearer fetal movements", "Dizziness", "Swollen feet or ankles", "Leg cramps, especially at night"],
    tips: [
      "Elevate your feet whenever you sit down to reduce swelling.",
      "Stretch your calves before bed to prevent night cramps.",
      "Schedule your anatomy scan (usually done between weeks 18 and 22)."
    ],
    milestones: ["Vernix Coating Starts", "External Hearing Active"]
  },
  {
    week: 19,
    trimester: 2,
    babySize: { name: "Mango", lengthCm: 15.3, weightG: 240.0, visualDescription: "About the size of a sweet mango." },
    babyDevelopment: "The baby's brain is designating specialized areas for sensory development (smell, taste, sight, hearing, and touch). A girls' ovaries now contain millions of primitive eggs.",
    motherChanges: "Round ligament pain can intensify as your uterus stretches further. You might notice dry or flaky patches of skin on your face or body.",
    symptoms: ["Round ligament pain", "Skin changes (chloasma / pregnancy mask)", "Dizziness", "Hip pain"],
    tips: [
      "Change positions slowly to prevent round ligament spasm.",
      "Use sunscreen to prevent pregnancy mask (hyperpigmentation) from worsening.",
      "Sleep with a body pillow between your knees to relieve hip pressure."
    ],
    milestones: ["Sensory Brain Areas Form", "Fetal Eggs Developed"]
  },
  {
    week: 20,
    trimester: 2,
    babySize: { name: "Banana", lengthCm: 25.6, weightG: 300.0, visualDescription: "About the length of a banana (measured head-to-toe)." },
    babyDevelopment: "You are halfway there! Fetal measurements now switch from crown-to-rump to crown-to-heel. The baby is swallowing more amniotic fluid, which helps train their digestive system. A dark, tarry substance called meconium is building up in their bowels.",
    motherChanges: "Your belly button may pop out and become an 'outie.' You are likely having your mid-pregnancy anatomy scan, which is an exciting chance to see the baby's organs, limbs, and potentially find out the gender.",
    symptoms: ["Energy boost", "Heartburn", "Shortness of breath", "Itchy belly skin", "Belly button popping out"],
    tips: [
      "Prepare for your anatomy ultrasound scan.",
      "Hydrate well and moisturize your stretching belly.",
      "Start looking into childbirth education classes."
    ],
    milestones: ["Halfway Milestone (20 Weeks)", "Anatomy Ultrasound", "Meconium Begins Forming"]
  },
  {
    week: 21,
    trimester: 2,
    babySize: { name: "Carrot", lengthCm: 26.7, weightG: 360.0, visualDescription: "About the length of a long carrot." },
    babyDevelopment: "The baby's movements are transitioning from reflex-like flutters to deliberate kicks and nudges. The baby's taste buds are developed, and they can taste the flavors of the foods you eat through the amniotic fluid.",
    motherChanges: "You might feel generally comfortable, but stretch marks may start appearing. Varicose veins and spider veins can show up due to pressure on pelvic veins.",
    symptoms: ["Kicks and nudges", "Stretch marks", "Varicose veins", "Increased appetite"],
    tips: [
      "Wear support hose if you develop varicose veins.",
      "Eat a wide variety of healthy foods to introduce different flavors to your baby.",
      "Avoid standing for long periods without moving."
    ],
    milestones: ["Taste Buds Functioning", "Deliberate Movement"]
  },
  {
    week: 22,
    trimester: 2,
    babySize: { name: "Coconut", lengthCm: 27.8, weightG: 430.0, visualDescription: "About the size of a fresh coconut." },
    babyDevelopment: "The baby's eyes are fully formed, though the irises still lack pigment. The eyebrows and eyelashes are well-defined. The baby is developing a sense of touch and will explore their face and body.",
    motherChanges: "Your uterus is now situated about an inch above your belly button. You might notice mild, painless contractions called Braxton Hicks, which are your uterus's way of practicing for labor.",
    symptoms: ["Braxton Hicks contractions", "Backaches", "Indigestion", "Fast-growing nails"],
    tips: [
      "If you feel a Braxton Hicks contraction, drink a glass of water and change positions.",
      "Practice good posture and avoid lifting heavy objects.",
      "Keep applying moisturizer to soothe stretching abdominal skin."
    ],
    milestones: ["Sense of Touch", "Eyelashes & Eyebrows Formed"]
  },
  {
    week: 23,
    trimester: 2,
    babySize: { name: "Grapefruit", lengthCm: 28.9, weightG: 500.0, visualDescription: "About the size of a grapefruit." },
    babyDevelopment: "The baby's lungs are preparing to breathe by producing surfactant, a substance that helps the air sacs inflate easily. Blood vessels in the lungs are developing to support breathing.",
    motherChanges: "You may experience swollen gums and nosebleeds. You may also start to notice your ankles and feet swelling more, especially at the end of the day.",
    symptoms: ["Swelling (edema) in lower limbs", "Bleeding gums", "Snoring due to nasal congestion", "Back pain"],
    tips: [
      "Avoid sleeping on your back, as it compresses the vena cava and reduces blood flow.",
      "Limit sodium intake and drink water to reduce swelling.",
      "Sleep with your head elevated if you start snoring."
    ],
    milestones: ["Lung Surfactant Production", "Fetal Weight Reaches 500g"]
  },
  {
    week: 24,
    trimester: 2,
    babySize: { name: "Cantaloupe", lengthCm: 30.0, weightG: 600.0, visualDescription: "About the size of a small cantaloupe." },
    babyDevelopment: "The baby reaches viability, meaning they have a chance of survival outside the womb if born early, with intensive medical care. The inner ear is fully developed, establishing the baby's sense of balance.",
    motherChanges: "You will soon be tested for gestational diabetes (glucose screening test, usually between weeks 24 and 28). You might notice your skin changes, like dark spots or lines, becoming more pronounced.",
    symptoms: ["Itchy skin", "Leg cramps", "Braxton Hicks", "Glucose test prep symptoms (mild fatigue)"],
    tips: [
      "Schedule your gestational diabetes screening test.",
      "Ensure you are getting enough magnesium and calcium to prevent leg cramps.",
      "Keep moving to support circulation."
    ],
    milestones: ["Fetal Viability", "Balance System Developed"]
  },
  {
    week: 25,
    trimester: 2,
    babySize: { name: "Cauliflower", lengthCm: 34.6, weightG: 660.0, visualDescription: "About the size of a head of cauliflower." },
    babyDevelopment: "The baby's skin is becoming less translucent and is smoothing out as fat accumulates. The capillaries are forming, giving the baby's skin a pinkish hue. The nostrils are beginning to open.",
    motherChanges: "Your movements are starting to slow down. You might feel acid reflux or heartburn more frequently as your stomach is pushed upwards by your growing uterus.",
    symptoms: ["Heartburn / acid reflux", "Hemorrhoids", "Restless legs", "Difficulty sleeping"],
    tips: [
      "Eat smaller, upright meals and avoid eating right before sleeping.",
      "Use pillows to support your back, hips, and belly at night.",
      "Take warm baths or stretch before bed to soothe restless legs."
    ],
    milestones: ["Nostrils Open", "Capillaries Form"]
  },
  {
    week: 26,
    trimester: 2,
    babySize: { name: "Red Cabbage", lengthCm: 35.6, weightG: 760.0, visualDescription: "About the size of a red cabbage." },
    babyDevelopment: "The baby's eyes open for the first time and begin to blink! Lungs are developing air sacs, and brain activity responds to sounds and light from the outside world.",
    motherChanges: "Your blood pressure may rise slightly, returning to pre-pregnancy levels. You might feel a rhythmic pulsing inside your belly—these are fetal hiccups, which are harmless.",
    symptoms: ["Fetal hiccups", "Insomnia", "Mild swelling", "Clumsiness due to shifting center of gravity"],
    tips: [
      "Recognize the gentle, rhythmic pulses of fetal hiccups.",
      "Incorporate relaxation techniques (deep breathing, reading) into your bedtime routine.",
      "Keep paths clear at home to avoid tripping."
    ],
    milestones: ["Eyes Open & Blink", "Brain Activity Responds to Stimuli"]
  },
  {
    week: 27,
    trimester: 2,
    babySize: { name: "Lettuce", lengthCm: 36.6, weightG: 875.0, visualDescription: "About the size of a head of romaine lettuce." },
    babyDevelopment: "This is the final week of the second trimester. The baby's lungs, liver, and immune system are maturing, though they still need a few more weeks to develop fully. Fetal brain tissue is growing rapidly.",
    motherChanges: "You are reaching the end of the second trimester! You might experience leg cramps, backaches, and pelvic pressure as the baby's weight presses on your lower body.",
    symptoms: ["Pelvic pressure", "Back pain", "Shortness of breath", "Vivid dreams"],
    tips: [
      "Maintain a steady intake of iron and vitamin C.",
      "Avoid heavy lifting and take frequent sitting breaks.",
      "Sign up for a pediatric clinic tour or interview."
    ],
    milestones: ["End of Trimester 2", "Immune System Prep"]
  },
  {
    week: 28,
    trimester: 3,
    babySize: { name: "Eggplant", lengthCm: 37.6, weightG: 1000.0, visualDescription: "About the size of a large eggplant." },
    babyDevelopment: "Welcome to the third and final trimester! The baby weighs about 1 kilogram (2.2 lbs). The eyelashes are fully formed, and the baby can turn their head toward a continuous bright light source.",
    motherChanges: "You may start visiting your doctor every two weeks now. If you are Rh-negative, you will receive an RhoGAM shot this week to prevent potential blood compatibility issues.",
    symptoms: ["Shortness of breath", "Braxton Hicks", "Fatigue", "Leaking breasts (colostrum)"],
    tips: [
      "Learn how to perform 'kick counts' to track your baby's movements.",
      "Discuss the RhoGAM shot with your practitioner if you are Rh-negative.",
      "Start planning your baby nursery and buying essentials."
    ],
    milestones: ["Start of Trimester 3", "Weight Reaches 1kg", "Eyelashes Complete"]
  },
  {
    week: 29,
    trimester: 3,
    babySize: { name: "Acorn Squash", lengthCm: 38.6, weightG: 1150.0, visualDescription: "About the size of an acorn squash." },
    babyDevelopment: "The baby's brain is maturing rapidly and can now regulate their own body temperature. The bones are fully developed, but they remain soft and flexible to aid in delivery.",
    motherChanges: "The baby is active, and their kicks can feel quite strong or even uncomfortable. You might experience heartburn, constipation, or hemorrhoids as pressure increases.",
    symptoms: ["Strong kicks", "Constipation", "Hemorrhoids", "Frequent urination returning"],
    tips: [
      "Ensure you are consuming plenty of calcium (about 250mg of calcium is deposited in baby's bones daily now).",
      "Do not skip meals; eat small nutritious bites to avoid heartburn.",
      "Practice pelvic tilts to help position the baby."
    ],
    milestones: ["Temperature Regulation Begins", "Bone Development Complete"]
  },
  {
    week: 30,
    trimester: 3,
    babySize: { name: "Cabbage", lengthCm: 39.9, weightG: 1300.0, visualDescription: "About the size of a large green cabbage." },
    babyDevelopment: "The baby is surrounded by about 1.5 pints of amniotic fluid, though this volume decreases as they grow and occupy more space in the uterus. Lanugo starts to disappear.",
    motherChanges: "Mood swings and fatigue might return, reminiscent of the first trimester. You may have difficulty finding a comfortable sleeping position.",
    symptoms: ["Insomnia", "Fatigue", "Moodiness", "Lower back pain"],
    tips: [
      "Sleep with a pillow between your knees and another supporting your back/belly.",
      "Pack your hospital bag checklist.",
      "Engage in gentle stretching to relieve lower back pressure."
    ],
    milestones: ["Lanugo Starts Disappearing", "Fetal Brain Folds Form"]
  },
  {
    week: 31,
    trimester: 3,
    babySize: { name: "Coconut", lengthCm: 41.1, weightG: 1500.0, visualDescription: "About the size of a coconut." },
    babyDevelopment: "The baby is going through a major growth spurt. The nervous system can process more complex information. The baby can turn their head from side to side and is moving frequently.",
    motherChanges: "Your breasts may leak yellow, sticky fluid called colostrum (early milk). Your lung capacity is restricted, making you catch your breath easily.",
    symptoms: ["Leaking colostrum", "Shortness of breath", "Braxton Hicks", "Dry, itchy belly"],
    tips: [
      "Use nursing pads in your bra if leakage is bothersome.",
      "Take slow, deep breaths when you feel short of breath.",
      "Inquire about infant CPR classes in your area."
    ],
    milestones: ["Complex Sensory Processing", "Fetal Head Turning"]
  },
  {
    week: 32,
    trimester: 3,
    babySize: { name: "Jicama", lengthCm: 42.4, weightG: 1700.0, visualDescription: "About the size of a large jicama." },
    babyDevelopment: "The baby is packing on fat, and their skin looks plump and opaque. The baby may have a full head of hair, though thickness varies. The fingernails have reached the tips of the fingers.",
    motherChanges: "Your uterus pushes up against your diaphragm, which can make eating full meals difficult. You may start seeing your doctor weekly starting soon.",
    symptoms: ["Heartburn", "Shortness of breath", "Swelling in hands and feet", "Lower back pain"],
    tips: [
      "Eat 5-6 small meals throughout the day instead of 3 large ones.",
      "Keep your feet elevated and avoid tight socks or shoes.",
      "Finalize your birth preferences (birth plan)."
    ],
    milestones: ["Skin Looks Plump & Opaque", "Fingernails Reach Fingertips"]
  },
  {
    week: 33,
    trimester: 3,
    babySize: { name: "Pineapple", lengthCm: 43.7, weightG: 1900.0, visualDescription: "About the size of a pineapple." },
    babyDevelopment: "The baby's immune system is receiving antibodies from you via the placenta, providing temporary immunity after birth. The baby's skull bones remain soft and un-fused to facilitate passage through the birth canal.",
    motherChanges: "You might feel hot and sweaty due to an increased metabolic rate. You are carrying a lot of extra weight, making physical tasks exhausting.",
    symptoms: ["Feeling hot", "Carpal tunnel symptoms (numbness in fingers)", "Restless sleep", "Frequent urination"],
    tips: [
      "Wear wrist splints if you experience carpal tunnel symptoms due to fluid retention.",
      "Keep cool with fans, light clothing, and cold water.",
      "Install the baby car seat and have it inspected for safety."
    ],
    milestones: ["Antibody Transfer Peak", "Soft Skull Adaptability"]
  },
  {
    week: 34,
    trimester: 3,
    babySize: { name: "Cantaloupe", lengthCm: 45.0, weightG: 2100.0, visualDescription: "About the size of a large cantaloupe." },
    babyDevelopment: "The baby's central nervous system and lungs are maturing further. Babies born between 34 and 37 weeks generally do very well with minimal medical assistance.",
    motherChanges: "You might experience blurred vision or dry eyes due to pregnancy hormones and fluid changes. If you experience sudden, severe swelling in your hands or face, contact your doctor immediately (a sign of preeclampsia).",
    symptoms: ["Mild swelling", "Fatigue", "Braxton Hicks", "Back discomfort"],
    tips: [
      "Learn the warning signs of preeclampsia (sudden swelling, severe headaches, vision changes).",
      "Get plenty of rest; prioritize relaxation.",
      "Draft a list of post-birth helper contacts."
    ],
    milestones: ["Nervous System Matured"]
  },
  {
    week: 35,
    trimester: 3,
    babySize: { name: "Honeydew Melon", lengthCm: 46.2, weightG: 2400.0, visualDescription: "About the size of a honeydew melon." },
    babyDevelopment: "The baby's kidneys are fully developed, and the liver can process some waste products. The baby is gaining about 225 grams (0.5 lbs) of fat per week. Their physical space is tight, resulting in rolling movements rather than kicks.",
    motherChanges: "Your doctor will likely perform a Group B Streptococcus (GBS) swab test during this week or the next. Pelvic pressure might increase as the baby positions themselves lower.",
    symptoms: ["Pelvic pressure", "Rolling fetal movements", "Urinary frequency", "Insomnia"],
    tips: [
      "Prepare for the GBS screening test.",
      "Practice breathing exercises for labor.",
      "Pre-wash baby clothes and sheets in gentle, scent-free detergent."
    ],
    milestones: ["Kidney Development Complete", "GBS Screening Window"]
  },
  {
    week: 36,
    trimester: 3,
    babySize: { name: "Romaine Lettuce", lengthCm: 47.4, weightG: 2600.0, visualDescription: "About the size of a large romaine lettuce bundle." },
    babyDevelopment: "The baby is shedding the rest of the vernix and lanugo, which they swallow. This forms their first bowel movement (meconium) after birth. The baby's ears are fully formed and sensitive to sounds.",
    motherChanges: "The baby may 'drop' or descend into your pelvis (known as lightening). This makes it easier to breathe and eat, but increases pressure on your bladder and hips, making walking uncomfortable.",
    symptoms: ["Lightening (baby drops)", "Pelvic discomfort", "Frequent urination", "Braxton Hicks"],
    tips: [
      "Enjoy the ability to breathe easier, but take short steps if walking feels unstable.",
      "Prepare your post-partum care station at home.",
      "Keep your hospital bags by the door or in the car."
    ],
    milestones: ["Fetal Lightening / Dropping", "Hearing Fully Sensitive"]
  },
  {
    week: 37,
    trimester: 3,
    babySize: { name: "Swiss Chard", lengthCm: 48.6, weightG: 2850.0, visualDescription: "About the size of a bunch of Swiss chard." },
    babyDevelopment: "Your pregnancy is now considered 'early term.' The baby's organs are ready to function on their own. The baby is practicing breathing, sucking, and swallowing.",
    motherChanges: "You might lose your mucus plug, a gelatinous barrier that seals the cervix. Losing it indicates your cervix is preparing for labor, though labor could still be days or weeks away.",
    symptoms: ["Loss of mucus plug (bloody show)", "Cervical dilation or effacement", "Nausea or loose stools", "Braxton Hicks"],
    tips: [
      "Watch for signs of active labor: regular contractions that get stronger, closer together, and don't stop when you change positions, or your water breaking.",
      "Ensure your pediatrician contact information is finalized.",
      "Keep resting and saving your energy."
    ],
    milestones: ["Early Term Milestone (37 Weeks)", "Mucus Plug Loss Possible"]
  },
  {
    week: 38,
    trimester: 3,
    babySize: { name: "Leek", lengthCm: 49.8, weightG: 3100.0, visualDescription: "About the size of a long leek." },
    babyDevelopment: "The baby is accumulating fat and refining their brain and nervous system. The baby's eye color is developed, though it may change during the first year of life.",
    motherChanges: "You are likely feeling very eager and physically uncomfortable. You might experience a burst of energy known as the 'nesting instinct'—use it wisely and don't overexert yourself.",
    symptoms: ["Nesting instinct", "Swollen ankles", "Heavy pelvic pressure", "Anxiety or excitement"],
    tips: [
      "Avoid heavy lifting or climbing ladders if you get the nesting urge.",
      "Sleep as much as possible; rest is your priority.",
      "Review your birth plan and make sure your support team is ready."
    ],
    milestones: ["Full Term Milestone (38 Weeks)", "Nesting Instinct Peaks"]
  },
  {
    week: 39,
    trimester: 3,
    babySize: { name: "Watermelon", lengthCm: 50.7, weightG: 3300.0, visualDescription: "About the size of a sweet watermelon." },
    babyDevelopment: "The baby is 'full term.' The placenta continues to provide nutrients and antibodies, but it is reaching the end of its lifespan. The baby has a layer of fat and is ready for the outside world.",
    motherChanges: "Your cervix is ripening (softening, dilating, and thinning). Your water might break, either as a gush or a slow trickle. If this happens, contact your provider.",
    symptoms: ["Water breaking possibility", "Frequent, intense Braxton Hicks", "Diarrhea (body clearing out for labor)", "Lower backaches"],
    tips: [
      "If your water breaks, note the time, color, and odor, and call your doctor.",
      "Double-check that you have all necessary items for postpartum recovery.",
      "Keep walking gently to help encourage labor."
    ],
    milestones: ["Water Breaking Possibility", "Placenta Antibody Transfer Complete"]
  },
  {
    week: 40,
    trimester: 3,
    babySize: { name: "Pumpkin", lengthCm: 51.2, weightG: 3500.0, visualDescription: "About the size of a round pumpkin." },
    babyDevelopment: "Happy due date week! The baby is fully developed and ready to meet you. About 5% of babies are born exactly on their due date, so don't worry if they take a little longer.",
    motherChanges: "Your doctor will monitor you closely. They might discuss induction options if you go beyond this week. Try to remain calm and positive.",
    symptoms: ["Labor signs", "Extreme pelvic pressure", "Contractions", "Impatience"],
    tips: [
      "Keep in close contact with your medical provider.",
      "Remember that anything from week 37 to 42 is a normal window for delivery.",
      "Practice deep breathing and visualization exercises to prepare for labor."
    ],
    milestones: ["Estimated Due Date", "Ready for Delivery"]
  }
];
