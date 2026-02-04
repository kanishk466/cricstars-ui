export interface Academy {
  id: string;
  name: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  programs: {
    name: string;
    level: string;
    description: string;
  }[];
  achievements: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface Coach {
  id: string;
  name: string;
  experience: string;
  specialization: string;
  shortBio: string;
  fullBio: string;
  achievements: string[];
  contact: {
    phone: string;
    email: string;
  };
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  organizer: {
    name: string;
    contact: string;
  };
  format: string;
  registrationDeadline: string;
}
