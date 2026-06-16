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
