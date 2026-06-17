const fs = require('fs');
const path = require('path');

// 1. Read and parse namesData.ts using sandboxed evaluation
let tsContent = fs.readFileSync(path.join(__dirname, '../data/namesData.ts'), 'utf8');

// Strip interfaces and type annotations to make it valid JS
tsContent = tsContent.replace(/export interface[\s\S]*?\n\n/, '');
tsContent = tsContent.replace(/export const babyNames: BabyName\[\]\s*=/, 'exports.babyNames =');

const sandbox = {};
const fn = new Function('exports', tsContent);
fn(sandbox);

const babyNames = sandbox.babyNames;

if (!babyNames || babyNames.length === 0) {
  console.error("Failed to parse babyNames from namesData.ts");
  process.exit(1);
}

console.log(`Successfully parsed ${babyNames.length} names.`);

// 2. Custom dictionaries for Pronunciations and Nicknames
const pronunciationDict = {
  "Emma": "EM-uh",
  "Amelia": "uh-MEE-lee-uh",
  "Olivia": "oh-LIV-ee-uh",
  "Sophia": "so-FEE-uh",
  "Isabella": "iz-uh-BEL-uh",
  "Ava": "AY-vuh",
  "Mia": "MEE-uh",
  "Evelyn": "EV-lin",
  "Harper": "HAHR-per",
  "Luna": "LOO-nuh",
  "Camila": "cuh-MEE-lah",
  "Gianna": "jee-AH-nah",
  "Elizabeth": "ih-LIZ-uh-beth",
  "Eleanor": "EL-uh-ner",
  "Ella": "EL-uh",
  "Abigail": "AB-ih-gayl",
  "Sofia": "so-FEE-uh",
  "Avery": "AY-vur-ee",
  "Scarlett": "SKAHR-lit",
  "Emily": "EM-uh-lee",
  "Aria": "AH-ree-uh",
  "Penelope": "puh-NEL-uh-pee",
  "Chloe": "KLOH-ee",
  "Layla": "LAY-luh",
  "Mila": "MEE-luh",
  "Nora": "NOR-uh",
  "Hazel": "HAY-zel",
  "Madison": "MAD-ih-sun",
  "Ellie": "EL-ee",
  "Lily": "LIL-ee",
  "Nova": "NOH-vuh",
  "Isla": "EYE-luh",
  "Grace": "GRAYSE",
  "Violet": "VY-oh-lit",
  "Aurora": "aw-ROR-uh",
  "Elena": "eh-LAY-nuh",
  "Stella": "STEL-uh",
  "Victoria": "vik-TOR-ee-uh",
  "Maya": "MY-uh",
  "Zoe": "ZOH-ee",
  "Bella": "BEL-uh",
  "Zara": "ZAHR-uh",
  "Liam": "LEE-um",
  "Noah": "NOH-uh",
  "Oliver": "OL-ih-ver",
  "James": "JAYMZ",
  "Elijah": "ee-LY-zhuh",
  "William": "WIL-yum",
  "Henry": "HEN-ree",
  "Lucas": "LOO-kus",
  "Benjamin": "BEN-juh-min",
  "Theodore": "THEE-oh-dor",
  "Mateo": "mah-TAY-oh",
  "Levi": "LEE-vy",
  "Sebastian": "suh-BAS-chuhn",
  "Daniel": "DAN-yul",
  "Jack": "JAK",
  "Michael": "MY-kul",
  "Alexander": "al-ig-ZAN-der",
  "Owen": "OH-in",
  "Asher": "ASH-er",
  "Samuel": "SAM-yoo-ul",
  "Ethan": "EE-thun",
  "Leo": "LEE-oh",
  "Jackson": "JAK-sun",
  "Mason": "MAY-sun",
  "Ezra": "EZ-ruh",
  "John": "JON",
  "Hudson": "HUD-sun",
  "Luca": "LOO-cah",
  "Aiden": "AY-dun",
  "David": "DAY-vid",
  "Wyatt": "WY-ut",
  "Carter": "KAHR-ter",
  "Julian": "JOO-lee-un",
  "Luke": "LOOK",
  "Grayson": "GRAY-sun",
  "Isaac": "EYE-zik",
  "Jayden": "JAY-dun",
  "Gabriel": "GAY-bree-ul",
  "Freddie": "FRED-ee",
  "Isabella": "iz-uh-BEL-uh"
};

