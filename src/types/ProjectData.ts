import type { Skill } from '../skillList';

export interface ProjectData {
  position: number;
  title: string;
  description: string;
  githubLink: string;
  date: string;
  skills: Skill[];
}
