import Image from "next/image";

export default function LayoutFooter() {
  return (
    <footer className="text-center border-t-2 border-stone-300 py-12 mx-4">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-between">
          <span className="px-6">melansonS</span>
          <span className="px-6">
            Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </div>
      </a>
    </footer>
  );
}
