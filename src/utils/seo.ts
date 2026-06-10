export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getFAQSchema(questions: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}

export interface MedicalReviewer {
  name: string;
  jobTitle: string;
  sameAs: string[];
  organization?: string;
  organizationUrl?: string;
}

const DEFAULT_REVIEWER: MedicalReviewer = {
  name: "PregWeeks Editorial Team",
  jobTitle: "Medical Content Reviewers",
  sameAs: [
    "https://www.acog.org",
    "https://www.who.int/health-topics/pregnancy",
    "https://www.cdc.gov/pregnancy"
  ],
  organization: "American College of Obstetricians and Gynecologists",
  organizationUrl: "https://www.acog.org"
};

export function getMedicalPageSchema(
  title: string,
  desc: string,
  url: string,
  image = "https://pregweeks.com/pregnancy-hero.webp",
  reviewer?: MedicalReviewer
) {
  const currentDate = new Date().toISOString().split('T')[0];
  const activeReviewer = reviewer || DEFAULT_REVIEWER;
  
  const baseSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": title,
    "description": desc,
    "url": url,
    "image": image,
    "inLanguage": "en-US",
    "datePublished": "2026-06-01",
    "dateModified": currentDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "publisher": {
      "@type": "Organization",
      "name": "PregWeeks",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pregweeks.com/favicon.svg"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "PregWeeks Medical Review Board"
    }
  };

  baseSchema.reviewedBy = {
    "@type": "Person",
    "name": activeReviewer.name,
    "jobTitle": activeReviewer.jobTitle,
    "sameAs": activeReviewer.sameAs,
    ...(activeReviewer.organization ? {
      "worksFor": {
        "@type": "MedicalOrganization",
        "name": activeReviewer.organization,
        ...(activeReviewer.organizationUrl ? { "sameAs": activeReviewer.organizationUrl } : {})
      }
    } : {})
  };
  
  // Add medical audience and OB-GYN specialty details to solidify YMYL credentials
  baseSchema.medicalAudience = "Patient";
  baseSchema.specialty = {
    "@type": "MedicalSpecialty",
    "name": "Obstetrics and Gynecology",
    "sameAs": "https://en.wikipedia.org/wiki/Obstetrics_and_gynaecology"
  };

  return baseSchema;
}

export function getSoftwareApplicationSchema(
  name: string,
  description: string,
  url: string,
  category = "HealthApplication"
) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#application`,
    "url": url,
    "name": name,
    "description": description,
    "applicationCategory": category,
    "operatingSystem": "All",
    "browserRequirements": "Requires modern web browser with JavaScript and LocalStorage enabled.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PregWeeks",
      "url": "https://pregweeks.com/"
    }
  };
}

export interface HowToStepItem {
  name: string;
  text: string;
  url?: string;
}

export function getHowToSchema(name: string, description: string, steps: HowToStepItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      "position": index + 1,
      ...(step.url ? { "url": step.url } : {})
    }))
  };
}

export function getMedicalConditionSchema(name: string, definition: string, symptoms: string[], treatments: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": name,
    "description": definition,
    "possibleTreatment": treatments.map(t => ({
      "@type": "MedicalTherapy",
      "name": t
    })),
    "signOrSymptom": symptoms.map(s => ({
      "@type": "MedicalSignOrSymptom",
      "name": s
    }))
  };
}

