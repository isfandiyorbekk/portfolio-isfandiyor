"use client";

export default function ContactPage() {
  const contactItems = [
    {
      id: 1,
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "TELEFON",
      value: "+998 (90) 787-66-65",
      link: "tel:+998907876665",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "EMAIL",
      value: "isfandiyorbekmahammadjonov@gmail.com",
      link: "mailto:isfandiyorbekmahammadjonov@gmail.com",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "MANZIL",
      value: "Farg'ona, O'zbekiston",
      link: "#",
    },
  ];
  return (
    <div className="container mx-auto px-6 py-16 md:py-28 overflow-hidden">
      <section className="space-y-12 md:space-y-16 max-w-3xl mx-auto">
        {/* Sarlavha */}
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Men bilan{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-600 bg-clip-text text-transparent">
              Aloqa
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Kontakt kartochkalari */}
        <div className="space-y-5">
          {contactItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group relative block bg-slate-900/80 border border-slate-800/80 p-6 rounded-3xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden"
            >
              {/* Neon Hover Glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 transition duration-500 -z-10 blur-xl"></div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/60 transition duration-300 shrink-0">
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-white mt-1 break-words group-hover:text-purple-300 transition duration-300">
                    {item.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
