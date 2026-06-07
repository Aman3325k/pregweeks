// src/data/symptomData.ts

export interface FAQItem {
  q: string;
  a: string;
}

export interface SymptomItem {
  slug: string;
  name: string;
  weeks: string;
  normalcy: 'normal' | 'common' | 'seek-advice';
  description: string;
  whenToCallDoctor: string;
  remedies: string[];
  faqs: FAQItem[];
}

export const symptomItems: SymptomItem[] = [
  {
    slug: 'cramping',
    name: 'Cramping',
    weeks: 'Weeks 1-40',
    normalcy: 'normal',
    description: 'Mild uterine cramping is common in early pregnancy as the embryo implants and the uterus begins to stretch. In later trimesters, it can be caused by gas, constipation, or Braxton Hicks contractions.',
    whenToCallDoctor: 'Call your doctor immediately if cramping is severe, persistent, or accompanied by vaginal bleeding, fever, chills, or shoulder pain.',
    remedies: [
      'Rest and lie down on your side.',
      'Take a warm (not hot) bath.',
      'Stay hydrated by drinking plenty of water.',
      'Practice gentle pelvic tilt exercises.'
    ],
    faqs: [
      { q: 'Is cramping normal in the first trimester?', a: 'Yes, mild cramping is completely normal as the embryo implants and the uterus grows.' },
      { q: 'Can dehydration cause pregnancy cramps?', a: 'Yes, dehydration can trigger uterine irritability and mild cramping; stay well-hydrated.' },
      { q: 'How do I distinguish normal cramps from miscarriage?', a: 'Normal cramps are mild and intermittent. Miscarriage cramps are usually severe, rhythmic, and accompanied by bleeding.' }
    ]
  },
  {
    slug: 'spotting',
    name: 'Spotting / Light Bleeding',
    weeks: 'Weeks 4-12',
    normalcy: 'common',
    description: 'Light bleeding or spotting can occur during early pregnancy (implantation bleeding) or after intercourse, pelvic exams, or heavy lifting due to increased cervical vascularity.',
    whenToCallDoctor: 'Contact your healthcare provider for any spotting or bleeding during pregnancy to rule out complications. Go to the ER if bleeding is heavy (soaking a pad in an hour) or accompanied by severe pain.',
    remedies: [
      'Avoid sexual intercourse until cleared by your doctor.',
      'Rest and avoid strenuous exercise or heavy lifting.',
      'Use a panty liner (avoid tampons) to monitor the amount and color of blood.'
    ],
    faqs: [
      { q: 'What is implantation bleeding?', a: 'Light spotting that occurs 10-14 days after conception when the fertilized egg attaches to the uterine lining.' },
      { q: 'Can sex cause spotting during pregnancy?', a: 'Yes, because the cervix has increased blood supply and can bleed easily upon contact.' },
      { q: 'Should I worry about pink discharge?', a: 'Pink discharge is often just a small amount of blood mixed with cervical mucus. Inform your OB-GYN, but do not panic.' }
    ]
  },
  {
    slug: 'nausea',
    name: 'Nausea & Morning Sickness',
    weeks: 'Weeks 4-16',
    normalcy: 'normal',
    description: 'Affects up to 80% of pregnant women, driven by rapidly rising pregnancy hormones (hCG and progesterone). It can occur at any time of day or night.',
    whenToCallDoctor: 'Call your doctor if you cannot keep liquids down for 24 hours, lose more than 5 lbs, feel dizzy or faint, or have dark-colored urine.',
    remedies: [
      'Eat small, frequent meals throughout the day.',
      'Keep crackers by your bed and eat a few before getting up.',
      'Drink ginger or peppermint tea.',
      'Wear acupressure wristbands (Sea-Bands).'
    ],
    faqs: [
      { q: 'When does morning sickness peak?', a: 'Morning sickness usually peaks around weeks 9-11 and resolves by week 16 for most women.' },
      { q: 'What is Hyperemesis Gravidarum?', a: 'A severe, debilitating form of morning sickness characterized by persistent vomiting, dehydration, and weight loss requiring medical treatment.' },
      { q: 'Can I take medication for pregnancy nausea?', a: 'Yes, your doctor can prescribe safe options like Vitamin B6 combined with Unisom, or Zofran.' }
    ]
  },
  {
    slug: 'back-pain',
    name: 'Back Pain',
    weeks: 'Weeks 12-40',
    normalcy: 'normal',
    description: 'Pregnancy hormones relax the ligaments in your pelvis to prepare for birth, which, combined with a shifting center of gravity and weight gain, strains your back muscles.',
    whenToCallDoctor: 'Contact your doctor if back pain is severe, constant, accompanied by fever, or if you experience numbness/tingling in your legs or difficulty urinating.',
    remedies: [
      'Practice good posture and avoid locking your knees.',
      'Wear supportive, low-heeled shoes.',
      'Use a maternity support belt.',
      'Sleep on your side with a pillow between your knees.'
    ],
    faqs: [
      { q: 'Why does my back hurt more in the third trimester?', a: 'Increased baby weight and a forward-shifting center of gravity place extra strain on your lower back.' },
      { q: 'Is a heating pad safe for pregnancy back pain?', a: 'Yes, but use it on a low setting for no more than 15-20 minutes, and never apply it to your abdomen.' },
      { q: 'Can back pain be a sign of labor?', a: 'Yes, rhythmic lower back pain can be a sign of back labor, especially if it wraps around to the abdomen.' }
    ]
  },
  {
    slug: 'headache',
    name: 'Headaches',
    weeks: 'Weeks 1-40',
    normalcy: 'common',
    description: 'Hormonal fluctuations, fatigue, stress, nasal congestion, or caffeine withdrawal can trigger headaches during pregnancy, especially in the first trimester.',
    whenToCallDoctor: 'Seek immediate medical attention if you have a severe, persistent headache in the second or third trimester that does not go away with Tylenol, as it can be a primary symptom of preeclampsia.',
    remedies: [
      'Apply a cold compress to your forehead or neck.',
      'Rest in a quiet, dark room.',
      'Ensure you are eating regular meals to avoid low blood sugar.',
      'Take Acetaminophen (Tylenol) if cleared by your doctor.'
    ],
    faqs: [
      { q: 'Can I take Ibuprofen for headaches during pregnancy?', a: 'No, Ibuprofen should generally be avoided, especially in the third trimester. Use Acetaminophen instead.' },
      { q: 'What is a preeclampsia headache like?', a: 'A severe, throbbing headache that feels like a migraine, often accompanied by vision changes or swelling.' },
      { q: 'Can sinus congestion cause pregnancy headaches?', a: 'Yes, increased blood flow can swell nasal passages, leading to sinus pressure and headaches.' }
    ]
  },
  {
    slug: 'swelling',
    name: 'Swelling / Edema',
    weeks: 'Weeks 20-40',
    normalcy: 'common',
    description: 'Your body produces about 50% more blood and body fluids during pregnancy. Extra water retention and pressure from the growing uterus on veins cause swelling in the ankles, feet, and hands.',
    whenToCallDoctor: 'Contact your doctor immediately if you experience sudden swelling in your face or around your eyes, or if one leg is significantly more swollen than the other (which can indicate a blood clot).',
    remedies: [
      'Elevate your feet above heart level when sitting.',
      'Drink plenty of water to help flush out fluids.',
      'Avoid standing or sitting in one position for long periods.',
      'Wear compression socks.'
    ],
    faqs: [
      { q: 'Is swelling normal at 36 weeks?', a: 'Yes, mild swelling in the feet and ankles is extremely common in the late third trimester.' },
      { q: 'How does drinking water help with swelling?', a: 'Staying hydrated signals the body that it doesn\'t need to retain extra water, helping reduce edema.' },
      { q: 'Can swelling indicate preeclampsia?', a: 'Yes, sudden, rapid swelling in the face, hands, or feet is a red flag for preeclampsia.' }
    ]
  },
  {
    slug: 'discharge',
    name: 'Vaginal Discharge (Leukorrhea)',
    weeks: 'Weeks 4-40',
    normalcy: 'normal',
    description: 'A thin, milky-white, mild-smelling discharge called leukorrhea is normal. It increases due to elevated estrogen levels and serves to protect the birth canal from infections.',
    whenToCallDoctor: 'Contact your doctor if discharge is green, yellow, thick/clumpy (like cottage cheese), has a strong odor, or is accompanied by vaginal itching or burning.',
    remedies: [
      'Wear breathable cotton underwear.',
      'Use panty liners if needed, but avoid tampons.',
      'Avoid douching or using scented feminine hygiene products.'
    ],
    faqs: [
      { q: 'What does normal pregnancy discharge look like?', a: 'Thin, clear-to-white, and odorless or mild-smelling.' },
      { q: 'Can a yeast infection cause thick white discharge?', a: 'Yes, hormonal changes make pregnant women more prone to yeast infections, which require medical treatment.' },
      { q: 'What is the mucus plug?', a: 'A thick glob of mucus that seals the cervix. Losing it in late pregnancy is a sign your cervix is preparing for labor.' }
    ]
  },
  {
    slug: 'heartburn',
    name: 'Heartburn & Acid Reflux',
    weeks: 'Weeks 12-40',
    normalcy: 'common',
    description: 'Progesterone relaxes the valve at the top of your stomach, allowing stomach acid to splash back into the esophagus. Later on, physical pressure from the growing uterus pushes acid upward.',
    whenToCallDoctor: 'Contact your doctor if heartburn is severe, interferes with sleeping or eating, or is accompanied by pain in the upper right abdomen.',
    remedies: [
      'Eat small, frequent meals rather than large ones.',
      'Avoid spicy, greasy, acidic, or fried foods.',
      'Remain upright for at least 1-2 hours after eating.',
      'Elevate the head of your bed by 6 inches.'
    ],
    faqs: [
      { q: 'Are antacids safe during pregnancy?', a: 'Calcium carbonate antacids (like Tums) are generally safe, but avoid high-sodium or aluminum antacids.' },
      { q: 'Why does heartburn get worse at night?', a: 'Lying flat allows stomach acid to flow easily up the esophagus. Prop yourself up with pillows.' },
      { q: 'Does heartburn mean my baby will have lots of hair?', a: 'While a popular old wives\' tale, some studies suggest a link due to the same hormones that cause heartburn also promoting hair growth.' }
    ]
  },
  {
    slug: 'round-ligament-pain',
    name: 'Round Ligament Pain',
    weeks: 'Weeks 14-28',
    normalcy: 'normal',
    description: 'Sharp, jabbing, or dull aching pain on one or both sides of the lower abdomen or groin. It is caused by the stretching of the round ligaments that support the uterus.',
    whenToCallDoctor: 'Call your doctor if the pain is constant, severe, or accompanied by fever, chills, bleeding, or difficulty walking.',
    remedies: [
      'Change positions slowly, especially when rolling over or standing up.',
      'Bend and flex your hips when you cough or sneeze.',
      'Apply a warm compress to the area.',
      'Rest in a comfortable position.'
    ],
    faqs: [
      { q: 'What triggers round ligament pain?', a: 'Sudden movements like standing up quickly, coughing, sneezing, or rolling over in bed.' },
      { q: 'Where exactly is round ligament pain felt?', a: 'In the lower belly or groin area, often extending down the side of the pelvis.' },
      { q: 'Does round ligament pain happen in the third trimester?', a: 'It can, but it is most common in the second trimester when the uterus undergoes its most rapid expansion.' }
    ]
  },
  {
    slug: 'braxton-hicks',
    name: 'Braxton Hicks Contractions',
    weeks: 'Weeks 20-40',
    normalcy: 'normal',
    description: 'Irregular, painless tightening sensations of the uterus. They are "practice contractions" that prepare your uterine muscles for actual labor.',
    whenToCallDoctor: 'Call your doctor if contractions become regular, painful, increase in frequency (more than 4 in an hour before week 37), or are accompanied by vaginal bleeding or fluid leakage.',
    remedies: [
      'Change your position or activity (walk if sitting, rest if active).',
      'Drink a large glass of water, as dehydration triggers them.',
      'Lie down on your left side.'
    ],
    faqs: [
      { q: 'How do Braxton Hicks feel?', a: 'Like a tight band squeezing your abdomen. They are usually painless and do not have a regular pattern.' },
      { q: 'Can walking stop Braxton Hicks?', a: 'Yes, unlike true labor contractions, Braxton Hicks often disappear when you change your activity or walk.' },
      { q: 'Are Braxton Hicks contractions dangerous?', a: 'No, they are a normal part of pregnancy and do not dilate the cervix.' }
    ]
  },
  {
    slug: 'shortness-of-breath',
    name: 'Shortness of Breath',
    weeks: 'Weeks 28-40',
    normalcy: 'common',
    description: 'In early pregnancy, progesterone stimulates your brain to take deeper breaths. In the third trimester, the expanding uterus pushes against your diaphragm, restricting lung expansion.',
    whenToCallDoctor: 'Seek emergency care if you experience sudden, severe breathing difficulty, chest pain, blue lips/fingertips, or a rapid pulse.',
    remedies: [
      'Sit up straight and practice good posture to give lungs more room.',
      'Move slowly and take frequent rests.',
      'Sleep propped up with extra pillows.'
    ],
    faqs: [
      { q: 'When does breathing get easier?', a: 'Usually when the baby "drops" (lightening) into your pelvis, a few weeks before labor.' },
      { q: 'Is shortness of breath normal at 12 weeks?', a: 'Yes, hormonal shifts in early pregnancy can make you feel like you need to breathe more frequently.' },
      { q: 'Can anemia cause shortness of breath?', a: 'Yes, low iron levels reduce the oxygen-carrying capacity of your blood, making you feel winded.' }
    ]
  },
  {
    slug: 'fatigue',
    name: 'Fatigue',
    weeks: 'Weeks 1-12, 28-40',
    normalcy: 'normal',
    description: 'First trimester fatigue is caused by surging progesterone levels and the massive energy required to build the placenta. Third trimester fatigue returns due to sleep disruption and carrying extra weight.',
    whenToCallDoctor: 'Contact your doctor if fatigue is extreme, constant, or accompanied by symptoms of depression, pale skin, or shortness of breath (anemia indicators).',
    remedies: [
      'Prioritize getting 8-9 hours of sleep at night.',
      'Take short 20-30 minute naps during the day.',
      'Maintain gentle physical activity like walking.',
      'Eat a iron-rich, balanced diet.'
    ],
    faqs: [
      { q: 'Why am I so tired in the first trimester?', a: 'Your body is building a whole life-support system (the placenta) and your blood volume is expanding rapidly.' },
      { q: 'Does fatigue improve in the second trimester?', a: 'Yes, most women experience a welcome burst of energy during the middle months of pregnancy.' },
      { q: 'Can low thyroid cause pregnancy fatigue?', a: 'Yes, doctors routinely test thyroid function as hypothyroid conditions can cause severe exhaustion.' }
    ]
  },
  {
    slug: 'mood-swings',
    name: 'Mood Swings',
    weeks: 'Weeks 6-40',
    normalcy: 'normal',
    description: 'Fluctuating hormones (estrogen and progesterone), physical discomfort, fatigue, and the emotional stress of anticipating parenthood lead to heightened emotional sensitivity.',
    whenToCallDoctor: 'Talk to your provider if feelings of sadness, anxiety, or irritability are persistent, last longer than two weeks, or interfere with daily functioning.',
    remedies: [
      'Get plenty of rest, as sleep deprivation worsens mood swings.',
      'Share your feelings with your partner, friends, or a therapist.',
      'Practice mindfulness, yoga, or deep breathing exercises.'
    ],
    faqs: [
      { q: 'Are mood swings normal in pregnancy?', a: 'Yes, they are a classic symptom caused by rapid hormonal shifts and life changes.' },
      { q: 'Do hormones affect emotional health?', a: 'Absolutely. Estrogen and progesterone affect neurotransmitters in the brain that regulate mood.' },
      { q: 'How do I tell mood swings apart from depression?', a: 'Mood swings are transient. Pregnancy depression involves persistent sadness, hopelessness, and loss of interest for weeks.' }
    ]
  },
  {
    slug: 'constipation',
    name: 'Constipation',
    weeks: 'Weeks 4-40',
    normalcy: 'common',
    description: 'High levels of progesterone relax the smooth muscles of the digestive tract, slowing down food passage. Iron supplements can also contribute.',
    whenToCallDoctor: 'Contact your doctor if constipation is severe, accompanied by severe abdominal pain, or if you pass blood in your stool.',
    remedies: [
      'Eat high-fiber foods like fruits, vegetables, and whole grains.',
      'Drink at least 8-10 glasses of water daily.',
      'Stay physically active.',
      'Consult your doctor about safe stool softeners.'
    ],
    faqs: [
      { q: 'Can prenatal vitamins cause constipation?', a: 'Yes, the iron in prenatal vitamins is a common cause of constipation.' },
      { q: 'Is it safe to take laxatives while pregnant?', a: 'Do not take over-the-counter laxatives without consulting your OB-GYN. Stool softeners are generally safer.' },
      { q: 'Does straining harm the baby?', a: 'No, straining during bowel movements does not harm the baby, but it can lead to hemorrhoids.' }
    ]
  },
  {
    slug: 'bloating',
    name: 'Bloating & Gas',
    weeks: 'Weeks 4-40',
    normalcy: 'normal',
    description: 'Slowing of digestion due to progesterone causes gas to build up, leading to abdominal bloating, discomfort, and flatulence.',
    whenToCallDoctor: 'Call your doctor if bloating is accompanied by severe abdominal pain, diarrhea, or fever.',
    remedies: [
      'Eat slowly and chew your food thoroughly.',
      'Avoid carbonated beverages and chewing gum.',
      'Limit gas-producing foods like beans and cabbage.',
      'Walk after meals to stimulate digestion.'
    ],
    faqs: [
      { q: 'Why am I so bloated in early pregnancy?', a: 'Surging progesterone relaxes your gastrointestinal tract, leading to gas accumulation.' },
      { q: 'Is Gas-X safe to take during pregnancy?', a: 'Simethicone (Gas-X) is generally considered safe, but check with your doctor first.' },
      { q: 'Can bloating make my baby bump look bigger?', a: 'Yes, especially in the first trimester, much of your early "bump" is actually bloating.' }
    ]
  },
  {
    slug: 'breast-tenderness',
    name: 'Breast Tenderness',
    weeks: 'Weeks 4-12',
    normalcy: 'normal',
    description: 'One of the earliest signs of pregnancy. Estrogen and progesterone prepare the breasts for milk production, increasing blood flow and fat layers.',
    whenToCallDoctor: 'Rarely a medical emergency. Contact your doctor if you detect a hard, painful lump or experience nipple discharge that is bloody.',
    remedies: [
      'Wear a supportive, wire-free maternity bra.',
      'Avoid tight clothing that presses on the chest.',
      'Apply a cool compress to sore areas.'
    ],
    faqs: [
      { q: 'Do breasts grow in the first trimester?', a: 'Yes, they can increase in size and feel heavy or sore very early in pregnancy.' },
      { q: 'Are underwire bras safe during pregnancy?', a: 'Yes, but wire-free or maternity bras are usually much more comfortable for tender breasts.' },
      { q: 'When does breast soreness end?', a: 'For most women, breast tenderness decreases significantly after the first trimester.' }
    ]
  },
  {
    slug: 'insomnia',
    name: 'Insomnia / Sleep Problems',
    weeks: 'Weeks 28-40',
    normalcy: 'common',
    description: 'Finding a comfortable sleeping position becomes difficult in the third trimester. Frequent urination, heartburn, leg cramps, and anxiety also disrupt sleep.',
    whenToCallDoctor: 'Talk to your doctor if sleep deprivation is affecting your daily functioning or if you experience chronic sleep apnea.',
    remedies: [
      'Use a full-body pregnancy pillow for support.',
      'Maintain a consistent bedtime routine.',
      'Avoid liquids for 2 hours before bed to reduce nighttime bathroom trips.',
      'Keep your bedroom cool and dark.'
    ],
    faqs: [
      { q: 'Can I take sleeping pills while pregnant?', a: 'Do not take over-the-counter or prescription sleep aids unless explicitly approved by your doctor.' },
      { q: 'Is sleeping on my back safe in the third trimester?', a: 'Side sleeping is recommended. Back sleeping can compress the vena cava, reducing blood flow to the placenta.' },
      { q: 'How do I use a pregnancy pillow?', a: 'Place it under your head, run it along your back or stomach, and tuck it between your knees.' }
    ]
  },
  {
    slug: 'stretch-marks',
    name: 'Stretch Marks (Striae Gravidarum)',
    weeks: 'Weeks 24-40',
    normalcy: 'common',
    description: 'Small, reddish or purple lines that appear on the abdomen, breasts, hips, or buttocks as the skin stretches to accommodate rapid body growth.',
    whenToCallDoctor: 'No medical concern. Contact your doctor if you experience extreme, widespread itching on your stretch marks.',
    remedies: [
      'Keep your skin hydrated with moisturizers or cocoa butter.',
      'Gain pregnancy weight gradually rather than in sudden spurts.',
      'Eat foods rich in Vitamin C and E to support skin elasticity.'
    ],
    faqs: [
      { q: 'Can I prevent stretch marks completely?', a: 'Genetics play a large role. Creams help soothe itchy skin, but cannot fully prevent them.' },
      { q: 'Do stretch marks go away after birth?', a: 'They usually fade to faint, silvery-white lines over 6-12 months postpartum.' },
      { q: 'Why do stretch marks itch?', a: 'As skin fibers stretch and dry out, it triggers localized itching.' }
    ]
  },
  {
    slug: 'leg-cramps',
    name: 'Leg Cramps',
    weeks: 'Weeks 20-40',
    normalcy: 'common',
    description: 'Sudden, painful spasms in the calf muscles, typically occurring at night. They may be related to fatigue, pressure from the uterus on nerves, or calcium/magnesium imbalances.',
    whenToCallDoctor: 'Contact your doctor immediately if you have localized pain, swelling, or redness in one calf, which could be a sign of a deep vein thrombosis (DVT).',
    remedies: [
      'Stretch your calf muscles before going to bed.',
      'Stay active with daily walking.',
      'Flex your foot upward (toes to shin) when a cramp strikes.',
      'Ask your doctor about magnesium supplements.'
    ],
    faqs: [
      { q: 'Why do leg cramps happen at night?', a: 'Fatigue, sluggish circulation, and lying in one position contribute to nighttime spasms.' },
      { q: 'What should I do when a leg cramp starts?', a: 'Straighten your leg and flex your foot upward, or walk around for a minute.' },
      { q: 'Can low potassium cause leg cramps?', a: 'Yes, mineral imbalances (calcium, magnesium, potassium) can trigger cramps.' }
    ]
  },
  {
    slug: 'frequent-urination',
    name: 'Frequent Urination',
    weeks: 'Weeks 4-12, 28-40',
    normalcy: 'normal',
    description: 'In the first trimester, hormonal changes increase blood flow to the kidneys. In the third trimester, the baby’s head presses directly on the bladder.',
    whenToCallDoctor: 'Contact your doctor if urination is painful, burning, accompanied by fever, or if you see blood in your urine, which are signs of a urinary tract infection (UTI).',
    remedies: [
      'Lean forward while urinating to help empty your bladder completely.',
      'Drink plenty of fluids during the day, but limit them before bedtime.',
      'Avoid caffeine, which acts as a diuretic.'
    ],
    faqs: [
      { q: 'Why did my frequent urination return at 32 weeks?', a: 'The baby has grown larger and is sitting directly on top of your bladder.' },
      { q: 'Should I drink less water to stop peeing so much?', a: 'No, staying hydrated is crucial. Never restrict water intake.' },
      { q: 'Is leaking urine normal when coughing?', a: 'Yes, stress incontinence is common due to pressure on pelvic floor muscles.' }
    ]
  },
  {
    slug: 'nosebleeds',
    name: 'Nosebleeds',
    weeks: 'Weeks 12-40',
    normalcy: 'common',
    description: 'Increased blood volume and hormones dilate the tiny blood vessels in your nose. Dry air or allergies make them burst more easily.',
    whenToCallDoctor: 'Call your doctor if nosebleeds are frequent, severe, do not stop after 20 minutes of direct pressure, or cause dizziness.',
    remedies: [
      'Pinch your nose shut for 10-15 minutes while leaning forward.',
      'Use a saline nasal spray to keep passages moist.',
      'Use a cool-mist humidifier in your bedroom.'
    ],
    faqs: [
      { q: 'Are nosebleeds common during pregnancy?', a: 'Yes, the nasal blood vessels expand due to hormones and bleed easily.' },
      { q: 'Should I lean back during a nosebleed?', a: 'No, lean forward to prevent swallowing blood, which can cause nausea.' },
      { q: 'Does high blood pressure cause nosebleeds?', a: 'Occasionally, but most pregnancy nosebleeds are local and benign.' }
    ]
  },
  {
    slug: 'skin-changes',
    name: 'Skin Changes / Melasma',
    weeks: 'Weeks 12-40',
    normalcy: 'common',
    description: 'Elevated estrogen and progesterone stimulate melanin production, leading to dark patches on the face (melasma, or "mask of pregnancy") and a dark line down the abdomen (linea nigra).',
    whenToCallDoctor: 'Consult a dermatologist if you notice changing moles, bleeding skin lesions, or severe itching all over.',
    remedies: [
      'Apply a broad-spectrum SPF 30+ sunscreen daily.',
      'Wear a wide-brimmed hat in the sun.',
      'Avoid harsh chemical skin treatments.'
    ],
    faqs: [
      { q: 'Does melasma fade after pregnancy?', a: 'Yes, it usually fades gradually after birth once hormone levels normalize.' },
      { q: 'What causes the dark line on my belly?', a: 'The linea nigra is caused by increased pigmentation along the abdominal midline.' },
      { q: 'Are freckles darker during pregnancy?', a: 'Yes, hormones darken existing freckles, moles, and nipples.' }
    ]
  },
  {
    slug: 'bleeding-gums',
    name: 'Bleeding Gums (Pregnancy Gingivitis)',
    weeks: 'Weeks 8-40',
    normalcy: 'common',
    description: 'Hormones make your gums more sensitive to plaque, leading to inflammation, swelling, and bleeding during brushing.',
    whenToCallDoctor: 'See your dentist if gums bleed heavily, are severely swollen, or if you experience tooth pain.',
    remedies: [
      'Use a soft-bristled toothbrush.',
      'Brush twice daily and floss gently once a day.',
      'Continue visiting your dentist for routine cleanings.'
    ],
    faqs: [
      { q: 'Is dental work safe during pregnancy?', a: 'Yes, routine cleanings and emergency dental work are safe and recommended.' },
      { q: 'Can pregnancy cause loose teeth?', a: 'High hormone levels can temporarily loosen ligaments supporting teeth, but see a dentist.' },
      { q: 'What is a pregnancy tumor on the gums?', a: 'A benign, red swelling on the gums that bleed easily. They disappear after birth.' }
    ]
  },
  {
    slug: 'dizziness',
    name: 'Dizziness & Lightheadedness',
    weeks: 'Weeks 6-40',
    normalcy: 'common',
    description: 'Progesterone relaxes blood vessels, causing blood pressure to drop. Standing too quickly, low blood sugar, or lying on your back can also trigger dizziness.',
    whenToCallDoctor: 'Call your doctor if dizziness is accompanied by fainting, chest pain, palpitations, or severe headaches.',
    remedies: [
      'Rise slowly from sitting or lying down.',
      'Eat small, frequent snacks to maintain blood sugar.',
      'Never lie flat on your back in the second/third trimesters.'
    ],
    faqs: [
      { q: 'Why do I feel dizzy when standing up?', a: 'Blood pools in your lower limbs, causing a temporary drop in blood pressure.' },
      { q: 'Can lying on my back make me dizzy?', a: 'Yes, the uterus compresses the vena cava, reducing blood flow back to the heart.' },
      { q: 'What should I do if I feel faint?', a: 'Sit down immediately, put your head between your knees, or lie on your left side.' }
    ]
  },
  {
    slug: 'pelvic-girdle-pain',
    name: 'Pelvic Girdle Pain (Symphysis Pubis Dysfunction)',
    weeks: 'Weeks 20-40',
    normalcy: 'common',
    description: 'Occurs when the relaxin hormone relaxes pelvic joints too much, causing pain in the pubic bone or hips, especially when walking or climbing stairs.',
    whenToCallDoctor: 'Talk to your doctor if pelvic pain is severe, limits your mobility, or is accompanied by clicking in the pelvic joints.',
    remedies: [
      'Keep your knees together when getting in and out of cars.',
      'Use a maternity support belt.',
      'Avoid heavy lifting or pushing.',
      'Perform pelvic floor (Kegel) exercises.'
    ],
    faqs: [
      { q: 'What is SPD?', a: 'Symphysis Pubis Dysfunction, a condition causing pain in the front pelvic joint due to joint instability.' },
      { q: 'How do I sleep with pelvic pain?', a: 'Sleep on your side with a thick pillow between your knees and ankles to keep your pelvis aligned.' },
      { q: 'Can pelvic girdle pain affect labor?', a: 'It rarely prevents vaginal birth, but discuss comfortable birth positions with your team.' }
    ]
  },
  {
    slug: 'sciatica',
    name: 'Sciatica',
    weeks: 'Weeks 20-40',
    normalcy: 'common',
    description: 'A sharp, shooting pain, numbness, or tingling that starts in the lower back or buttocks and travels down one leg, caused by the baby compressing the sciatic nerve.',
    whenToCallDoctor: 'Contact your doctor if pain is severe, constant, or if you experience weakness in your leg or foot (foot drop).',
    remedies: [
      'Apply warm compresses or ice packs to the painful area.',
      'Perform gentle prenatal yoga stretches.',
      'Avoid sitting for long periods.',
      'Sleep on the side that does not hurt.'
    ],
    faqs: [
      { q: 'Is sciatica permanent after pregnancy?', a: 'No, it usually disappears completely after birth once pressure on the nerve is relieved.' },
      { q: 'How do I stretch for sciatica relief?', a: 'The pigeon pose or seated stretches that target the glutes can relieve sciatic pressure.' },
      { q: 'Can chiropractor visits help sciatica?', a: 'Yes, prenatal chiropractic care is safe and can provide significant relief.' }
    ]
  },
  {
    slug: 'carpal-tunnel',
    name: 'Carpal Tunnel Syndrome',
    weeks: 'Weeks 24-40',
    normalcy: 'common',
    description: 'Fluid retention in the wrists compresses the median nerve, causing pain, numbness, or tingling in the hands, fingers, and thumbs.',
    whenToCallDoctor: 'See your doctor if hand weakness makes it difficult to hold objects or if pain is severe and constant.',
    remedies: [
      'Wear wrist splints, especially at night.',
      'Avoid repetitive hand and wrist movements.',
      'Elevate your hands on pillows when resting.'
    ],
    faqs: [
      { q: 'Why does pregnancy cause carpal tunnel?', a: 'Fluid retention (edema) increases pressure inside the narrow carpal tunnel in your wrist.' },
      { q: 'Will carpal tunnel go away after delivery?', a: 'Yes, it typically resolves within a few weeks postpartum as pregnancy fluids drain.' },
      { q: 'What exercises relieve hand numbness?', a: 'Gently shaking out your hands and stretching your wrists can help restore blood flow.' }
    ]
  },
  {
    slug: 'itchiness',
    name: 'Itchiness (Pruritus)',
    weeks: 'Weeks 24-40',
    normalcy: 'common',
    description: 'Mild skin itching is common as the skin on your abdomen and breasts stretches and dries out.',
    whenToCallDoctor: 'Contact your doctor immediately if you have severe itching on the palms of your hands or soles of your feet without a rash, as this is a key sign of Cholestasis of Pregnancy (a liver condition).',
    remedies: [
      'Apply thick, unscented moisturizers daily.',
      'Take lukewarm baths with oatmeal packets.',
      'Avoid hot showers, which dry out skin.'
    ],
    faqs: [
      { q: 'What is PUPPP?', a: 'Pruritic Urticarial Papules and Plaques of Pregnancy, an itchy, hive-like rash that starts in stretch marks.' },
      { q: 'Why are itchy palms dangerous?', a: 'They can indicate Cholestasis, which slows bile flow and can be dangerous to the fetus.' },
      { q: 'Does drinking water reduce itchy skin?', a: 'Yes, hydration keeps your skin moisturized from the inside out.' }
    ]
  },
  {
    slug: 'vivid-dreams',
    name: 'Vivid Dreams / Nightmares',
    weeks: 'Weeks 8-40',
    normalcy: 'normal',
    description: 'Hormones change your sleep cycles, causing you to wake up during REM sleep more often. This makes you remember your dreams, which are often intense or bizarre, in vivid detail.',
    whenToCallDoctor: 'Rarely requires medical attention. Speak to your doctor if anxiety in dreams is causing daytime panic or severe insomnia.',
    remedies: [
      'Write in a dream journal to process anxieties before bed.',
      'Avoid watching stimulating or scary media in the evening.',
      'Practice calming meditation before sleeping.'
    ],
    faqs: [
      { q: 'Why are pregnancy dreams so weird?', a: 'Your brain is processing major emotional changes, fears, and hormonal shifts during sleep.' },
      { q: 'Does pregnancy cause nightmares?', a: 'Yes, anxiety about delivery, parenting, and baby health often manifests in nightmares.' },
      { q: 'Why do I remember my dreams more now?', a: 'Frequent night wakings (to pee or adjust) interrupt REM cycles, cementing the dream in memory.' }
    ]
  },
  {
    slug: 'food-cravings',
    name: 'Food Cravings & Aversions',
    weeks: 'Weeks 4-28',
    normalcy: 'normal',
    description: 'Sudden, intense desires for specific foods (cravings) or strong dislikes of foods you normally enjoy (aversions). They are caused by hormonal surges and changes in taste/smell.',
    whenToCallDoctor: 'Contact your doctor if you crave non-food items like dirt, clay, ice, or laundry starch (a condition called pica, which indicates an iron deficiency).',
    remedies: [
      'Indulge cravings in moderation while maintaining a nutritious diet.',
      'Eat protein-rich foods to help stabilize blood sugar levels.',
      'If you have aversions, substitute with foods of similar nutritional value.'
    ],
    faqs: [
      { q: 'What causes pregnancy cravings?', a: 'Hormones and nutritional needs are thought to drive specific food desires.' },
      { q: 'What is Pica?', a: 'An eating disorder where pregnant women crave non-nutritive substances, often due to severe anemia.' },
      { q: 'Can food aversions last after birth?', a: 'They almost always disappear immediately after delivery.' }
    ]
  },
  {
    slug: 'nasal-congestion',
    name: 'Nasal Congestion (Pregnancy Rhinitis)',
    weeks: 'Weeks 12-40',
    normalcy: 'common',
    description: 'Estrogen increases mucus production and blood flow to the nasal membranes, causing them to swell and lead to a stuffy nose or postnasal drip.',
    whenToCallDoctor: 'See a doctor if congestion is accompanied by sinus pain, fever, or thick green/yellow mucus, indicating a sinus infection.',
    remedies: [
      'Use a saline nasal spray or neti pot.',
      'Sleep with your head elevated.',
      'Drink plenty of fluids to thin out mucus.'
    ],
    faqs: [
      { q: 'What is pregnancy rhinitis?', a: 'Congestion or runny nose lasting 6+ weeks during pregnancy without any viral cause.' },
      { q: 'Can I take Sudafed while pregnant?', a: 'Avoid oral decongestants like Sudafed in the first trimester; discuss safe allergy meds with your doctor.' },
      { q: 'Will my stuffy nose clear up after delivery?', a: 'Yes, it usually goes away within a week of giving birth.' }
    ]
  },
  {
    slug: 'tailbone-pain',
    name: 'Tailbone Pain (Coccydynia)',
    weeks: 'Weeks 20-40',
    normalcy: 'common',
    description: 'The baby\'s head pressing on the sacrum and the relaxin hormone loosening joints around the coccyx can cause a sharp or dull ache at the base of your spine.',
    whenToCallDoctor: 'Mention it to your doctor if pain is severe, makes sitting impossible, or is accompanied by lower limb weakness.',
    remedies: [
      'Use a donut pillow or V-shaped cushion when sitting.',
      'Avoid sitting on hard surfaces for long periods.',
      'Apply ice packs or warm compresses to the area.'
    ],
    faqs: [
      { q: 'Why does my tailbone hurt when sitting?', a: 'Sitting puts direct pressure on the loose, tender joints of the coccyx.' },
      { q: 'Can tailbone pain be relieved by physical therapy?', a: 'Yes, pelvic floor physical therapists can release tight muscles around the tailbone.' },
      { q: 'Will tailbone pain affect delivery?', a: 'You may want to avoid birthing on your back, which compresses the tailbone further. Side or hands-and-knees positions are better.' }
    ]
  }
];
