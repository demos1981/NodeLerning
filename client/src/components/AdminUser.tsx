import React from "react";

const AdminUser: React.FC = () => {
  return (
    <div>
      <div className="flex justify-start flex-col bg-[#9eb5f5]  max-w-sm ">
        <div className=" text-white"></div>
        <div>
          <h3>Users</h3>
          <div>
            <div className="h-24">
              <h3>Add</h3>
              <button className=" border-double border-2 border-red-300 px-4 py-2 rounded-md hover:bg-orange-300">
                Add users
              </button>
            </div>
            <div className="h-24">
              <h3>List</h3>
              <button className=" border-double border-2 border-red-300 px-4 py-2 rounded-md">
                Users List
              </button>
            </div>
            <div className="h-24">
              <h3>Update</h3>
              <button className=" border-double border-2 border-red-300 px-4 py-2 rounded-md">
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
