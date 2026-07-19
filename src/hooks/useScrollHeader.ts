import { useEffect, useRef } from "react";

export function useScrollHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const ornamentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      headerRef.current.classList.toggle("shadow-elegant", window.scrollY > 20);
      headerRef.current.classList.toggle("bg-ivory/90", window.scrollY > 20);
      if (ornamentRef.current && window.scrollY < 800) {
        const y = window.scrollY * 0.08;
        const r = window.scrollY * 0.02;
        ornamentRef.current.style.transform = `translate3d(${y}px, ${-y}px, 0) rotate(${r}deg)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { headerRef, ornamentRef };
}