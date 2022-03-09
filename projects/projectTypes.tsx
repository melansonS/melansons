export type PageName = "typing" | "calendar" | "boulette";

export interface IProject {
  name: string;
  description: string;
}

export interface IProjectProps {
  project: IProject;
}
