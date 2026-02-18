import { useEffect, useMemo, useState } from "react";
import { SECTIONS } from "../data/portfolio_data";

const HEADER_OFFSET = 120; // fixed header height + safety
const BOTTOM_THRESHOLD = 80; // px from bottom to force Contact active

export default function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = useMemo(() => SECTIONS, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // if user is near bottom, force contact
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - BOTTOM_THRESHOLD;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }
      

      const scrollPosition = window.scrollY + HEADER_OFFSET;

      const currentSection = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        return scrollPosition >= top && scrollPosition < bottom;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);


  const scrollToSection = (id, onAfter) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90; // header offset
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    if (typeof onAfter === "function") onAfter();
  };

  return { activeSection, isScrolled, scrollToSection };
}
