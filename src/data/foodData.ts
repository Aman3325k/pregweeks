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
    slug: 'prosciutto',
    name: 'Prosciutto',
    category: 'Meats & Poultry',
    status: 'avoid',
    explanation: 'Prosciutto is raw cured ham. It poses risks of Listeria and Toxoplasmosis infections.',
    alternatives: 'Baked ham or cooked bacon.',
    tip: 'Safe to eat if baked into hot dishes like paninis or pasta.'
  },
  {
    slug: 'bacon-well-done',
    name: 'Well-Done Bacon',
    category: 'Meats & Poultry',
    status: 'safe',
    explanation: 'Cooking bacon until crispy kills any bacteria and parasites, making it safe for consumption.',
    alternatives: 'None needed.',
    tip: 'Ensure bacon is not rubbery or partially undercooked.'
  },
  {
    slug: 'sausage-raw',
    name: 'Raw Sausage Link',
    category: 'Meats & Poultry',
    status: 'avoid',
    explanation: 'Raw sausage contains ground meat that can contain E. coli, Salmonella, and Toxoplasma gondii.',
    alternatives: 'Fully cooked sausage.',
    tip: 'Never eat sausage unless cooked to an internal temperature of 160°F.'
  },
  {
    slug: 'sausage-cooked',
    name: 'Cooked Sausage',
    category: 'Meats & Poultry',
    status: 'safe',
    explanation: 'Sausage cooked until brown and firm in the center is safe to eat.',
    alternatives: 'None needed.',
    tip: 'Verify cooking by slicing the sausage in half to confirm no pink spots remain.'
  },
  {
    slug: 'pork-raw',
    name: 'Raw Pork',
    category: 'Meats & Poultry',
    status: 'avoid',
    explanation: 'Raw pork contains parasites like Trichinella spiralis and pathogens that cause severe foodborne infections.',
    alternatives: 'Fully cooked pork.',
    tip: 'Clean all kitchen surfaces after preparing raw pork.'
  },
  {
    slug: 'turkey-well-done',
    name: 'Well-Done Turkey',
    category: 'Meats & Poultry',
    status: 'safe',
    explanation: 'Cooked whole turkey is safe and a great lean protein choice, provided it reaches 165°F.',
    alternatives: 'None needed.',
    tip: 'Avoid eating leftovers that have sat in the fridge for more than 2-3 days.'
  },
  {
    slug: 'liver',
    name: 'Animal Liver (Beef / Chicken)',
    category: 'Meats & Poultry',
    status: 'moderate',
    explanation: 'Liver contains extremely high levels of preformed Vitamin A (retinol). High doses of retinol are linked to congenital anomalies and liver toxicity in babies.',
    alternatives: 'Lean meats, beans, or spinach for iron.',
    tip: 'Limit consumption to small portions (1-2 oz) no more than once a week, or avoid completely.'
  },

  // FRUITS & VEG (86-95)
  {
    slug: 'raw-sprouts',
    name: 'Raw Sprouts (Alfalfa, Clover)',
    category: 'Fruits & Vegetables',
    status: 'avoid',
    explanation: 'Bacteria can get inside sprout seeds through cracks. It is impossible to wash away E. coli and Salmonella from raw sprouts.',
    alternatives: 'Thoroughly cooked sprouts (sauteed in stir-fries).',
    tip: 'Request "no sprouts" when ordering sandwiches or salads at restaurants.'
  },
  {
    slug: 'unwashed-lettuce',
    name: 'Unwashed Lettuce / Greens',
    category: 'Fruits & Vegetables',
    status: 'avoid',
    explanation: 'Unwashed vegetables can carry Toxoplasma gondii from contaminated soil, causing Toxoplasmosis.',
    alternatives: 'Thoroughly washed leafy greens.',
    tip: 'Wash greens under running water even if the bag says "pre-washed."'
  },
  {
    slug: 'washed-lettuce',
    name: 'Washed Lettuce / Salad Greens',
    category: 'Fruits & Vegetables',
    status: 'safe',
    explanation: 'Thoroughly washed greens are a safe, vital source of folate, fiber, and vitamins.',
    alternatives: 'None needed.',
    tip: 'Dry washed greens in a salad spinner to maintain freshness.'
  },
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
