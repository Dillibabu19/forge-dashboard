import { useState } from "react";
import { signup } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password);
      alert("Signup successful. Please verify your email.");
      navigate("/login");
    } catch (err: any) {
      alert(err.response?.data?.detail || "Signup failed");
    }
  };

  return (
    // <div>
    //   <h2>Signup</h2>
    //   <form onSubmit={handleSignup}>
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
    //     <button type="submit">Signup</button>
    //   </form>
    // </div>
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-primary to-soft">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="bg-primary text-white p-3 rounded-md hover:bg-secondary transition font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
