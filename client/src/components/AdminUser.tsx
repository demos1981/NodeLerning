import React from "react";

const AdminUser: React.FC = () => {
  return (
    <div>
      <div className="flex justify-start flex-col bg-[#9eb5f5]  max-w-sm ">
        <div className=" text-white"></div>
        <div>
          <h3>Users</h3>
          <div>
            <div className="h-24 flex justify-center mb-1">
              <button className="border-double border-2 px-4 py-2 rounded-md  min-w-44">
                Add users
              </button>
            </div>
            <div className="h-24 flex justify-center mb-1">
              <button className="border-double border-2 px-4 py-2 rounded-md  min-w-44">
                Users List
              </button>
            </div>
            <div className="h-24 flex justify-center mb-1">
              <button className="border-double border-2 px-4 py-2 rounded-md  min-w-44">
                Update users
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