const nicknamesDict = {
  "Emma": ["Em", "Emy", "Ema"],
  "Amelia": ["Amy", "Lia", "Milly"],
  "Olivia": ["Liv", "Livvy", "Oli"],
  "Sophia": ["Soph", "Sophie", "Phia"],
  "Isabella": ["Izzy", "Bella", "Ella"],
  "Ava": ["Avie", "Ava-Mae"],
  "Mia": ["Mimi", "Mya"],
  "Evelyn": ["Evie", "Eve", "Lyn"],
  "Harper": ["Harpy", "Harp"],
  "Luna": ["Lulu", "Luna-Rose"],
  "Camila": ["Mila", "Cami", "Millie"],
  "Gianna": ["Gia", "Gigi", "Anna"],
  "Elizabeth": ["Liz", "Lizzie", "Beth", "Eliza"],
  "Eleanor": ["Ellie", "Nora", "Ella"],
  "Ella": ["Ellie", "El"],
  "Abigail": ["Abby", "Abbie", "Gail"],
  "Sofia": ["Sofi", "Soph"],
  "Avery": ["Ave", "Aves"],
  "Scarlett": ["Lettie", "Scar"],
  "Emily": ["Em", "Emy", "Millie"],
  "Aria": ["Ari", "Arya"],
  "Penelope": ["Penny", "Nellie", "Nell"],
  "Chloe": ["Chlo", "Coco"],
  "Layla": ["Lay", "Lyla"],
  "Mila": ["Milie", "Mimi"],
  "Nora": ["Norie", "Nono"],
  "Hazel": ["Haze", "Hazelnut"],
  "Madison": ["Maddy", "Mads"],
  "Ellie": ["El", "Elle"],
  "Lily": ["Lil", "Lilian"],
  "Nova": ["Novie", "Nova-Lee"],
  "Isla": ["Isli", "Isla-Rose"],
  "Grace": ["Gracie", "Gray"],
  "Violet": ["Vi", "Lettie"],
  "Aurora": ["Rory", "Aura"],
  "Elena": ["Ellie", "Lena"],
  "Stella": ["Stell", "Ella"],
  "Victoria": ["Vicky", "Tori", "Ria"],
  "Maya": ["May", "Mya"],
  "Zoe": ["Zoey", "Zo"],
  "Bella": ["Bell", "Izzy"],
  "Zara": ["Zar", "Zaza"],
  "Liam": ["Lee", "Lia"],
  "Noah": ["Noe", "Noa"],
  "Oliver": ["Ollie", "Noll"],
  "James": ["Jamie", "Jim", "Jimmy"],
  "Elijah": ["Eli", "Lige"],
  "William": ["Will", "Billy", "Liam", "Willy"],
  "Henry": ["Hank", "Harry"],
  "Lucas": ["Luke", "Luca"],
  "Benjamin": ["Ben", "Benny", "Benji"],
  "Theodore": ["Theo", "Teddy", "Ted"],
  "Mateo": ["Teo", "Mat"],
  "Levi": ["Lee", "Lev"],
  "Sebastian": ["Seb", "Sebby", "Bastian"],
  "Daniel": ["Dan", "Danny"],
  "Jack": ["Jacky", "Jackie"],
  "Michael": ["Mike", "Mikey"],
  "Alexander": ["Alex", "Xander", "Alec"],
  "Owen": ["Owie", "Own"],
  "Asher": ["Ash", "Ashe"],
  "Samuel": ["Sam", "Sammy"],
  "Ethan": ["Eth", "Etty"],
  "Leo": ["Leon", "Leonie"],
  "Jackson": ["Jack", "Jax"],
  "Mason": ["Mace", "Mase"],
  "Ezra": ["Ez", "Ezzy"],
  "John": ["Johnny", "Jack"],
  "Hudson": ["Hud", "Huddy"],
  "Luca": ["Luke", "Luc"],
  "Aiden": ["Aid", "Addy"],
  "David": ["Dave", "Davey"],
  "Wyatt": ["Wy", "Wye"],
  "Carter": ["Cart", "Cary"],
  "Julian": ["Jules", "Jude"],
  "Luke": ["Lucas", "Luka"],
  "Grayson": ["Gray", "Grase"],
  "Isaac": ["Zac", "Ikey"],
  "Jayden": ["Jay", "Jaden"],
  "Gabriel": ["Gabe", "Gaby"],
  "Freddie": ["Fred", "Fredy"],
  "Charlie": ["Char", "Chas"],
  "Isabella": ["Bella", "Izzy", "Ella"]
};

