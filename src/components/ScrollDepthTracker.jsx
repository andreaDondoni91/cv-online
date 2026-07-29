import { useEffect } from "react";
import { track } from "../lib/track";

const THRESHOLDS = [25, 50, 75, 100];

export default function ScrollDepthTracker() {
  useEffect(() => {
    const fired = new Set();
    let ticking = false;

    const check = () => {
      ticking = false;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 100;

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          track("scroll_depth", { percent: threshold });
        }
      }
      if (fired.size === THRESHOLDS.length) {
        window.removeEventListener("scroll", onScroll);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(check);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    check();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
