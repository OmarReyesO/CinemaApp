export interface FoodSize {
  price: number;
  size: string;
}

export interface Food {
  id: string;
  picture: string;
  name: string;
  category: string;
  description: string;
  sizes: FoodSize[];
}
