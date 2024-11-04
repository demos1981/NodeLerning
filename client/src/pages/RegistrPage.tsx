import React from "react";
import Registration from "../components/registration";

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
      <Registration
        title="Registration"
        handleClick={handleRegistrationSubmit}
      />
    </div>
  );
};

export default RegistrPage;
