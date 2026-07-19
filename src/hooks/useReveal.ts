import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    const sweep = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 80 && rect.bottom > -80) {
          el.classList.add("in-view");
        }
      });
    };
    const fallback = window.setTimeout(sweep, 400);
    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("hashchange", sweep);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("hashchange", sweep);
    };
  }, []);
}