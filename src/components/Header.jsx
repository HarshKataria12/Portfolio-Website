import { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SECTIONS } from "../data/portfolio_data";

const labelMap = {
  about: "About",
  education: "Education",
  experience: "Experience",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};

export default function Header({ activeSection, isScrolled, scrollToSection }) {
  const [open, setOpen] = useState(false);
  const navItems = useMemo(() => SECTIONS, []);

  const close = () => setOpen(false);

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-[100] transition-all backdrop-blur-xl",
          isScrolled
            ? "bg-slate-950/80 border-b border-slate-800"
            : "bg-slate-950/60 border-b border-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            className="font-mono font-bold text-lg sm:text-xl bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
            onClick={() => scrollToSection("about", close)}
          >
            &lt;HK/&gt;
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id, close)}
                  className={[
                    "relative font-medium text-sm lg:text-base transition-colors",
                    activeSection === id
                      ? "text-white"
                      : "text-slate-400 hover:text-white",
                  ].join(" ")}
                >
                  {labelMap[id] ?? id}
                  <span
                    className={[
                      "absolute left-0 -bottom-2 h-0.5 w-full bg-gradient-to-r from-sky-400 to-cyan-300 transition-transform origin-left",
                      activeSection === id ? "scale-x-100" : "scale-x-0",
                    ].join(" ")}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-800 bg-slate-900/60 backdrop-blur"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={[
                  "block h-0.5 w-6 bg-white transition-transform",
                  open ? "translate-y-2 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-0.5 w-6 bg-white transition-opacity",
                  open ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-0.5 w-6 bg-white transition-transform",
                  open ? "-translate-y-2 -rotate-45" : "",
                ].join(" ")}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Portal: overlay + drawer rendered into document.body,
          outside the header's stacking context */}
      {createPortal(
        <>
          {/* GLASS OVERLAY */}
          <div
            onClick={close}
            aria-label="Close menu overlay"
            className={[
              "md:hidden fixed inset-0 z-[110]",
              "bg-slate-950/60 backdrop-blur-xl backdrop-saturate-150",
              "transition-opacity duration-300",
              open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            ].join(" ")}
          />

          {/* GLASS SIDE DRAWER */}
          <div
            className={[
              "md:hidden fixed top-0 bottom-0 right-0 z-[120]",
              "w-[280px] sm:w-[320px] max-w-[85%]",
              "bg-gradient-to-b from-slate-900/70 to-slate-950/80 backdrop-blur-2xl backdrop-saturate-150",
              "border-l border-white/10 shadow-2xl",
              "transition-transform duration-300",
              open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none",
            ].join(" ")}
          >
            <div className="pt-20 px-6 flex flex-col gap-4">
              {navItems.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id, close)}
                  className={[
                    "text-left text-lg font-medium px-4 py-3 rounded-xl transition",
                    "bg-white/5 backdrop-blur-md border border-white/10",
                    activeSection === id
                      ? "text-white bg-white/15 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                      : "text-slate-300 hover:text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {labelMap[id] ?? id}
                </button>
              ))}
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}