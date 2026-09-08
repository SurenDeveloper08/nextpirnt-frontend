export interface ProductReference {
  _id: string;
  name: string;
  slug: string;
}

export interface Product {
  id?: string | number;
  _id?: string;

  name: string;
  slug: string;

  brand?: ProductReference;
  category?: ProductReference;

  type?: string;
  color?: string;

  image?: string;
  images?: string[];

  price?: number;
  description?: string;
  shortDescription?: string;

  features?: string[];

  specs?: {
    [key: string]: string;
  };
}

/*
|--------------------------------------------------------------------------
| Backward compatibility
|--------------------------------------------------------------------------
| Existing components such as ProductListingPage and ProductGrid
| already use ProductCard. Keep this alias so we don't need to
| modify every existing component.
*/
export type ProductCard = Product;