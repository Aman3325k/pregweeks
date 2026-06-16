// src/data/foodData.ts

export interface FoodItem {
  slug: string;
  name: string;
  category: string;
  status: 'safe' | 'avoid' | 'moderate';
  explanation: string;
  alternatives: string;
  tip: string;
}

export const foodItems: FoodItem[] = [
  // DAIRY & EGGS (1-20)

  // SEAFOOD (21-45)

  // BEVERAGES (46-65)



  // SWEETS & OTHERS (96-101)

  {
    slug: 'peanuts',
    name: 'Peanuts & Peanut Butter',
    category: 'Sweets & Others',
    status: 'safe',
    explanation: 'Unless you have a diagnosed peanut allergy, eating peanuts during pregnancy does not increase and may even decrease baby’s risk of developing peanut allergies.',
    alternatives: 'Almond butter or sunflower seed butter.',
    tip: 'Peanut butter is an excellent source of protein and healthy fats.'
  },
  {
    slug: 'licorice-root',
    name: 'Licorice Root',
    category: 'Sweets & Others',
    status: 'avoid',
    explanation: 'Contains glycyrrhizin, which in large amounts is associated with developmental issues in children and higher risks of preterm labor.',
    alternatives: 'Anise-flavored candies (which do not use real licorice root).',
    tip: 'Avoid herbal teas or supplements containing licorice root.'
  },
  {
    slug: 'artificial-sweeteners',
    name: 'Artificial Sweeteners (Aspartame, Sucralose)',
    category: 'Sweets & Others',
    status: 'safe',
    explanation: 'FDA-approved artificial sweeteners are safe in moderation during pregnancy. Saccharin should be avoided as it crosses the placenta.',
    alternatives: 'Stevia, honey, or maple syrup.',
    tip: 'Limit diet sodas to avoid excess chemical additives.'
  },
  {
    slug: 'mayonnaise-commercial',
    name: 'Commercial Mayonnaise',
    category: 'Sweets & Others',
    status: 'safe',
    explanation: 'Commercially manufactured mayonnaise uses pasteurized eggs, which eliminates Salmonella risk.',
    alternatives: 'None needed.',
    tip: 'Store-bought mayonnaise jars must be kept refrigerated after opening.'
  },
  {
    slug: 'mayonnaise-homemade',
    name: 'Homemade Mayonnaise',
    category: 'Sweets & Others',
    status: 'avoid',
    explanation: 'Traditionally prepared using raw egg yolks, exposing you to Salmonella infection.',
    alternatives: 'Commercial pasteurized mayonnaise.',
    tip: 'Always ask if mayonnaise at restaurants is homemade before consuming.'
  }
];
