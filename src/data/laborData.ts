export interface LaborGuide {
  title: string;
  slug: string;
  overview: string;
  keyPoints: { name: string; detail: string }[];
  faqs: { q: string; a: string }[];
}

export const laborGuides: LaborGuide[] = [
  {
    title: "Signs of Labor",
    slug: "signs-of-labor",
    overview: "Recognizing when your body is transitioning into labor is crucial for planning your trip to the hospital or birthing center. Labor signs can manifest days or hours before active delivery.",
    keyPoints: [
      { name: "Lightening (Baby Drops)", detail: "The fetus settles deeper into the pelvis, relieving pressure on your diaphragm (making it easier to breathe) but increasing pressure on your bladder." },
      { name: "Loss of the Mucus Plug", detail: "The thick jelly-like plug sealing the cervix is expelled, sometimes tinged with blood (known as 'bloating' or 'bloody show')." },
      { name: "Effacement & Dilation", detail: "The cervix begins thinning (effacing) and opening (dilating), which is checked by your doctor or midwife during late-pregnancy appointments." },
      { name: "Regular, Progressive Contractions", detail: "Unlike practice contractions, true labor contractions become longer, stronger, and closer together, continuing even if you move, rest, or drink water." }
    ],
    faqs: [
      {
        q: "What is the 5-1-1 contraction rule?",
        a: "The 5-1-1 rule is the standard guideline for when to go to the hospital: contractions occur every 5 minutes (from start of one to start of next), last for at least 1 minute each, and this pattern continues for at least 1 hour."
      },
      {
        q: "How do Braxton Hicks differ from real labor contractions?",
        a: "Braxton Hicks contractions are irregular, do not get progressively closer together, are usually painless, and often stop when you change positions or drink water. True labor contractions are regular, get closer together, increase in pain, and dilate the cervix."
      },
      {
        q: "Is lower back pain a sign of labor?",
        a: "Yes, persistent, dull lower back pain that radiates to the front or occurs in rhythmic waves can be an early sign of labor, often referred to as 'back labor'."
      }
    ]
  },
  {
    title: "Water Breaking",
    slug: "water-breaking",
    overview: "Water breaking (spontaneous rupture of membranes) occurs when the amniotic sac surrounding the baby ruptures, allowing amniotic fluid to flow or trickle from the vagina. It is a key sign that labor is beginning or imminent.",
    keyPoints: [
      { name: "Trickle vs. Gush", detail: "For some, the water breaks with a sudden gush of warm liquid. For many others, it is a slow, continuous trickle that can easily be mistaken for urine or discharge." },
      { name: "Color & Odor Check", detail: "Amniotic fluid is typically clear and odorless. If it is green, brown, or has a strong foul odor, contact your provider immediately as this can indicate fetal stress (meconium) or infection." },
      { name: "The 24-Hour Delivery Clock", detail: "Once the amniotic sac is ruptured, the protective barrier against infection is gone. Most providers prefer that labor starts or delivery occurs within 24 hours of rupture." }
    ],
    faqs: [
      {
        q: "What does it feel like when your water breaks?",
        a: "It can feel like a sudden pop followed by a warm gush, or a wet sensation that trickles out continuously. It is painless, but you will feel the fluid flow."
      },
      {
        q: "How can I tell amniotic fluid apart from urine?",
        a: "Amniotic fluid is clear, colorless, and odorless (or slightly sweet-smelling). Urine has a yellow tint and a distinct ammonia smell. Amniotic fluid will continue to leak despite emptying your bladder."
      },
      {
        q: "What should I do immediately after my water breaks?",
        a: "Note the time, color, and odor of the fluid, and contact your doctor or midwife right away. Wear a sanitary pad (not a tampon) to catch the leakage."
      }
    ]
  },
  {
    title: "Epidural Guide",
    slug: "epidural-guide",
    overview: "An epidural is the most common form of pain relief used during labor. It is a regional anesthetic administered through a tiny catheter inserted into the epidural space of your lower back, numbing the nerves that transmit pain from the uterus.",
    keyPoints: [
      { name: "Administration Process", detail: "You sit and arch your back while an anesthesiologist sterilizes the area, numbs the skin, inserts a needle, and slides a tiny catheter through it before removing the needle." },
      { name: "Pain Relief & Sensation", detail: "Within 10-20 minutes, you will feel significant pain relief in your lower body. You will still feel pressure and can move your legs slightly, but the sharp contraction pain is blocked." },
      { name: "Potential Side Effects", detail: "Can cause a temporary drop in blood pressure, shivering, itchiness, or a localized backache. You will also require an IV line, a urinary catheter, and fetal monitoring." }
    ],
    faqs: [
      {
        q: "Does getting an epidural hurt?",
        a: "The anesthesiologist will use a local numbing medication on your skin first, which feels like a quick pinch or sting. The actual insertion of the epidural needle feels like pressure or a dull ache, rather than sharp pain."
      },
      {
        q: "Can an epidural slow down labor?",
        a: "It can sometimes lengthen the second stage of labor (pushing) by reducing the natural urge to push. However, it does not significantly increase the rate of C-sections."
      },
      {
        q: "When is it too late to get an epidural?",
        a: "Generally, you can get an epidural at any point during active labor as long as you are able to sit completely still (about 5-10 minutes) for the insertion. It is usually too late when the baby's head is crowning."
      }
    ]
  },
  {
    title: "C-Section Guide",
    slug: "c-section-guide",
    overview: "A Cesarean delivery (C-section) is the surgical delivery of a baby through incisions made in the mother's abdomen and uterus. C-sections can be planned (due to medical indicators) or unplanned/emergency (due to labor complications).",
    keyPoints: [
      { name: "Surgical Procedure", detail: "Anesthesia is administered (usually a spinal block), a screen is set up, a horizontal incision is made just above the pubic hairline, the baby is delivered, and the incisions are closed with sutures." },
      { name: "Recovery Timeline", detail: "A C-section is major abdominal surgery. You will stay in the hospital for 3-4 days, and full recovery takes 6 to 8 weeks, during which lifting and strenuous activity are restricted." },
      { name: "Gentle C-Sections", detail: "A modern approach where the screen is lowered or clear, allowing the parents to watch the birth, with immediate skin-to-skin contact in the operating room." }
    ],
    faqs: [
      {
        q: "How long does a C-section take?",
        a: "The entire procedure typically takes 30 to 45 minutes. The baby is usually delivered within the first 10-15 minutes, and the remaining time is spent suturing and closing the incisions."
      },
      {
        q: "Is a C-section painful?",
        a: "You will receive spinal or epidural anesthesia, so you will feel no pain during the surgery, though you may feel pulling or pressure. Post-surgery pain is managed with medications during recovery."
      },
      {
        q: "Can I have a vaginal birth after a C-section (VBAC) in the future?",
        a: "Yes, in many cases, a VBAC is highly successful and safe, depending on the type of uterine incision used during your C-section (a low transverse incision is ideal) and the reason for the original C-section."
      }
    ]
  },
  {
    title: "Natural Birth",
    slug: "natural-birth",
    overview: "Natural birth refers to vaginal childbirth with minimal medical interventions, particularly avoiding synthetic pain medications like epidurals. It focuses on coping techniques, movement, and trusting the body's physiological labor process.",
    keyPoints: [
      { name: "Non-Medical Pain Relief", detail: "Utilizes breathing exercises, massage, water immersion (hydrotherapy), warm/cold compresses, and continuous emotional support from a doula or partner." },
      { name: "Freedom of Movement", detail: "Mothers are encouraged to change positions frequently (swaying, squatting, using a birth ball) to help gravity guide the baby down." },
      { name: "Postpartum Benefits", detail: "Enables immediate mobility, facilitates early breastfeeding initiation, and avoids potential side effects associated with epidurals or inductions." }
    ],
    faqs: [
      {
        q: "How can I prepare for a natural birth?",
        a: "Take specialized childbirth education classes (Bradley, Lamaze, or Hypnobirthing), hire a supportive doula, write a birth plan, and practice breathing and relaxation exercises daily."
      },
      {
        q: "Can I change my mind and get pain relief during a natural labor?",
        a: "Absolutely. A birth plan is a flexible guide. If you decide during labor that you want an epidural or other pain management, you can request it at any point during active labor."
      },
      {
        q: "What is the biggest challenge of a natural birth?",
        a: "Managing the intensity and duration of contractions, particularly during the transition phase (8-10 cm). Continuous support and strong mental preparation are key."
      }
    ]
  },
  {
    title: "Induction Guide",
    slug: "induction-guide",
    overview: "Labor induction is the artificial stimulation of uterine contractions to initiate labor before it begins on its own. Inductions are recommended when the risks of continuing the pregnancy outweigh the risks of delivery.",
    keyPoints: [
      { name: "Medical Indications", detail: "Recommended for post-term pregnancy (over 41-42 weeks), preeclampsia, gestational diabetes, premature rupture of membranes, or fetal growth concerns." },
      { name: "Induction Methods", detail: "Prostaglandin gels or inserts to soften the cervix, mechanical dilation using a Foley bulb catheter, artificial rupture of membranes (sweeping/breaking water), or Pitocin IV infusions." },
      { name: "Bishop Score", detail: "A scoring system (0-13) used by your doctor to assess cervical readiness. A score of 8 or higher indicates a high likelihood of a successful vaginal delivery." }
    ],
    faqs: [
      {
        q: "How long does a labor induction take?",
        a: "Induction can be a slow process, especially if your cervix is not yet effaced or dilated. It can take anywhere from 12 to 36+ hours, with cervical ripening alone often taking 12-24 hours."
      },
      {
        q: "Are induced contractions more painful?",
        a: "Yes, contractions stimulated by Pitocin (synthetic oxytocin) often build in intensity more rapidly than natural contractions, which build gradually. This leads many induced mothers to request an epidural."
      },
      {
        q: "What is a cervical ripening agent?",
        a: "It is a medication (like Cervidil or Misoprostol) or mechanical device (like a Foley balloon) used to soften, thin, and open the cervix before administering Pitocin to start active contractions."
      }
    ]
  }
];