// 3. Fallback functions for pronunciation and nicknames
function generatePronunciation(name) {
  if (pronunciationDict[name]) return pronunciationDict[name];
  
  let phonetic = name.toLowerCase();
  
  // Custom rules for general origins
  if (phonetic.endsWith('a')) {
    phonetic = phonetic.slice(0, -1) + '-uh';
  } else if (phonetic.endsWith('us')) {
    phonetic = phonetic.slice(0, -2) + '-uhs';
  } else if (phonetic.endsWith('is')) {
    phonetic = phonetic.slice(0, -2) + '-is';
  } else if (phonetic.endsWith('en') || phonetic.endsWith('an')) {
    phonetic = phonetic.slice(0, -2) + '-un';
  } else if (phonetic.endsWith('ia')) {
    phonetic = phonetic.slice(0, -2) + '-ee-uh';
  }

  phonetic = phonetic.replace(/y/g, 'ee');
  phonetic = phonetic.replace(/ph/g, 'f');
  phonetic = phonetic.replace(/th/g, 'th');
  
  const parts = phonetic.split('-');
  if (parts.length > 1) {
    parts[0] = parts[0].toUpperCase();
    return parts.join('-');
  }
  
  return name.toUpperCase();
}

function generateNicknames(name) {
  if (nicknamesDict[name]) return nicknamesDict[name];
  
  if (name.length <= 4) {
    return [name, `${name}y`].filter((v, i, a) => a.indexOf(v) === i);
  }
  
  const generated = [];
  if (name.endsWith('a')) {
    generated.push(name.slice(0, -1) + 'i');
    generated.push(name.slice(0, -1) + 'y');
  } else if (name.endsWith('us') || name.endsWith('as')) {
    generated.push(name.slice(0, -2));
  } else if (name.endsWith('en') || name.endsWith('an')) {
    generated.push(name.slice(0, -2) + 'y');
  } else {
    generated.push(name.substring(0, 4));
    generated.push(name.substring(0, 4) + 'y');
  }
  
  return Array.from(new Set(generated)).filter(n => n && n !== name);
}

// Helper to calculate a stable hash index for template rotation
function getTemplateIndex(name, numTemplates) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % numTemplates;
}

// 4. Origin-specific custom descriptions to make text highly specific
const originExplanations = {
  "Hebrew": "In Hebrew custom, names represent deep spiritual linkages and are often derived from biblical texts or expressions of thanksgiving.",
  "Sanskrit": "Rooted in ancient Vedic traditions, Sanskrit names often reflect natural cosmic elements, spiritual attributes, or sacred virtues.",
  "Latin": "Derived from classical Roman roots, Latin names typically signify attributes of nature, strength, or civil roles within early historical societies.",
  "Greek": "Greek names are historically tied to classical mythology, philosophical traits, or historical legends from ancient city-states.",
  "Germanic": "Ancient Germanic names are deeply rooted in regional history, traditionally composed of elements representing protection, nobility, or physical strength.",
  "Arabic": "Arabic naming conventions prioritize noble traits, virtuous characteristics, and profound expressions of spiritual alignment.",
  "Spanish": "Spanish names often carry a rich heritage, commonly combining classical Latin linguistic structures with regional values and traditional history.",
  "Irish": "With a rich Celtic heritage, Irish names are traditionally associated with natural land elements, historical rulers, and regional folklore.",
  "Norse": "Norse names carry the legacy of Scandinavian mythological deities, historic seafarers, and elements denoting valor.",
  "Japanese": "Japanese names are selected based on the choice of Kanji characters, which convey specific values, natural seasons, or familial wishes.",
  "French": "French names evolved from early Latin, Germanic, or Celtic roots, carrying a classic, sophisticated heritage of regional culture.",
  "Welsh": "Welsh names represent a distinct branch of the Celtic language, often tied to local landscapes, natural waterways, and old legends.",
  "Scottish": "Scottish names highlight a rugged Gaelic ancestry, frequently denoting clans, territorial elements, or historical symbols of protection."
};

const defaultOriginExplanation = "This name represents a classic choice in regional history, evolving over generations to hold its place in contemporary naming customs.";

// 5. Build Enriched Baby Names Database
const enrichedData = {};

