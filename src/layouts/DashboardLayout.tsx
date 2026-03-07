// import Sidebar from "../components/Sidebar";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="p-8 bg-soft min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
