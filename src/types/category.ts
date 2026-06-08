export interface Category {
  _id?: string;
  name: string;
  slug?: string;
  image?: string;
  isFeatured: boolean;
  isActive: boolean;

  seo: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
    canonicalUrl?: string;
  };
}