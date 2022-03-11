interface ILink {
  name: string;
  href: string;
}

export const links: ILink[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "portfolio",
    href: "/portfolio",
  },
];

export const projectLinks: ILink[] = [
  {
    name: "typing",
    href: "/typing",
  },
  {
    name: "calendar",
    href: "/calendar",
  },
  {
    name: "boulette",
    href: "/boulette",
  },
  {
    name: "grouped",
    href: "/grouped",
  },
];

export const MENU_TRANSITION_DURATION = 0.3;
