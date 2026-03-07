import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen shadow-md p-6">
      <h1 className="text-xl font-bold text-primary mb-8">Forge Dashboard</h1>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:text-primary">
          Dashboard
        </Link>

        <Link to="/users" className="hover:text-primary">
          Users
        </Link>

        <Link to="/roles" className="hover:text-primary">
          Roles
        </Link>

        <Link to="/permissions" className="hover:text-primary">
          Permissions
        </Link>
      </nav>
    </div>
  );
}
