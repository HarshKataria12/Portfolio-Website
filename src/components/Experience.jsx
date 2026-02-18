import { experience } from "../data/portfolio_data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 inline-block relative">
        Experience
        <span className="absolute left-0 -bottom-3 h-1 w-14 rounded bg-gradient-to-r from-sky-400 to-cyan-300" />
      </h2>

      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 hover:border-sky-500/60 transition">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <p className="text-sky-400 font-semibold">{experience.company}</p>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">{experience.title}</h3>
          </div>

          <div className="text-slate-400 font-mono text-sm flex flex-col sm:items-end gap-1">
            <span>📍 {experience.location}</span>
            <span>📅 {experience.period}</span>
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {experience.achievements.map((a, i) => (
            <li key={i} className="text-slate-300 leading-relaxed flex gap-3">
              <span className="text-sky-400">▹</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
