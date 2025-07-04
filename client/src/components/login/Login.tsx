import React, { useState } from "react";
import { useLoginMutation } from "app/store/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE, HOME_ROUTE } from "utils/consts";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login(
        { email, password }
        // обовʼязково для роботи з httpOnly cookie
      ).unwrap();

      // Зберігаємо тільки accessToken (refresh буде в cookie)
      localStorage.setItem("accessToken", user.token);
      alert("You have successfully logged in!");
      navigate(HOME_ROUTE);
    } catch (err: any) {
      setMessage(err?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center text-base-gray-light">
      <div className="max-w-3xl">
        <img src="/assets/Login.jpg" alt="login" />
      </div>
      <div className="p-8 rounded-md w-2/6 text-base-gray-dark">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome</h2>
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
          <div className="mb-10 flex justify-between">
            <div>
              <input type="checkbox" id="remember" name="scales" />
              <label htmlFor="remember" className="ml-3">
                Remember Me
              </label>
            </div>
            <Link to={REGISTRATION_ROUTE}>
              <span>Registration</span>
            </Link>
          </div>
          <button
            type="submit"
            className="bg-base-gray text-base-gray-dark hover:bg-base-blue text-white font-bold py-2 px-4 rounded w-full transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
