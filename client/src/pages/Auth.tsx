import React from "react";
import Form from "../components/Form";

const Auth: React.FC = () => {
  const handleFormSubmit = (email: string, password: string) => {
    console.log("Form submitted:", { email, password });
  };
  return (
    <>
      <div className=" flex items-center justify-center mt-90">
        <Form title="Login" handleClick={handleFormSubmit} />
      </div>
    </>
  );
};

export default Auth;
