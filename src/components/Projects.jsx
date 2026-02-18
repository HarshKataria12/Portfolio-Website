import { projects } from "../data/portfolio_data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 inline-block relative">
        Featured Projects
        <span className="absolute left-0 -bottom-3 h-1 w-24 rounded bg-gradient-to-r from-sky-400 to-cyan-300" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="relative rounded-xl border border-slate-800 bg-slate-900/40 p-6
                       hover:border-sky-500/60 hover:-translate-y-1 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-cyan-300 transition text-lg"
                  title="View on GitHub"
                >
                  ↗
                </a>
              )}
            </div>

            <p className="mt-3 text-slate-300 leading-relaxed">{p.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-emerald-300 border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
