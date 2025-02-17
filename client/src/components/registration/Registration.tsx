import React, { useState, ChangeEvent } from "react";
import { RegistrationUser } from "types/data";
import axios from "axios";

export const Registration: React.FC<RegistrationUser> = ({
  title,
  handleClick,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  // const handleSubmit = () => {
  //   const formData = { name, email, password, role };
  //   console.log(formData);
  //   handleClick(formData);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/users", {
        name,
        email,
        password,
        role,
      });
      console.log("Data saved:", response.data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center max-w-md bg-base-gray text-base-gray-dark">
      <div className=" mx-auto  p-6 bg-white shadow-md rounded-lg bg-base-gray-dark">
        <h1 className="text-2xl font-bold mb-6 text-center text-base-gray-light">
          {title}
        </h1>
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <select
            value={role}
            onChange={handleRoleChange}
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
          onClick={handleSubmit}
          className="w-full bg-base-gray text-base-gray-dark py-2 rounded-lg hover:bg-base-blue transition duration-300 border-2 "
        >
          Submit
        </button>
      </div>
    </div>
  );
};
