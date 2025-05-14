import React, { useState, ChangeEvent } from "react";
import { RegistrationUser } from "types/registerType";
import { useRegisterMutation } from "../../app/store/api/authApi"; // змінити шлях при потребі

export const Registration: React.FC<RegistrationUser> = ({
  title,
  handleClick,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [register, { isLoading, isError, error, isSuccess }] =
    useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name || !email || !password || !role) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    try {
      const res = await register({ email, password, name, role }).unwrap();
      console.log("Користувач зареєстрований:", res);
      // handleClick?.(); // якщо є додаткова дія після успіху
    } catch (err) {
      console.error("Помилка реєстрації:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center max-w-md bg-base-gray text-base-gray-dark">
      <form
        onSubmit={handleSubmit}
        className="mx-auto p-6 bg-white shadow-md rounded-lg bg-base-gray-dark w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-base-gray-light">
          {title}
        </h1>

        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-base-gray text-base-gray-dark py-2 rounded-lg hover:bg-base-blue transition duration-300 border-2"
        >
          {isLoading ? "Завантаження..." : "Зареєструватись"}
        </button>

        {isError && (
          <p className="text-red-500 mt-2 text-sm">
            Помилка реєстрації. Перевірте введені дані.
          </p>
        )}
        {isSuccess && (
          <p className="text-green-500 mt-2 text-sm">Реєстрація успішна!</p>
        )}
      </form>
    </div>
  );
};
