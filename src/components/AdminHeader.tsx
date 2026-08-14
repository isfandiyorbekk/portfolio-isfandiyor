const Header = () => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/40 px-6 flex items-center justify-between shrink-0">
      {/* 1. CHAP TARAF: Sahifa nomi / Status */}
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-semibold text-slate-200">
          Loyihalar Boshqaruvi
        </h2>
        <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
          ● Live
        </span>
      </div>

      {/* 2. O'NG TARAF: Foydalanuvchi profili */}
      <div className="flex items-center gap-4">
        {/* Foydalanuvchi haqida ma'lumot */}
        <div className="flex items-center gap-2.5 pl-3 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-purple-500/20">
            IM
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-slate-200 leading-none">
              Isfandiyor
            </p>
            <p className="text-[10px] text-slate-500 font-medium mt-0.5">
              Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
