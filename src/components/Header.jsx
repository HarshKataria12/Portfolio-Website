import { useMemo, useState } from "react";
import { SECTIONS } from "../data/portfolio_data";

const labelMap = {
  about: "About",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};

export default function Header({ activeSection, isScrolled, scrollToSection }) {
  const [open, setOpen] = useState(false);
  const navItems = useMemo(() => SECTIONS, []);

  const close = () => setOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all",
        "backdrop-blur-xl",
        isScrolled
          ? "bg-slate-950/80 border-b border-slate-800"
          : "bg-slate-950/60 border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <button
          className="font-mono font-bold text-lg sm:text-xl bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
          onClick={() => scrollToSection("about", close)}
        >
          &lt;HK/&gt;
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id, close)}
                className={[
                  "relative font-medium text-sm lg:text-base transition-colors",
                  activeSection === id ? "text-white" : "text-slate-400 hover:text-white",
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

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-800 bg-slate-900/40"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span className={["block h-0.5 w-6 bg-white transition-transform", open ? "translate-y-2 rotate-45" : ""].join(" ")} />
            <span className={["block h-0.5 w-6 bg-white transition-opacity", open ? "opacity-0" : ""].join(" ")} />
            <span className={["block h-0.5 w-6 bg-white transition-transform", open ? "-translate-y-2 -rotate-45" : ""].join(" ")} />
          </div>
        </button>
      </nav>

      <div
        className={[
          "md:hidden fixed top-0 bottom-0 right-0 w-[300px] max-w-[85%] z-50",
          "bg-slate-950/95 backdrop-blur-xl border-l border-slate-800",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="pt-20 px-6 flex flex-col gap-6">
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id, close)}
              className={[
                "text-left text-lg font-medium transition-colors",
                activeSection === id ? "text-white" : "text-slate-300 hover:text-white",
              ].join(" ")}
            >
              {labelMap[id] ?? id}
            </button>
          ))}
        </div>
      </div>

      {open && (
        <button
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={close}
          aria-label="Close menu overlay"
        />
      )}
    </header>
  );
}
