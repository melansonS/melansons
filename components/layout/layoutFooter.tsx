import Link from "next/link";
import { links } from "../../utils/navConsts";
import Socials from "../socials";

interface IFooterProps {
  bareBones: boolean;
}

export default function LayoutFooter({ bareBones }: IFooterProps) {
  return (
    <footer className="border-t-2 border-zinc-900 dark:border-stone-300 pt-6 pb-10 mx-4">
      <div className="flex justify-between">
        <span className="flex px-6 flex-col sm:flex-row">
          {!bareBones &&
            links.map((link) => {
              return (
                <div
                  className="h-fit self-end w-full text-left sm:px-3 sm:text-center hover:underline p-2"
                  key={`foot-nav-link-${link.name}`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </div>
              );
            })}
        </span>
        <div className="px-6">
          <h4 className="text-xl pl-2 pb-2">melanson[s]</h4>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
