import React from "react";
import { AdminProduct } from "components";
import { AdminUser } from "components";

export const AdminPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className=" bg-base-gray-dark max-w-fit h-svh rounded-r-lg ">
          <h1 className="flex w-full justify-center text-2xl font-medium  h-fit  text-base-gray-light mb-3 ">
            ADMIN PAGE
          </h1>
          <AdminProduct />
          <AdminUser />
        </div>
      </div>
    </>
  );
};
