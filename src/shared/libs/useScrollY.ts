import { useEffect, useState } from "react";

export const useScrollY = (): number => {
  const isBrowser = typeof window !== undefined;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const currentScroll = isBrowser ? window.scrollY || window.pageYOffset : 0;
      setScrollY(currentScroll);
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return scrollY;
};
