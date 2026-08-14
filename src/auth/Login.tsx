import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = usernameRef.current?.value;
    const pass = passwordRef.current?.value;

    if (
      user === import.meta.env.VITE_ADMIN_USERNAME &&
      pass === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      console.log("SUCCESS");

      localStorage.setItem("token", "true");
      navigate("/adminLayout");
    } else {
      console.log("FAILED");
      alert("Login yoki parol xato!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Orqa Fondagi Yog'du */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-600/10 border border-purple-500/30 text-purple-400 mb-4">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8s0 0 0 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white">
            Xush Kelibsiz
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Admin panelga kirish uchun ma'lumotlarni kiriting
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Login
            </label>
            <input
              ref={usernameRef}
              type="text"
              required
              placeholder="Masalan: admin"
              className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition duration-200"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Parol
            </label>
            <input
              ref={passwordRef}
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition duration-300 shadow-lg shadow-purple-600/25 active:scale-[0.99] mt-2"
          >
            Kirish
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
          <Link
            to="/"
            className="text-xs text-slate-400 hover:text-purple-400 transition"
          >
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
