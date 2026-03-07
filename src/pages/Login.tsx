import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log("Access Token:", data.access_token);

      // store access token temporarily (we improve later)
      localStorage.setItem("access_token", data.access_token);

      navigate("/dashboard");
    } catch (err: any) {
      alert(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <br />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <br />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>

    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-primary to-soft">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-primary text-white p-3 rounded-md hover:bg-secondary transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
