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

export function getMedicalPageSchema(title: string, desc: string, url: string, image = "https://pregweeks.com/pregnancy-hero.png") {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": title,
    "description": desc,
    "url": url,
    "image": image,
    "inLanguage": "en-US",
    "datePublished": "2026-06-01",
    "dateModified": "2026-06-07",
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
}
