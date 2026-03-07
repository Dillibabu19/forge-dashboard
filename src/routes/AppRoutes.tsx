import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
// import Users from "../pages/Users";
// import Roles from "../pages/Roles";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} /> */}
      </Route>
    </Routes>
  );
}
