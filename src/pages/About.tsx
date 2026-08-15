export default function AboutPage() {
  const techStack = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];
  return (
    <div className="container mx-auto px-6 py-16 md:py-28 overflow-hidden">
      <section className="space-y-12 md:space-y-16">
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Men{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-600 bg-clip-text text-transparent">
              haqimda
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mx-auto md:mx-0"></div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 flex justify-center md:justify-start w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <div className="relative w-[280px] h-[340px] sm:w-[360px] sm:h-[440px] rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-700/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                  alt="Isfandiyor - About image"
                  sizes="(max-width: 768px) 280px, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6 text-slate-300 text-lg sm:text-xl leading-relaxed font-light">
            <p>
              Salom! Mening ismim{" "}
              <span className="text-white font-semibold">Isfandiyor</span>. Men
              zamonaviy veb-texnologiyalarga va dasturlashga juda qiziqaman.
            </p>

            <p>
              Asosiy yo'nalishim{" "}
              <span className="text-purple-400 font-semibold">
                Frontend Software Development
              </span>{" "}
              bo'lib, murakkab va foydalanuvchilar uchun qulay bo'lgan
              interfeyslarni yaratish ustida ishlayman.
            </p>

            {/* Texnologiyalar Badgelari */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
                Ishlatadigan texnologiyalarim:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-mono text-purple-300 bg-slate-800/80 border border-slate-700/60 rounded-xl shadow-sm backdrop-blur-sm hover:border-purple-500/60 hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="pt-2 text-base md:text-lg text-slate-400 italic border-l-2 border-purple-500/60 pl-4">
              "Maqsadim — doimiy ravishda o'z bilimlarimni oshirib borish hamda
              real loyihalarda sifatli va toza kod yozish."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
