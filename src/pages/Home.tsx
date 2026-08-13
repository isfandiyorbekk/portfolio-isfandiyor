import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-28 overflow-hidden">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Chap taraf: Matnlar va Animatsiyalar */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-sm md:text-base font-mono shadow-md backdrop-blur-sm animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
            <span>Frontend Software Developer</span>
          </div>

          {/* Asosiy Sarlavha */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
            Salom, Men <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-600 bg-clip-text text-transparent">
              Isfandiyor
            </span>
          </h1>

          {/* Tavsif */}
          <p className="text-slate-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
            Zamonaviy va qulay veb-ilovalarni yarataman.{" "}
            <strong className="text-white font-medium">React</strong> hamda{" "}
            <strong className="text-white font-medium">
              JavaScript/TypeScript
            </strong>{" "}
            texnologiyalari yordamida sifatli platformalar va servislar ishlab
            chiqaman.
          </p>

          {/* Tugmalar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Link
              to="/projects"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 text-center text-lg"
            >
              Loyihalarim
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-slate-100 border border-slate-700/80 font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 text-center text-lg backdrop-blur-sm"
            >
              Bog'lanish
            </Link>
          </div>
        </div>

        {/* O'ng taraf: Hero Rasm + Animatsiyali Glow Harakatlari */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Orqa fondagi harakatlanuvchi yog'du */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

            {/* Rasm konteyneri */}
            <div className="relative w-[280px] h-[340px] sm:w-[360px] sm:h-[440px] rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-700/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt="Isfandiyor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
