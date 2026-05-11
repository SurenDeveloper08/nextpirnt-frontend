export interface Product {
  id: number;
  name: string;
  slug: string;
  brand: string;
  category: string;
  type: string;
  color: string;
  image: string;
  price: number;
  featured?: boolean;
}