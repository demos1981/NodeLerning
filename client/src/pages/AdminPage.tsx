import React from "react";
import AdminProduct from "../components/AdminProduct";
import AdminUser from "../components/AdminUser";

const AdminPage: React.FC = () => {
  return (
    <>
      <div className="flex bg-base-gray text-base-gray-dark ">
        <div className=" bg-base-gray-dark max-w-fit h-svh rounded-r-lg ">
          <h1 className="flex w-full justify-center text-2xl font-medium  h-fit bg-base-gray-dark text-base-gray-light mt-10">
            ADMIN PAGE
          </h1>
          <AdminProduct />
          <AdminUser />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
