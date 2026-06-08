import type { APIRoute } from 'astro';
import { pregnancyData } from '../data/pregnancyData';
import { foodItems } from '../data/foodData';
import { symptomItems } from '../data/symptomData';
import { glossaryTerms } from '../data/glossaryData';
import { pregnancyConditions } from '../data/conditionsData';
import { laborGuides } from '../data/laborData';

export const GET: APIRoute = async () => {
  const searchIndex = [
    // Core Pages & Tools
    { title: "Pregnancy Due Date Calculator", desc: "Calculate your due date (EDD) and gestational age based on LMP.", url: "/tools/due-date-calculator" },
    { title: "IVF Due Date Calculator", desc: "Calculate due date based on embryo transfer or egg retrieval date.", url: "/tools/ivf-calculator" },
    { title: "Pregnancy Weight Gain Tracker", desc: "Track weight gain against clinical IOM recommendations.", url: "/tools/weight-tracker" },
    { title: "Ovulation & Fertility Calculator", desc: "Forecast fertile windows, ovulation day, and next period with a calendar.", url: "/tools/ovulation-calculator" },
    { title: "Fetal Kick Counter", desc: "Count and log fetal movements to track baby well-being.", url: "/tools/kick-counter" },
    { title: "Contraction Timer & Labor Tracker", desc: "Timer for uterine contractions with clinical 5-1-1 alarms.", url: "/tools/contraction-timer" },
    { title: "Baby Cost Calculator", desc: "Estimate first-year expenses (childcare, diapers, gear) with sliders.", url: "/tools/baby-cost-calculator" },
    { title: "Pregnancy Journal & Diary", desc: "Private note-taking diary with local storage and text exporter.", url: "/tools/journal" },
    { title: "Hospital Bag Checklist", desc: "Printable hospital bag check progress for Mom, Baby, and Partner.", url: "/checklist/hospital-bag" },
    { title: "Baby Shower Checklist & Timeline", desc: "Printable planner timeline from 8 weeks before to day-of.", url: "/checklist/baby-shower" },
    { title: "Nursery Setup Checklist", desc: "Planning list for furniture, bedding, and safety items.", url: "/checklist/nursery" },
    { title: "Baby Gear Checklist", desc: "Checklist for strollers, car seats, carriers, and bathing gear.", url: "/checklist/baby-gear" },
    { title: "Shareable Milestone Cards", desc: "Render and download custom weekly pregnancy milestone cards.", url: "/milestone" },
    { title: "Chinese Gender Predictor & Chart", desc: "Folkoric gender calendar age and heart rate indicators.", url: "/tools/gender-prediction" },
    { title: "Early Pregnancy Signs & Symptoms", desc: "12 signs and hormonal indicators before a missed period.", url: "/early-pregnancy-signs" },
    { title: "When to Take a Pregnancy Test", desc: "Timing guide for hCG thresholds, faint lines, and evap lines.", url: "/when-to-take-pregnancy-test" },
    { title: "Overdue Pregnancy Guide", desc: "Schedules and monitoring for week 40, 41, and 42.", url: "/overdue" },
    { title: "Medical Sources & Bibliography", desc: "List of ACOG, WHO, CDC, and NHS references.", url: "/sources" },
    { title: "Pregnancy Glossary & Medical Dictionary", desc: "A-Z index of 105 pregnancy terms and clinical definitions.", url: "/glossary" },
    { title: "Week Comparison Tool", desc: "Select two weeks of pregnancy to compare growth side-by-side.", url: "/compare" },
    { title: "Nutrition Guide", desc: "Pregnancy safe foods, prenatal vitamins, and diet instructions.", url: "/nutrition" },
    { title: "Pregnancy FAQ", desc: "21 common questions and clinical answers.", url: "/faq" },
    { title: "First Trimester Guide", desc: "Development, screening (NIPT), and nutritional milestones.", url: "/trimester/first" },
    { title: "Second Trimester Guide", desc: "Anatomy scans, glucose screening, and body changes.", url: "/trimester/second" },
    { title: "Third Trimester Guide", desc: "GBS swabs, birth preparation, and third trimester changes.", url: "/trimester/third" },
    
    // Dynamic Weekly Guides (40)
    ...pregnancyData.map(d => ({
      title: `Week ${d.week} of Pregnancy`,
      desc: `Fetal size (${d.babySize.name}), development milestones, and symptoms for week ${d.week}.`,
      url: `/week/${d.week}`
    })),

    // Food Safety Items (103)
    ...foodItems.map(f => ({
      title: `${f.name} Pregnancy Safety`,
      desc: `Is it safe to eat ${f.name} while pregnant? Safety status: ${f.status}.`,
      url: `/food/${f.slug}`
    })),

    // Symptoms (32)
    ...symptomItems.map(s => ({
      title: `${s.name} During Pregnancy`,
      desc: `Why ${s.name.toLowerCase()} occurs, remedies, and when to call the doctor.`,
      url: `/symptoms/${s.slug}`
    })),

    // Glossary Terms (105)
    ...glossaryTerms.map(t => ({
      title: `${t.term} (Pregnancy Glossary)`,
      desc: `Definition: ${t.definition}`,
      url: `/glossary/${t.slug}`
    })),

    // Conditions (6)
    ...pregnancyConditions.map(c => ({
      title: `${c.name} in Pregnancy`,
      desc: `Overview of ${c.name.toLowerCase()} symptoms, maternal/fetal risks, and treatments.`,
      url: `/conditions/${c.slug}`
    })),

    // Labor Guides (6)
    ...laborGuides.map(l => ({
      title: `${l.title} Childbirth Guide`,
      desc: `${l.overview}`,
      url: `/labor/${l.slug}`
    }))
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'max-age=31536000, immutable'
    }
  });
};
