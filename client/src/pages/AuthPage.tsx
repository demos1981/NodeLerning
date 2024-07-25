import React from "react";
import Login from "../components/Login";

const AuthPage: React.FC = () => {
  return (
    <>
      <div className=" flex items-center justify-center mt-90 bg-base-gray text-base-gray-dark">
        <Login />
      </div>
    </>
  );
};

export default AuthPage;
