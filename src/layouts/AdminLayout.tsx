import { Outlet } from "react-router-dom";
import AdminLeft from "../components/AdminLeft";
import Header from "../components/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex">
      <AdminLeft />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
