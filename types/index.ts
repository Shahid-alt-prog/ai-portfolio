export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
}

export interface Experience {
  company: string;
  client: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface Strength {
  title: string;
  description: string;
}
