import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <main className="flex-grow">
        <h1>admin</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
