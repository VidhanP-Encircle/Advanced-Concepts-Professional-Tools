import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/products");
  };

  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="rounded-xl p-8 w-96">
        <h2 className="text-3xl font-bold text-center mb-6">
          Fake Authentication
        </h2>

        <button
          onClick={login}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <button
          onClick={logout}
          className="w-full bg-red-500 text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Login;
