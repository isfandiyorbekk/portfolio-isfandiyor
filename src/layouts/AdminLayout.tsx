import { Outlet } from "react-router-dom";
import AdminLeft from "../components/AdminLeft";
import Header from "../components/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <main className="flex">
        <AdminLeft />
        <div className="w-full">
          <Header />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
