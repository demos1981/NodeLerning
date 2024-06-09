import React from "react";
import { useState } from "react";
import Button from "./Button";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col w-44 items-center justify-center mt-72 border rounded-md">
      <div className="flex flex-col justify-end">
        <h2 className="text-xl font-bold">Authentificate</h2>
        <input
          className="max-w-32 h-7 flex items-center justify-center border-2 border-lime-500 mt-4 rounded-lg "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          className="max-w-32 h-7 flex items-center justify-center border-2 border-lime-500 mt-4 rounded-lg "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <Button
          variant="ghost"
          className="w-14 h-10 border-2 mt-4 mb-4 rounded-lg border-lime-500"
          onClick={() => console.log(email, password)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
