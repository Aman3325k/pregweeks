// src/data/partnerData.ts

export interface PartnerWeekItem {
  week: number;
  momFeeling: string;
  howToHelp: string;
  whatToPrepare: string;
}

export const partnerWeeks: PartnerWeekItem[] = Array.from({ length: 40 }, (_, i) => {
  const week = i + 1;
  let momFeeling = '';
  let howToHelp = '';
  let whatToPrepare = '';

  if (week <= 4) {
    momFeeling = "She is likely feeling normal or experiencing very early PMS-like symptoms (fatigue, bloating, mild breast tenderness). She may not even know she is pregnant yet.";
    howToHelp = "Be patient, buy early pregnancy test kits, and encourage rest if she feels unusually tired.";
    whatToPrepare = "Start eliminating alcohol and smoking together to show solidarity. Encourage her to start taking prenatal vitamins with folic acid.";
  } else if (week <= 8) {
    momFeeling = "Nausea and morning sickness are kicking in due to rising hCG. She may experience intense fatigue, mood swings, and breast soreness.";
    howToHelp = "Help with cooking (especially avoiding strong odors that trigger nausea). Offer dry crackers or ginger tea in the morning.";
    whatToPrepare = "Research local OB-GYNs or midwives and help schedule the first prenatal intake appointment (usually around week 8-12).";
  } else if (week <= 12) {
    momFeeling = "Hormones are peaking. Frequent urination, fatigue, food aversions, and mood changes are common. The risk of miscarriage drops significantly after week 12.";
    howToHelp = "Take over household chores, validate her emotions, and accompany her to the first prenatal ultrasound where you might hear the heartbeat.";
    whatToPrepare = "Discuss when and how you both want to share the news with family and friends. Review budget adjustments for baby expenses.";
  } else if (week <= 16) {
    momFeeling = "Morning sickness and extreme fatigue are beginning to fade. Her baby bump might start showing, and she may experience a welcome surge in energy.";
    howToHelp = "Accompany her on walks, celebrate the end of the first trimester, and tell her how beautiful she looks as her body changes.";
    whatToPrepare = "Plan a budget for maternity wear. Research optional genetic screenings (like NIPT) and discuss them with your provider.";
  } else if (week <= 20) {
    momFeeling = "She may start feeling the baby's first subtle movements (flutterings or 'quickening'). Round ligament pain and nasal congestion might occur.";
    howToHelp = "Put your hand on her belly to see if you can feel movements (it might take a few more weeks). Offer back rubs for posture changes.";
    whatToPrepare = "The anatomy scan (mid-pregnancy ultrasound) happens around now. Plan to attend together to see baby's organs and check gender if desired.";
  } else if (week <= 24) {
    momFeeling = "She might experience leg cramps, backaches, skin changes (melasma), and increased appetite. Her bump is now very noticeable.";
    howToHelp = "Learn how to stretch out her calf muscles when leg cramps strike at night (flex foot upwards). Cook healthy, protein-rich snacks.";
    whatToPrepare = "Start looking at nursery furniture, baby gear essentials (stroller, car seat), and draft the registry checklist.";
  } else if (week <= 28) {
    momFeeling = "She is transitioning into the third trimester. Heartburn, mild swelling (edema), and Braxton Hicks (practice contractions) can start.";
    howToHelp = "Encourage her to drink plenty of water to prevent swelling, and keep antacids handy. Walk together to maintain blood circulation.";
    whatToPrepare = "Schedule prenatal/childbirth classes, breastfeeding courses, and infant CPR training. Register for the gestational diabetes test.";
  } else if (week <= 32) {
    momFeeling = "She may feel heavy, experience shortness of breath (baby is pressing on diaphragm), lower back pain, and struggle to sleep comfortably.";
    howToHelp = "Help her set up pregnancy pillows, massage her lower back, and handle all heavy lifting and grocery shopping.";
    whatToPrepare = "Begin working on the birth plan together (pain management, environment). Install the infant car seat and get it safety-checked.";
  } else if (week <= 36) {
    momFeeling = "Braxton Hicks contractions become more noticeable. Frequent urination returns as baby settles lower. She might experience pelvic pressure.";
    howToHelp = "Help pack her hospital bag. Download a contraction timer app and review the signs of real vs practice labor.";
    whatToPrepare = "Wash baby clothes and sheets. Set up the crib or bassinet next to your bed. Ensure you have postpartum pads and diapers ready.";
  } else {
    momFeeling = "She is likely very uncomfortable, tired, and anxious to give birth. She may experience pelvic pressure ('lightening') and lose her mucus plug.";
    howToHelp = "Keep the car gassed up. Be ready to act as her advocate. Comfort her during contractions and help her find resting positions.";
    whatToPrepare = "Double-check hospital routes and parking. Keep emergency numbers and insurance cards in one place. Make sure the birth plan is printed.";
  }

  return {
    week,
    momFeeling,
    howToHelp,
    whatToPrepare
  };
});
