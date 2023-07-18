import { renderHook } from "@testing-library/react";
import { useBreakPoints, breakpoints } from "@utils/usebreakpoints";

describe("useBreakPoints", () => {
  it("should return breakpoint value 'sm' when window innerwidth is sm", () => {
    window.innerWidth = breakpoints.sm;
    const { result } = renderHook(() => useBreakPoints());
    expect(result.current).toBe("sm");
  });

  it("should return breakpoint value 'md' when window innerwidth is md", () => {
    window.innerWidth = breakpoints.md;
    const { result } = renderHook(() => useBreakPoints());
    expect(result.current).toBe("md");
  });

  it("should return breakpoint value 'lg' when window innerwidth is lg", () => {
    window.innerWidth = breakpoints.lg;
    const { result } = renderHook(() => useBreakPoints());
    expect(result.current).toBe("lg");
  });

  it("should return breakpoint value 'xl' when window innerwidth is xl", () => {
    window.innerWidth = breakpoints.xl;
    const { result } = renderHook(() => useBreakPoints());
    expect(result.current).toBe("xl");
  });
});
