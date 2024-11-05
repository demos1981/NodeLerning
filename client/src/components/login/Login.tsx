import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { RootState } from "../../app/store";
import { login } from "../../features/auth/authSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { message, loading } = useAppSelector((state: RootState) => state.auth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className=" min-h-screen flex items-center justify-center max-w-md bg-base-gray text-base-gray-light ">
      <div className=" p-8 rounded-md shadow-md  max-w-md bg-base-gray-dark text-base-gray-light">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-base-gray text-base-gray-dark hover:bg-base-blue text-white font-bold py-2 px-4 rounded w-full transition duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
