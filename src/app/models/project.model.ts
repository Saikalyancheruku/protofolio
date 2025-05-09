export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  categories: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}