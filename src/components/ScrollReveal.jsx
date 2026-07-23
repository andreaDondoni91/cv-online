import { useEffect } from "react";

// Adds the "in" class to every .fade-up element as it scrolls into view.
export default function ScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
