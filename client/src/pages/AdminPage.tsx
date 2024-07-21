import React from "react";
import AdminProduct from "../components/AdminProduct";

const AdminPage: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center text-4xl ">Admin page</h1>
        <h2 className="text-2xl">Welcome to the admin panel</h2>
        <AdminProduct />
      </div>
    </>
  );
};

export default AdminPage;
