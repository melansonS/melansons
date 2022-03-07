type Breakpoint = "sm" | "md" | "lg" | "xl";
export const breakpoints: { [key in Breakpoint]: number } = {
  sm: 640,
  // => @media (min-width: 640px) { ... }

  md: 768,
  // => @media (min-width: 768px) { ... }

  lg: 1024,
  // => @media (min-width: 1024px) { ... }

  xl: 1280,
  // => @media (min-width: 1280px) { ... }
};

import { useState, useEffect } from "react";

function useBreakPoints() {
  const { xl, lg, md, sm } = breakpoints;

  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm");

  function handleResize() {
    const width = window.innerWidth;
    let bp: Breakpoint = "sm";
    if (width >= xl) {
      bp = "xl";
    } else if (width >= lg) {
      bp = "lg";
    } else if (width >= md) {
      bp = "md";
    }
    setBreakpoint(bp);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

export default useBreakPoints;
