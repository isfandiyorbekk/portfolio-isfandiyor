import { NavLink, useNavigate } from "react-router-dom";

const AdminLeft = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900/50 flex flex-col justify-between p-4 min-h-screen shrink-0">
      <div>
        {/* LOGO BO'LIMI */}
        <div className="pb-4 mb-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg shadow-purple-500/20">
            A
          </div>
          <div>
            <h1 className="font-bold text-base text-white leading-none">
              Admin Panel
            </h1>
            <span className="text-[10px] text-slate-500 font-medium">
              Boshqaruv markazi
            </span>
          </div>
        </div>

        {/* MENYULAR RO'YXATI */}
        <nav className="space-y-1.5">
          {/* 1. Barcha Loyihalar */}
          <NavLink
            to="/adminLayout"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? "bg-purple-600/15 text-purple-400 border border-purple-500/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 border border-transparent"
              }`
            }
          >
            <span className="text-sm">📋</span>
            <span>Loyihalar</span>
          </NavLink>

          {/* 2. Loyiha Qo'shish */}
          <NavLink
            to="addProject"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? "bg-purple-600/15 text-purple-400 border border-purple-500/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 border border-transparent"
              }`
            }
          >
            <span className="text-sm">➕</span>
            <span>Loyiha Qo'shish</span>
          </NavLink>
        </nav>
      </div>

      {/* PASTKI QISM (Saytga o'tish va Chiqish) */}
      <div className="pt-4 border-t border-slate-800 space-y-2">
        <NavLink
          to="/"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 transition"
        >
          <span>←</span> Saytga o'tish
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 rounded-xl text-xs font-semibold transition"
        >
          <span>🚪</span> Chiqish
        </button>
      </div>
    </aside>
  );
};

export default AdminLeft;
