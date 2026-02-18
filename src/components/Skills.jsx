import { skills } from "../data/portfolio_data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 inline-block relative">
        Technical Skills
        <span className="absolute left-0 -bottom-3 h-1 w-24 rounded bg-gradient-to-r from-sky-400 to-cyan-300" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {skills.map((group, idx) => (
          <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-sky-500/60 transition">
            <h3 className="text-sky-400 font-semibold text-lg mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="text-sm text-slate-100 border border-sky-500/20 bg-sky-500/10
                             px-3 py-1 rounded-lg hover:bg-sky-500/20 hover:border-sky-500/50 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
