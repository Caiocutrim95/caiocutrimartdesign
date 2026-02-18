
export interface PackageItem {
  id: string;
  title: string;
  entryPrice: number;
  monthlyPrice?: number;
  features: string[];
  ctaText: string;
  waMessage: string;
  type: 'professional' | 'ai' | 'graphics';
}

export interface NicheItem {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  icon: string;
}

export type ViewState = 'home' | 'niches';