babyNames.forEach((item) => {
  const { name, meaning, origin, gender, popularity, slug } = item;
  
  const templateIdx = getTemplateIndex(name, 5);
  const originExp = originExplanations[origin] || defaultOriginExplanation;
  
  // A. Etymology Section (expanded to 3-4 longer sentences, ~80-100 words, 5 variations)
  let etymology = "";
  const etymologyTemplates = [
    `The baby name ${name} traces its origins to ${origin} history, where it primarily translates to mean "${meaning}". ${originExp} In historical records, this name was frequently chosen to represent these core values, and it has maintained its distinct charm down through the centuries. Choosing this name for a child carries a positive, deep significance, reflecting these ancestral qualities in a modern context.`,
    `Originating from ${origin} heritage, ${name} conveys the literal meaning of "${meaning}". In its linguistic history, ${originExp} Traditionally, the name was bestowed to inspire strength and honor, making it a highly symbolic choice. It remains a strong and expressive selection for families seeking a name with historical weight, cultural depth, and a beautiful melodic flow.`,
    `${name} has its linguistic roots in the ${origin} language, where it is traditionally translated as "${meaning}". ${originExp} Over time, the name has been chosen by families to invoke these positive attributes and values in the child's life. Its historical longevity is a testament to its beauty, appealing to successive generations of parents.`,
    `With a distinguished history in ${origin} naming traditions, ${name} is understood to signify "${meaning}". ${originExp} Modern parents are drawn to the name because of its beautiful phonetic structure combined with this historical significance. It carries a classic, elegant tone that works perfectly for a child growing up in today's globalized society.`,
    `Linguistically derived from ${origin} sources, the name ${name} carries the beautiful translation of "${meaning}". ${originExp} It represents a timeless choice that connects the child directly to qualities of ${meaning.toLowerCase()}. Throughout ancient literature and folklore, names with this background were celebrated for their nobility and enduring grace.`
  ];
  etymology = etymologyTemplates[templateIdx];
  
  // B. Pronunciation
  const pronunciation = generatePronunciation(name);
  
  // C. Popularity Trend Section (Constraint 1: Sourced from actual SSA data, expanded to ~80 words, 5 variations)
  let popularityTrend = null;
  if (popularity > 0 && popularity < 1000) {
    const popTemplates = [
      `According to public data from the Social Security Administration (SSA), ${name} ranks at #${popularity} in overall popularity. This position places it in a highly favored tier of baby names, indicating strong contemporary appeal among modern parents. Its presence in public records shows that it remains a stable, attractive choice that successfully bridges historical roots with current styling preferences.`,
      `Verified statistics from public registries like the SSA place ${name} at rank #${popularity}. This shows that the name has established a secure foothold as a trendy yet classic choice, maintaining steady interest over the years. It is particularly popular in families who appreciate names that are recognizable and easy to spell without being overly saturated.`,
      `Registry records from the Social Security Administration highlight ${name} at popularity rank #${popularity}. This rank signifies that while the name is familiar and recognizable, it remains distinct enough to avoid feeling overused. Parents who select this name benefit from a beautiful, time-tested option that carries a sense of individuality.`,
      `Ranking at #${popularity} in recent public birth data, ${name} sits comfortably in a prominent popularity tier. It appeals to parents looking for a name that balances current naming trends with timeless appeal. The name has demonstrated steady staying power, avoiding the sharp peaks and valleys of short-lived novelty names.`,
      `Public name databases, including the SSA, record ${name} at rank #${popularity}. This active ranking confirms its status as a popular selection, reflecting its enduring charm in modern baby name lists. It represents a highly respected option that continues to attract interest for its combination of phonetic softness and structural strength.`
    ];
    popularityTrend = popTemplates[templateIdx];
  }

  // D. Nicknames & Variants
  const nicknames = generateNicknames(name);
  
  // E. Related Names (3-5 related names linked internally)
  const relatedNames = babyNames
    .filter(n => n.origin === origin && n.gender === gender && n.name !== name)
    .slice(0, 4)
    .map(n => ({ name: n.name, slug: n.slug }));
  
  if (relatedNames.length < 3) {
    const extra = babyNames
      .filter(n => n.origin === origin && n.name !== name && !relatedNames.some(r => r.name === n.name))
      .slice(0, 4 - relatedNames.length)
      .map(n => ({ name: n.name, slug: n.slug }));
    relatedNames.push(...extra);
  }
  
  // F. Sibling suggestions (2-3 matching names, expanded to include pairing description)
  const siblingSuggestions = [];
  const sameOriginNames = babyNames.filter(n => n.origin === origin && n.name !== name);
  const oppositeGender = gender === 'girl' ? 'boy' : (gender === 'boy' ? 'girl' : 'neutral');
  
  // Find opposite gender sibling
  const sib1 = sameOriginNames.find(n => n.gender === oppositeGender);
  if (sib1) siblingSuggestions.push(sib1.name);
  
  // Find same gender sibling
  const sib2 = sameOriginNames.find(n => n.gender === gender && n.name !== name && !siblingSuggestions.includes(n.name));
  if (sib2) siblingSuggestions.push(sib2.name);
  
  // Fill in neutral sibling if needed
  if (siblingSuggestions.length < 2) {
    const sibNeutral = sameOriginNames.find(n => n.gender === 'neutral' && !siblingSuggestions.includes(n.name));
    if (sibNeutral) siblingSuggestions.push(sibNeutral.name);
  }
  // Ultimate fallback if still less than 2
  if (siblingSuggestions.length < 2) {
    const generalSib = babyNames.find(n => n.gender === oppositeGender && n.name !== name && !siblingSuggestions.includes(n.name));
    if (generalSib) siblingSuggestions.push(generalSib.name);
  }
  
  // G. FAQ block (3 Q&As, expanded answers to ~50 words each, 5 rotated structures)
  const faqTemplates = [
    [
      {
        q: `What is the meaning and origin of the name ${name}?`,
        a: `The name ${name} originates from the ${origin} language and means "${meaning}". It has a rich cultural history reflecting qualities of ${meaning.toLowerCase()}. In its country of origin, it was historically given as a meaningful blessing, signifying that the child would embody these attributes throughout their life journey.`
      },
      {
        q: `Is ${name} considered a popular baby name?`,
        a: popularityTrend 
          ? `Yes, ${name} ranks at #${popularity} in public registries, making it a highly recognizable and popular choice for newborns. It sits in a very favorable popularity tier, reflecting its strong contemporary appeal among modern parents looking for a classic option.`
          : `The name ${name} is a unique choice that is less common in mainstream lists, making it excellent for parents seeking something distinct. It allows your child to have a name that stands out with its own individual personality and character.`
      },
      {
        q: `What are some common nicknames for ${name}?`,
        a: nicknames.length > 0 
          ? `Common short forms and nicknames for ${name} include ${nicknames.join(', ')}. These shortened variants offer cute, friendly options for family use while maintaining the beautiful cadence of the full name when the child grows up.`
          : `Because of its beautiful flow, ${name} is typically used in its full form without common short nicknames. This allows the name to preserve its original phonetic structure and classic charm in daily conversation.`
      }
    ],
    [
      {
        q: `What does the name ${name} signify?`,
        a: `${name} is a ${origin}-origin name that signifies "${meaning}". It carries a positive significance tied to its cultural roots. Choosing this name provides a deep, meaningful connection to values of ${meaning.toLowerCase()}, reflecting a heritage of strength and grace.`
      },
      {
        q: `How common is the baby name ${name}?`,
        a: popularityTrend
          ? `In recent baby statistics, ${name} stands at position #${popularity}. This rank shows it is a fashionable name with moderate-to-high appeal, making it a familiar name that remains highly respected in modern nurseries.`
          : `${name} is an uncommon choice, allowing your baby to stand out with a beautiful, meaningful name. It is ideal for families who prefer to avoid highly saturated name lists while keeping a name with deep roots.`
      },
      {
        q: `Can you shorten the name ${name}?`,
        a: nicknames.length > 0
          ? `Yes, parents frequently shorten the name to ${nicknames.join(' or ')}. These variants are warm and affectionate, providing excellent choices for childhood nicknames that fit naturally with the name's linguistic style.`
          : `${name} is short and sweet, and is usually kept in its original form without additional variants. It has a crisp pronunciation that needs no shortening to feel approachable.`
      }
    ],
    [
      {
        q: `Where does the name ${name} come from?`,
        a: `The name ${name} comes from ${origin} roots and carries the traditional definition of "${meaning}". Over centuries, the name has traveled across borders, adapting to different cultures while retaining its deep-seated association with ${meaning.toLowerCase()}.`
      },
      {
        q: `Is ${name} a trendy name this year?`,
        a: popularityTrend
          ? `With a rank of #${popularity} in recent databases, ${name} remains a trendy option that blends modern appeal with class. It has avoided the trap of passing fads, establishing a stable reputation as an elegant selection.`
          : `${name} is a classic name that sidesteps passing trends, making it a timeless choice. Its lack of sudden spikes in popularity ensures it remains a rare, highly valued name for years to come.`
      },
      {
        q: `What are sibling names that match ${name}?`,
        a: `Sibling names that pair well with ${name} include ${siblingSuggestions.join(', ')}. These names share compatible stylistic rhythms and cultural origins, creating a balanced and harmonious family set that flows naturally together.`
      }
    ],
    [
      {
        q: `What is the significance of the name ${name}?`,
        a: `The name ${name} traditionally represents "${meaning}" and comes from a ${origin} lineage, symbolizing ${meaning.toLowerCase()}. In regional history, naming a child ${name} was believed to invoke these specific attributes, making it a name of good fortune.`
      },
      {
        q: `What popularity tier does ${name} fall into?`,
        a: popularityTrend
          ? `Ranking at #${popularity}, ${name} sits in the mainstream baby names category, indicating that it is highly popular. It is a favored choice that is widely appreciated for its beautiful sound and strong positive meaning.`
          : `${name} falls into a rare, unique popularity tier, giving it a very exclusive feel. It is chosen by parents who prioritize originality and seek a name that is not shared by multiple classmates.`
      },
      {
        q: `How is the name ${name} pronounced?`,
        a: `The name ${name} is phonetically pronounced as "${pronunciation}". It is easy to pronounce across multiple regions while maintaining its elegant, distinct phonetic structure and rhythmic flow.`
      }
    ],
    [
      {
        q: `What does the baby name ${name} mean?`,
        a: `${name} is a beautiful ${origin} name meaning "${meaning}". It has historically been given to represent ${meaning.toLowerCase()}, reflecting a timeless heritage. The name is celebrated in regional records for its positive, uplifting connotations.`
      },
      {
        q: `Is ${name} a standard baby name?`,
        a: popularityTrend
          ? `Yes, ${name} is a well-established name ranking at #${popularity} in official registries. It is widely recognized and accepted, offering a reliable, classic choice that feels both familiar and elegant.`
          : `No, ${name} is a rare name that offers a unique choice for parents. It has a beautiful, non-standard style that makes it perfect for families seeking an original title with historic depth.`
      },
      {
        q: `What are good sibling options for ${name}?`,
        a: `Excellent sibling pairings for ${name} include ${siblingSuggestions.join(' and ')}. These sibling names match the origin and stylistic feel of ${name}, ensuring your children's names sound wonderful together as a pair.`
      }
    ]
  ];
  
  const faqs = faqTemplates[templateIdx];

  // H. Cultural & Linguistic Significance Section (~70-80 words, 5 variations)
  let significance = "";
  const significanceTemplates = [
    `Linguistically, the name ${name} carries a pleasant cadence that works well across multiple accents and languages. In literary and cultural history, names of ${origin} origin have been celebrated for their poetic qualities, and ${name} is no exception. Its sound profile makes it easy to remember and highly versatile for a child as they grow into adulthood.`,
    `From a cultural perspective, ${name} stands out due to its balanced combination of strong vowels and soft consonants. This makes the name phonetically appealing and highly memorable. Names from ${origin} roots are historically recognized for their lyrical flow, helping ${name} maintain a high level of appeal in diverse global communities.`,
    `The phonetic structure of ${name} gives it a classic, elegant tone that transcends passing naming trends. In many cultures, choosing a ${origin} name like ${name} represents a desire to maintain a connection to timeless values. It is a name that sounds equally professional and gentle, fitting a wide variety of personal styles.`,
    `A key aspect of ${name} is its cross-cultural versatility, allowing it to adapt beautifully to different linguistic regions. Names sharing a ${origin} lineage are traditionally valued for their deep-seated roots in folklore and literature. As a result, ${name} carries an implicit sense of storytelling and character that parents love.`,
    `Phonetically, ${name} offers a crisp and clear pronunciation profile that is instantly recognizable. This name is frequently celebrated in modern guides for its ability to feel both vintage and contemporary. The long-standing heritage of ${origin} baby names provides ${name} with a solid foundation of trust and respect.`
  ];
  significance = significanceTemplates[templateIdx];

  enrichedData[slug] = {
    etymology,
    pronunciation,
    popularityTrend,
    nicknames,
    relatedNames,
    siblingSuggestions,
    faqs,
    significance
  };
});

// Write to JSON database
const outputPath = path.join(__dirname, '../data/namesEnrichedData.json');
fs.writeFileSync(outputPath, JSON.stringify(enrichedData, null, 2), 'utf8');

console.log(`Successfully generated ${Object.keys(enrichedData).length} enriched name entries at ${outputPath}`);
