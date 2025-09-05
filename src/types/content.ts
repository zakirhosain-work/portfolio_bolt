export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  stats: {
    experience: string;
    students: string;
    successRate: string;
  };
}

export interface AboutContent {
  title: string;
  subtitle: string;
  description: string[];
  qualifications: string[];
  experience: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'academic' | 'teaching';
}

export interface Service {
  name: string;
  topics: string[];
  price: string;
  discount: string;
  color: 'blue' | 'emerald' | 'orange' | 'purple';
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  subject: string;
  content: string;
  rating: number;
  image: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
  officeHours: string;
}

export interface RatingInfo {
  averageRating: number;
  totalReviews: number;
  showRatingSection: boolean;
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  skills: Skill[];
  services: Service[];
  portfolio: Project[];
  testimonials: Testimonial[];
  contact: ContactInfo;
  rating: RatingInfo;
}