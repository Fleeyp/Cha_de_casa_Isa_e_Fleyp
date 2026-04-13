export interface PurchaseLink {
  store: string;
  url: string;
}

export interface Gift {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  purchased: boolean;
  links: PurchaseLink[];
}

export type StatusFilter = 'all' | 'available' | 'reserved';

export interface PriceRange {
  label: string;
  min: number | null;
  max: number | null;
}
