import React from "react";
import Image from "next/image";
import LayoutHead from "./layoutHead";
import LayoutFooter from "./layoutFooter";
import Navbar from "./navbar";
export default function Layout({ children }: { children: React.ReactChildren | React.ReactChild }) {
  return (
    <div className="bg-zinc-900 h-screen text-stone-300 ">
      <LayoutHead />
      <div className="flex flex-col mx-auto h-full max-w-screen-lg">
        <Navbar />
        <main className=" h-full">{children}</main>
        <LayoutFooter />
      </div>
    </div>
  );
}
