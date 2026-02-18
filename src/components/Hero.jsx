export default function Hero({ scrollToSection }) {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16">
        <p className="font-mono text-sky-400 text-sm mb-4">&lt;Developer based in Berlin /&gt;</p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Harsh Kataria
          </span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl">
          Software Engineer building full-stack applications and AI-driven solutions
        </p>

        <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
          Computer Science student in Germany with hands-on experience in full-stack development and machine learning.
          I turn ideas into production-ready software, from backend APIs to React apps and ML systems.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white
                       bg-gradient-to-r from-sky-500 to-cyan-400 hover:opacity-95 transition"
          >
            Get In Touch
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white
                       border border-slate-800 bg-slate-900/30 hover:border-sky-500/60 transition"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
