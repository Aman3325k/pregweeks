// src/data/affiliateData.ts

export interface AffiliateProduct {
  week: number;
  productName: string;
  description: string;
  amazonLink: string;
  imageUrl: string;
  category: string;
  priceEstimate: string;
}

export const affiliateProducts: Record<number, AffiliateProduct> = {
  15: {
    week: 15,
    productName: "Pharmedoc U-Shape Pregnancy Pillow",
    description: "Supports your back, hips, knees, and belly to relieve pregnancy discomfort and prevent sleeping on your back.",
    amazonLink: "https://www.amazon.com/dp/B07GFW7QCM?tag=pregweeks-20",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/718y6K9-7FL._AC_SL1500_.jpg",
    category: "Maternity Comfort",
    priceEstimate: "$39.99"
  },
  20: {
    week: 20,
    productName: "Burt's Bees Mama Bee Belly Butter",
    description: "An extra-rich, fragrance-free cocoa butter cream formulated to keep stretching skin soft, hydrated, and elastic.",
    amazonLink: "https://www.amazon.com/dp/B004DMISD6?tag=pregweeks-20",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/7123qK4uYwL._AC_SL1500_.jpg",
    category: "Skin & Stretch Marks Care",
    priceEstimate: "$12.99"
  },
  32: {
    week: 32,
    productName: "Maternity Hospital Bag Weekender",
    description: "A large, water-resistant canvas duffel bag featuring multiple compartments and a separate shoe section, perfect for labor and delivery.",
    amazonLink: "https://www.amazon.com/dp/B08P1XW8GG?tag=pregweeks-20",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81xU9d4o5QL._AC_SL1500_.jpg",
    category: "Labor & Delivery Prep",
    priceEstimate: "$29.99"
  },
  35: {
    week: 35,
    productName: "Graco SnugRide 35 Lite Infant Car Seat",
    description: "An ultra-lightweight infant car seat featuring secure installation, energy-absorbing foam, and an adjustable canopy.",
    amazonLink: "https://www.amazon.com/dp/B083ZCR63P?tag=pregweeks-20",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71gGq6Q-QhL._AC_SL1500_.jpg",
    category: "Newborn Essentials",
    priceEstimate: "$119.99"
  }
};
