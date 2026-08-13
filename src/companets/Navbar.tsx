import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const isAdminActive = pathname.startsWith("/admin");

  // Class nomlarini qayta-qayta yozmaslik uchun yordamchi funksiya
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `relative px-4 py-2 rounded-xl transition-all duration-300 ${
      isActive
        ? "text-white font-semibold bg-purple-600/20 border border-purple-500/40"
        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
    }`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `px-4 py-2.5 rounded-xl transition duration-200 ${
      isActive
        ? "text-white font-semibold bg-purple-600/30 border border-purple-500/40"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tight text-white hover:opacity-90 transition duration-300"
        >
          Isfandiyor
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            .dev
          </span>
        </Link>

        {/* Desktop Navbar (Map-siz, har bir Link alohida) */}
        <div className="hidden md:flex items-center space-x-3">
          <nav className="flex items-center space-x-1 text-base font-medium">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={getLinkClass("/about")}>
              About
            </Link>
            <Link to="/projects" className={getLinkClass("/projects")}>
              Projects
            </Link>
            <Link to="/contact" className={getLinkClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Admin Panel Tugmasi */}
          <Link
            to="/admin"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
              isAdminActive
                ? "bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/25"
                : "bg-slate-900/90 text-purple-300 border-purple-500/30 hover:border-purple-500/80 hover:bg-purple-600/20 hover:text-white hover:shadow-md hover:shadow-purple-500/10"
            }`}
          >
            <svg
              className="w-4 h-4 fill-current text-purple-400 group-hover:text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8s0 0 0 0z" />
            </svg>
            <span>Admin</span>
          </Link>
        </div>

        {/* Mobile Navbar Menu (Map-siz) */}
        <details className="md:hidden group relative">
          <summary className="list-none p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 cursor-pointer focus:outline-none transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            </svg>
          </summary>

          <div className="absolute right-0 top-14 w-56 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col space-y-1 text-base backdrop-blur-xl z-50">
            <Link to="/" className={getMobileLinkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={getMobileLinkClass("/about")}>
              About
            </Link>
            <Link to="/projects" className={getMobileLinkClass("/projects")}>
              Projects
            </Link>
            <Link to="/contact" className={getMobileLinkClass("/contact")}>
              Contact
            </Link>

            {/* Mobile Admin Link */}
            <div className="pt-2 mt-1 border-t border-slate-800">
              <Link
                to="/admin"
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition duration-200 ${
                  isAdminActive
                    ? "text-white font-semibold bg-purple-600 border border-purple-500"
                    : "text-purple-300 bg-purple-950/40 border border-purple-500/30 hover:bg-purple-600/30 hover:text-white"
                }`}
              >
                <svg
                  className="w-4 h-4 fill-current text-purple-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8s0 0 0 0z" />
                </svg>
                <span>Admin Panel</span>
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
};

export default Navbar;
