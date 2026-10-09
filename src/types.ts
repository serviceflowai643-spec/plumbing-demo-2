export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image?: string;
  iconName: string;
  features: string[];
  commonIssues: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  theme: string;
  summary: string;
}

export interface AreaItem {
  name: string;
  postcodes: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  postcode: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
  consent: boolean;
}
