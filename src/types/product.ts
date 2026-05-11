export interface Product {
  id: number;
  name: string;
  slug: string;
  brand: string;
  category: string;
  type: string;
  color: string;

  image: string;
  images: string[];

  price: number;
  description: string;

  features: string[];

  specs: {
    [key: string]: string;
  };
}