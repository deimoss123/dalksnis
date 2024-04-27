import { type SkillKey } from '../skillList';

export interface ProjectData {
  position: number;
  title: string;
  description: string;
  githubLink: string;
  date: string;
  skills: SkillKey[];
}
