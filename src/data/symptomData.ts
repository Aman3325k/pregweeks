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
