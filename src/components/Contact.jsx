import { contact } from "../data/portfolio_data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 inline-block relative">
        Get In Touch
        <span className="absolute left-0 -bottom-3 h-1 w-20 rounded bg-gradient-to-r from-sky-400 to-cyan-300" />
      </h2>

      <div className="max-w-2xl text-center mx-auto">
        <p className="text-slate-300 text-lg">
          Let's connect!
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
  
  {/* Email */}
  <a
    href={`mailto:${contact.email}`}
    className="group relative rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-5
               flex items-center gap-4 transition-all duration-300
               hover:border-sky-500/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(14,165,233,0.25)]"
  >
    <div className="text-2xl transition-transform group-hover:scale-110">📧</div>
    <div>
      <p className="text-sm text-slate-400">Send me an email</p>
      <p className="font-semibold text-white">Email</p>
    </div>
  </a>

  {/* GitHub */}
  <a
    href={contact.github}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-5
               flex items-center gap-4 transition-all duration-300
               hover:border-sky-500/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(14,165,233,0.25)]"
  >
    <div className="text-2xl transition-transform group-hover:scale-110">💻</div>
    <div>
      <p className="text-sm text-slate-400">View my projects</p>
      <p className="font-semibold text-white">GitHub</p>
    </div>
  </a>

  {/* LinkedIn */}
  <a
    href={contact.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-5
               flex items-center gap-4 transition-all duration-300
               hover:border-sky-500/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(14,165,233,0.25)]"
  >
    <div className="text-2xl transition-transform group-hover:scale-110">💼</div>
    <div>
      <p className="text-sm text-slate-400">Let’s connect</p>
      <p className="font-semibold text-white">LinkedIn</p>
    </div>
  </a>

</div>

      </div>
    </section>
  );
}
