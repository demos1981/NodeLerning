import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_DASHBOARD_ROUTE } from "utils/consts";
import { USER_LOGIN, USER_PASSWORD } from "config/userConfig";

export const AdminAuth: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (login === USER_LOGIN && password === USER_PASSWORD) {
      localStorage.setItem("isAuth", "true");
      navigate(ADMIN_DASHBOARD_ROUTE);
    } else {
      alert("Введені дані невірні");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-64 m-auto mt-20">
      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        className="mb-2 p-2 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 border"
      />
      <button
        type="submit"
        className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Увійти
      </button>
    </form>
  );
};
