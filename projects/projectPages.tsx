import { PageName, IProject } from "./projectTypes";

export const projectPageNames: PageName[] = ["typing", "calendar", "boulette"];

export const projectPages: { [x: string]: IProject } = {
  typing: { name: "typing", description: "Lorain Jipsum intubate" },
  calendar: { name: "calendar", description: "Lorain Jipsum intubate" },
  boulette: { name: "boulette", description: "Lorain Jipsum intubate" },
};
