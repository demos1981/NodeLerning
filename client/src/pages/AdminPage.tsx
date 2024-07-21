import React from "react";
import AdminProduct from "../components/AdminProduct";
import AdminUser from "../components/AdminUser";

const AdminPage: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center text-4xl ">Admin page</h1>
        <h2 className="text-2xl">Welcome to the admin panel</h2>
        <AdminProduct />
        <AdminUser />
      </div>
    </>
  );
};

export default AdminPage;
