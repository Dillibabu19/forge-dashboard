// import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem("access_token");
  //   navigate("/login");
  // };

  return (
    // <div>
    //   <h2>Dashboard</h2>
    //   <p>You are logged in.</p>
    //   <button onClick={handleLogout}>Logout</button>
    // </div>
    // <div>
    //   <div className="flex">
    //     <Sidebar />

    //     <div className="flex-1 p-8 bg-soft min-h-screen">
    //       <Outlet />
    //     </div>
    //     <div className="min-h-screen bg-soft flex flex-col items-center justify-center">
    //       <div className="bg-white shadow-lg rounded-xl p-10 w-96 text-center">
    //         <h2 className="text-2xl font-bold text-primary mb-4">Dashboard</h2>

    //         <p className="text-gray-600 mb-6">You are logged in.</p>

    //         <button
    //           onClick={handleLogout}
    //           className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition font-semibold"
    //         >
    //           Logout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-xl">
      <h2 className="text-2xl font-bold text-primary mb-4">Dashboard</h2>

      <p className="text-gray-600">You are logged in.</p>
    </div>
  );
}
