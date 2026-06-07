// src/data/postpartumData.ts

export interface PostpartumWeekItem {
  week: number;
  physical: string;
  emotional: string;
  baby: string;
}

export const postpartumWeeks: PostpartumWeekItem[] = Array.from({ length: 12 }, (_, i) => {
  const week = i + 1;
  let physical = '';
  let emotional = '';
  let baby = '';

  if (week === 1) {
    physical = "Perineal soreness (from tear/episiotomy) or C-section incision soreness. Vaginal bleeding (lochia) is heavy and red. Uterine cramping is common during breastfeeding as the uterus shrinks.";
    emotional = "Surging hormones, exhaustion, and sleep deprivation. The 'baby blues' affect up to 80% of mothers, causing tearfulness, irritability, and anxiety.";
    baby = "Newborns sleep 16-18 hours a day, waking every 2-3 hours to feed. Meconium (sticky black stools) changes to yellow/seedy stools. Breastfed babies should feed 8-12 times a day.";
  } else if (week === 2) {
    physical = "Lochia becomes pinkish or brown and lighter in volume. Breast engorgement may resolve as milk supply adapts. C-section stitches may be removed or dissolving.";
    emotional = "Baby blues should begin to subside. If feelings of sadness, panic, or inability to cope worsen, contact your doctor to screen for postpartum depression (PPD).";
    baby = "Growth spurt week! Baby may feed constantly (cluster feeding). Expect 6+ wet diapers and 3+ dirty diapers daily. Keep up tummy time (3-5 minutes, 2-3 times a day).";
  } else if (week === 3) {
    physical = "Bleeding should be light yellow or white. Pelvic soreness is resolving. Focus on pelvic floor rehabilitation with gentle breathing exercises (no heavy lifting).";
    emotional = "Sleep deprivation is building. Fatigue will be high. Coordinate shifts with your partner or family to get at least 4 hours of uninterrupted sleep.";
    baby = "Baby is more alert and can briefly focus on your face from 8-12 inches away. Feedings are becoming slightly more efficient but remain frequent.";
  } else if (week === 4) {
    physical = "C-section incision is healing well; check for redness or swelling. Perineal area should feel significantly better. Bleeding should have nearly stopped.";
    emotional = "Transitioning to a routine, though still very tired. Try to get out of the house for a brief 10-minute walk in the fresh air to boost mental health.";
    baby = "Baby may start making cooing sounds and tracking moving objects with their eyes. Maintain consistent daily tummy time.";
  } else if (week === 6) {
    physical = "Your 6-week postpartum checkup! Your doctor will examine physical healing, check your uterus size, and clear you for exercise, sex, and baths.";
    emotional = "Discuss birth control options with your doctor. Address any lingering anxieties or symptoms of postpartum depression/anxiety.";
    baby = "Look out for baby's first social smile! Their vision is improving, and they can distinguish colors. A major milestone!";
  } else if (week <= 8) {
    physical = "Hormones are leveling out, though breastfeeding maintains high prolactin levels. Hair shedding (telogen effluvium) may begin due to estrogen drops.";
    emotional = "You may feel more confident in reading baby's cues. Remember to prioritize self-care, even just 15 minutes of uninterrupted quiet time.";
    baby = "Baby's sleep cycle starts to consolidate slightly at night (some might sleep a 4-5 hour stretch). Tummy time should reach 15-20 minutes total daily.";
  } else {
    physical = "Physical recovery is largely complete, though pelvic floor strength takes up to a year to fully restore. Keep up Kegels and gentle core stability exercises.";
    emotional = "Adjusting to a 'new normal'. If returning to work, prepare logistics and child care early to ease transition anxiety.";
    baby = "Baby is highly interactive, giggling, grabbing toys, and showing interest in their surroundings. They can lift their head and chest during tummy time.";
  }

  return {
    week,
    physical,
    emotional,
    baby
  };
});
