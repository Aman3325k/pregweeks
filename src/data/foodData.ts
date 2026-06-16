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



  {
    slug: 'pre-packaged-salad',
    name: 'Pre-packaged Bagged Salads',
    category: 'Fruits & Vegetables',
    status: 'moderate',
    explanation: 'Bagged salads have been linked to multiple Listeria and E. coli recalls. The moisture in the bag can accelerate bacterial growth.',
    alternatives: 'Whole heads of lettuce that you wash and chop yourself.',
    tip: 'If using bagged salad, wash it thoroughly under running water before eating, even if labeled triple-washed.'
  },
  {
    slug: 'papaya-unripe',
    name: 'Unripe Green Papaya',
    category: 'Fruits & Vegetables',
    status: 'avoid',
    explanation: 'Unripe papaya contains a high concentration of latex and papain, which can act as a prostaglandin and oxytocin, triggering uterine contractions.',
    alternatives: 'Fully ripe yellow papaya, which contains very little latex.',
    tip: 'Avoid green papaya salads (like Som Tum) commonly served in Thai cuisine.'
  },
  {
    slug: 'papaya-ripe',
    name: 'Ripe Papaya',
    category: 'Fruits & Vegetables',
    status: 'safe',
    explanation: 'Ripe papaya (yellow skin) is rich in vitamins A, C, and folate, and is low in latex, making it safe.',
    alternatives: 'None needed.',
    tip: 'Ensure the papaya is completely soft and yellow before consuming.'
  },
  {
    slug: 'pineapple',
    name: 'Pineapple',
    category: 'Fruits & Vegetables',
    status: 'safe',
    explanation: 'Contains bromelain, which can break down proteins. In massive quantities, it might affect the cervix, but normal culinary portions are safe and nutritious.',
    alternatives: 'None needed.',
    tip: 'Enjoy fresh pineapple in moderation; it is a great source of vitamin C.'
  },
  {
    slug: 'watermelon-precut',
    name: 'Pre-Cut Watermelon',
    category: 'Fruits & Vegetables',
    status: 'moderate',
    explanation: 'Pre-cut melons from supermarkets have a higher risk of Listeria contamination from the rind being sliced through.',
    alternatives: 'Whole watermelon that you wash and cut at home.',
    tip: 'Always wash the outside of a melon before cutting it to prevent transferring bacteria from the rind to the flesh.'
  },
  {
    slug: 'watermelon-whole',
    name: 'Whole Watermelon',
    category: 'Fruits & Vegetables',
    status: 'safe',
    explanation: 'Whole watermelon is highly hydrating, rich in vitamins A and C, and safe if the rind is washed before slicing.',
    alternatives: 'None needed.',
    tip: 'Scrub the rind with a vegetable brush under water before slicing.'
  },
  {
    slug: 'raw-sprouts-cooked',
    name: 'Cooked Sprouts',
    category: 'Fruits & Vegetables',
    status: 'safe',
    explanation: 'Cooking sprouts thoroughly destroys E. coli and Salmonella, rendering them safe.',
    alternatives: 'None needed.',
    tip: 'Ensure sprouts are hot and cooked all the way through; do not eat them raw or lightly steamed.'
  },

  // SWEETS & OTHERS (96-101)
  {
    slug: 'honey-raw',
    name: 'Raw Honey',
    category: 'Sweets & Others',
    status: 'safe',
    explanation: 'Raw honey can contain botulism spores. While dangerous to infants under 1 year, the adult digestive system easily destroys them, making it safe for pregnant women.',
    alternatives: 'Pasteurized commercial honey.',
    tip: 'Though safe for you, avoid giving raw honey to your baby after birth.'
  },
  {
    slug: 'honey-pasteurized',
    name: 'Pasteurized Honey',
    category: 'Sweets & Others',
    status: 'safe',
    explanation: 'Pasteurized honey is processed to destroy yeasts and bacterial spores, offering a safe sweetener option.',
    alternatives: 'Maple syrup.',
    tip: 'A great natural sweetener to soothe pregnancy sore throats.'
  },
  {
    slug: 'chocolate',
    name: 'Chocolate',
    category: 'Sweets & Others',
    status: 'moderate',
    explanation: 'Chocolate contains small amounts of caffeine. A dark chocolate bar can contain 20-50 mg of caffeine. Consume in moderation.',
    alternatives: 'Carob or white chocolate (caffeine-free).',
    tip: 'Keep track of chocolate caffeine if you also drink coffee or tea.'
  },
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
