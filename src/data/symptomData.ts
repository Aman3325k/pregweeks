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

export const symptomItems: SymptomItem[] = [];
