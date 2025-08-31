export interface Coach {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  experience: string;
  bio: string;
  image: string;
  rating: number;
  certifications: string[];
  achievements: string[];
  availability: {
    days: string[];
    times: string[];
  };
  contact: {
    email?: string;
    phone?: string;
  };
}

export interface CoachCardProps {
  coach: Coach;
  featured?: boolean;
}
