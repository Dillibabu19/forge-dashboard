import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-primary">Forge Dashboard</h1>

      <button
        onClick={handleLogout}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
      >
        Logout
      </button>
    </div>
  );
}
