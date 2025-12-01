export interface MenuItem {
  id: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}
