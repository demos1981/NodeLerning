import React from "react";
import Registration from "../components/Registration";

const RegistrPage: React.FC = () => {
  const handleRegistrationSubmit = (formData: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => {
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      <Registration title="Register" handleClick={handleRegistrationSubmit} />
    </div>
  );
};

export default RegistrPage;
