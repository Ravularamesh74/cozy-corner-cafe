export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isVeg?: boolean;
  isBestseller?: boolean;
};

export type CartItem = MenuItem & {
  quantity: number;
};

export const categories = [
  "All",
  "Bestsellers",
  "Starters",
  "Burgers",
  "Pasta",
  "Sandwiches",
  "Beverages",
  "Shakes",
] as const;

export type Category = (typeof categories)[number];
