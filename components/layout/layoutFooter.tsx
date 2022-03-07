import Link from "next/link";
import { links } from "../../utils/navConsts";

export default function LayoutFooter() {
  return (
    <footer className="text-center border-t-2 border-stone-300 py-12 mx-4">
      <div className="flex justify-between">
        <span className="flex px-6">
          {links.map((link) => {
            return (
              <div className="px-3" key={`foot-nav-link-${link.name}`}>
                <Link href={link.href}>{link.name}</Link>
              </div>
            );
          })}
        </span>
        <span className="px-6">melansonS</span>
      </div>
    </footer>
  );
}
