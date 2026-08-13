export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Blogify",
      description:
        "Maqolalar va blog postlarini yaratish, tahrirlash hamda ulashish uchun mo'ljallangan qulay platforma.",
      image: "/blogify.png",
      link: "https://blogify-isfandiyorr.netlify.app",
      techs: ["React", "Next.js", "Tailwind"],
    },
    {
      id: 2,
      title: "Unsplash Gallery",
      description:
        "Rasmlarni qidirish, yuklab olish va saqlash imkonini beruvchi interaktiv galereya ilovasi.",
      image: "/unsplash.png",
      link: "https://unsplash-isfandiyor.netlify.app",
      techs: ["JavaScript", "Unsplash API", "CSS"],
    },
    {
      id: 3,
      title: "Finance Tracker",
      description:
        "Daromad va xarajatlarni hisoblab boruvchi, kirim-chiqim statistikalarini ko'rsatuvchi moliya paneli.",
      image: "/trackker.png",
      link: "https://expence-trackker.netlify.app",
      techs: ["React", "Chart.js", "Tailwind"],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16 md:py-28 overflow-hidden">
      <section className="space-y-12 md:space-y-16">
        {/* Sarlavha */}
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Mening{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-600 bg-clip-text text-transparent">
              loyihalarim
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Loyihalar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/80 border border-slate-800/80 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm"
            >
              {/* Orqa fonda hover bo'lganda yonadigan neon glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 transition duration-500 -z-10 blur-xl"></div>

              {/* Rasm va Zoom effekti */}
              <div className="relative h-56 w-full bg-slate-950 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Matn, Badgelar va Havola */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Kichik texnologiya teglar (Badges) */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-purple-300 bg-slate-800/90 border border-slate-700/60 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Netlify Havolasi (Tugma) */}
                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full text-sm font-semibold text-white bg-purple-600/90 hover:bg-purple-600 px-5 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-purple-500/25 active:scale-95"
                  >
                    <span>Netlify'da ko'rish</span>
                    <svg
                      className="w-4 h-4 fill-current transition-transform group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
                      <path d="M5 5h5V3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5h-2v5H5V5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
