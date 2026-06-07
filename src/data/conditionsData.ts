export interface Condition {
  name: string;
  slug: string;
  definition: string;
  symptoms: string[];
  risks: {
    mother: string;
    baby: string;
  };
  treatment: string[];
  whenToCall: string;
  faqs: { q: string; a: string }[];
}

export const pregnancyConditions: Condition[] = [
  {
    name: "Gestational Diabetes",
    slug: "gestational-diabetes",
    definition: "A temporary form of diabetes that develops during pregnancy, characterized by high blood sugar levels. Hormones produced by the placenta block the action of insulin, causing insulin resistance.",
    symptoms: [
      "Often asymptomatic (detected via routine glucose screening)",
      "Increased thirst",
      "Frequent urination",
      "Unusual fatigue",
      "Blurred vision"
    ],
    risks: {
      mother: "Higher risk of preeclampsia, C-section delivery, and developing Type 2 diabetes later in life.",
      baby: "Macrosomia (excessive birth weight), hypoglycemia (low blood sugar) at birth, respiratory distress syndrome, and risk of early preterm birth."
    },
    treatment: [
      "Frequent blood glucose monitoring (usually 4 times daily)",
      "Nutritional adjustments (limiting simple carbohydrates, focusing on fiber and lean protein)",
      "Regular physical activity to naturally lower blood sugar",
      "Insulin injections or oral medications if diet and exercise are insufficient"
    ],
    whenToCall: "Contact your healthcare provider if your daily glucose readings consistently exceed targeted thresholds (usually 95 mg/dL fasting or 140 mg/dL one hour post-meal), or if you experience dizziness, confusion, or extreme thirst.",
    faqs: [
      {
        q: "Does gestational diabetes go away after birth?",
        a: "Yes, in the vast majority of cases, gestational diabetes resolves immediately after delivery once the placenta is expelled. However, your doctor will check your blood sugar levels 6 to 12 weeks postpartum, and you have a 50% higher risk of developing Type 2 diabetes in the future."
      },
      {
        q: "How is gestational diabetes screened?",
        a: "It is screened between weeks 24 and 28 of pregnancy using a Glucose Challenge Test (drinking a sugary solution followed by a blood draw 1 hour later). If results are elevated, a 3-hour Glucose Tolerance Test is performed for confirmation."
      },
      {
        q: "Can I prevent gestational diabetes?",
        a: "While you cannot completely eliminate risk, maintaining a healthy weight before conception, eating a nutrient-dense diet, and staying physically active significantly reduces the likelihood of developing it."
      }
    ]
  },
  {
    name: "Preeclampsia",
    slug: "preeclampsia",
    definition: "A serious blood pressure disorder that typically arises after week 20 of pregnancy, marked by sudden high blood pressure (140/90 mmHg or higher) and signs of organ damage, commonly in the kidneys or liver.",
    symptoms: [
      "Sudden swelling (edema) in the hands, face, and eyes",
      "Persistent, severe headaches that do not respond to acetaminophen",
      "Visual disturbances (spots, flashing lights, or blurriness)",
      "Upper abdominal pain, usually on the right side under the ribs",
      "Sudden weight gain (over 2-5 pounds in a single week)"
    ],
    risks: {
      mother: "Seizures (eclampsia), stroke, placental abruption, organ failure, and HELLP syndrome.",
      baby: "Intrauterine growth restriction (IUGR) due to reduced placental blood flow, premature birth, and low birth weight."
    },
    treatment: [
      "Close blood pressure monitoring and anti-hypertensive medications",
      "Low-dose aspirin starting around week 12 for high-risk individuals",
      "Magnesium sulfate IV therapy during labor to prevent seizures",
      "Delivery of the baby (the only true cure, balanced against gestational age)"
    ],
    whenToCall: "Seek emergency medical care immediately if you experience a sudden severe headache, blurred vision or spots in your eyes, severe swelling in your face or hands, or sharp pain in your upper abdomen.",
    faqs: [
      {
        q: "What is the difference between gestational hypertension and preeclampsia?",
        a: "Gestational hypertension is high blood pressure during pregnancy without protein in the urine or other signs of organ damage. Preeclampsia includes high blood pressure plus protein in the urine or liver/kidney dysfunction."
      },
      {
        q: "Who is at risk for preeclampsia?",
        a: "First-time mothers, those with pre-existing high blood pressure, history of preeclampsia, pregnancy over age 35, obesity, or carrying multiples (twins/triplets)."
      },
      {
        q: "Can preeclampsia happen after delivery?",
        a: "Yes, postpartum preeclampsia can occur up to six weeks after birth. It is a medical emergency requiring immediate treatment."
      }
    ]
  },
  {
    name: "Group B Strep (GBS)",
    slug: "group-b-strep",
    definition: "An infection caused by Streptococcus agalactiae bacteria. It is a common bacterium found in the digestive and lower reproductive tracts of 25% of healthy adult women, which can be passed to the baby during vaginal delivery.",
    symptoms: [
      "No symptoms for the mother (GBS is colonizing, not an active infection for the mother)",
      "High fever or difficulty feeding in newborns (signs of GBS infection in baby)"
    ],
    risks: {
      mother: "Uterine infection (chorioamnionitis) or urinary tract infections.",
      baby: "Sepsis (blood infection), pneumonia, meningitis, and developmental issues if untreated during labor."
    },
    treatment: [
      "Routine screening swab of the vagina and rectum at weeks 36 to 37",
      "Intravenous (IV) antibiotics (usually penicillin) during active labor",
      "Newborn monitoring for 24-48 hours after birth"
    ],
    whenToCall: "Call your OB/GYN immediately when your water breaks or active labor starts, especially if you have tested positive for GBS, so antibiotic treatment can begin on time.",
    faqs: [
      {
        q: "Can I take oral antibiotics before labor to cure GBS?",
        a: "No, oral antibiotics taken before labor are not effective because the bacteria naturally colonizes the tract and will return before delivery. GBS must be treated with IV antibiotics during active labor."
      },
      {
        q: "What if I have a scheduled C-section and am GBS positive?",
        a: "If you are having a C-section before your water breaks or labor begins, the risk to the baby is extremely low, and antibiotics are generally not required."
      },
      {
        q: "How does GBS affect the baby after birth?",
        a: "Early-onset GBS occurs within 24 hours of birth, causing breathing problems and fever. Late-onset occurs weeks later and can lead to meningitis. Antibiotics during labor reduce early-onset risk by 80%."
      }
    ]
  },
  {
    name: "Placenta Previa",
    slug: "placenta-previa",
    definition: "A condition where the placenta attaches low in the uterus, partially or completely covering the cervix (the opening of the birth canal). This can cause severe bleeding during labor.",
    symptoms: [
      "Bright red, painless vaginal bleeding in the second or third trimester",
      "Uterine cramping accompanying bleeding",
      "Baby in a breech or transverse position"
    ],
    risks: {
      mother: "Severe maternal hemorrhage during labor, shock, and requirement for emergency blood transfusions.",
      baby: "Preterm birth due to bleeding emergencies, hypoxia (oxygen deprivation), and fetal distress."
    },
    treatment: [
      "Pelvic rest (no intercourse, douching, or vaginal exams)",
      "Strict bed rest or hospitalization for bleeding episodes",
      "Scheduled C-section delivery (usually between weeks 36 and 37) to prevent labor contractions"
    ],
    whenToCall: "Contact your healthcare provider or go to the nearest emergency room immediately if you experience any vaginal bleeding during your second or third trimester.",
    faqs: [
      {
        q: "Can placenta previa resolve on its own?",
        a: "Yes, in over 90% of cases diagnosed in the second trimester, the placenta 'migrates' upward away from the cervix as the uterus grows and expands. This is why repeat scans are performed around week 32."
      },
      {
        q: "Why is pelvic rest mandatory for placenta previa?",
        a: "Vaginal exams, intercourse, or insertions can disrupt the low-lying placental blood vessels, causing sudden, life-threatening bleeding."
      },
      {
        q: "What causes placenta previa?",
        a: "Factors include uterine scarring from previous C-sections or surgeries, carrying multiples, smoking, or maternal age over 35."
      }
    ]
  },
  {
    name: "Severe Morning Sickness (Hyperemesis Gravidarum)",
    slug: "morning-sickness-severe",
    definition: "A severe, extreme form of morning sickness characterized by persistent, intractable nausea and vomiting that prevents the retention of fluids and nutrients.",
    symptoms: [
      "Inability to keep any fluids or food down for 24 hours",
      "Significant weight loss (more than 5% of pre-pregnancy weight)",
      "Dehydration (dark urine, dry mouth, or extreme dizziness)",
      "Ketones in the urine (a sign of muscle breakdown due to starvation)"
    ],
    risks: {
      mother: "Severe malnutrition, electrolyte imbalances, esophageal damage, and depression/anxiety.",
      baby: "Slightly higher risk of low birth weight or premature birth if maternal nutrition is severely compromised."
    },
    treatment: [
      "Intravenous (IV) fluids to restore hydration and electrolytes",
      "Anti-nausea medications (e.g., Pyridoxine/Doxylamine, Ondansetron)",
      "Enteral nutrition (feeding tube) in extremely rare, severe cases",
      "Dietary adjustments (eating dry toast, small frequent bland meals)"
    ],
    whenToCall: "Seek immediate medical attention if you cannot keep liquids down for 24 hours, feel dizzy when standing, have dark-colored urine or go 8+ hours without urinating, or lose more than 2-3 pounds in a week.",
    faqs: [
      {
        q: "Is Hyperemesis Gravidarum different from normal morning sickness?",
        a: "Yes. Normal morning sickness is mild, permits some eating/drinking, and fades by week 12-14. Hyperemesis Gravidarum involves constant vomiting, causes weight loss and dehydration, and often persists until week 20 or even delivery."
      },
      {
        q: "Does Hyperemesis Gravidarum hurt the baby?",
        a: "If treated promptly with IV fluids and nutrition, the baby is generally unaffected. The primary concern is protecting maternal health and keeping hydration stable."
      },
      {
        q: "What causes severe pregnancy sickness?",
        a: "The exact cause is unknown, but it is linked to rapidly rising levels of hCG and estrogen hormones, along with genetics."
      }
    ]
  },
  {
    name: "Pregnancy After 35 (Advanced Maternal Age)",
    slug: "pregnancy-after-35",
    definition: "A pregnancy occurring in an individual aged 35 or older at the time of delivery. While most over-35 pregnancies are healthy and successful, they carry higher risks of chromosomal anomalies and obstetric complications.",
    symptoms: [
      "No unique physical symptoms; pregnancy presents similarly to younger individuals",
      "Increased likelihood of twin or multiple pregnancy due to hormonal changes"
    ],
    risks: {
      mother: "Higher rates of gestational diabetes, preeclampsia, miscarriage, C-section delivery, and twin pregnancy.",
      baby: "Higher risk of chromosomal abnormalities (e.g. Down Syndrome), premature birth, and low birth weight."
    },
    treatment: [
      "Early and comprehensive prenatal screening (NIPT, amniocentesis)",
      "Additional ultrasound scans in the third trimester to monitor growth",
      "Low-dose daily aspirin to reduce preeclampsia risks",
      "Careful monitoring of blood pressure and glucose levels"
    ],
    whenToCall: "Follow regular prenatal schedules, but contact your doctor immediately if you experience visual changes, severe headaches, spotting, or reduced baby kicks.",
    faqs: [
      {
        q: "Why is age 35 considered a milestone in pregnancy?",
        a: "Historically, age 35 was when the risk of chromosomal abnormalities exceeded the risk of complications from amniocentesis. Today, it remains a clinical benchmark because fertility declines more rapidly and obstetric risks rise."
      },
      {
        q: "What are the chances of having a baby with Down Syndrome at 35?",
        a: "At age 35, the risk is about 1 in 350. By age 40, the risk rises to 1 in 100, compared to 1 in 1,250 at age 25."
      },
      {
        q: "What screening tests are recommended for pregnancies after 35?",
        a: "Cell-free DNA screening (NIPT) is highly recommended at week 10 to check for common chromosomal conditions, followed by a detailed week 20 anatomy ultrasound."
      }
    ]
  }
];
