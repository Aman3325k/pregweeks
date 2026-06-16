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

export const foodItems: FoodItem[] = [];
