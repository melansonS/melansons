import Link from "next/link";
import { links } from "../../utils/navConsts";
import Socials from "../socials";

export default function LayoutFooter() {
  return (
    <footer className="border-t-2 border-zinc-900 dark:border-stone-300 pt-6 pb-12 mx-4">
      <div className="flex justify-between">
        <span className="flex px-6 flex-col sm:flex-row">
          {links.map((link) => {
            return (
              <div
                className="h-fit self-end w-full text-left sm:px-3 sm:text-center hover:underline"
                key={`foot-nav-link-${link.name}`}
              >
                <Link href={link.href}>{link.name}</Link>
              </div>
            );
          })}
        </span>
        <div className="px-6">
          <p className="text-xl">melanson[s]</p>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
