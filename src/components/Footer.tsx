export default function Footer() {
  return (
    <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-800/80 py-8 mt-auto">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        {/* Mualliflik huquqi */}
        <p className="font-light text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Isfandiyor</span>. Barcha
          huquqlar himoyalangan.
        </p>

        {/* GitHub Havolasi */}
        <a
          href="https://github.com/isfandiyorbekmahammadjonov-a11y"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
        >
          {/* GitHub SVG Ikonkasi */}
          <svg
            className="w-5 h-5 fill-current group-hover:text-purple-400 transition duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="font-mono text-xs font-semibold">
            GitHub Profile
          </span>
        </a>
      </div>
    </footer>
  );
}
