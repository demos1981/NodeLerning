import React from "react";

const AdminPage: React.FC = () => {
  return (
    <div>
      <h1 className="flex justify-center text-4xl">Admin page</h1>
      <div className="flex justify-start flex-col bg-fixed bg-indigo-500  max-w-md">
        <div>
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Welcome to the admin panel
          </h2>
          <p>Here you can manage your products, orders, and other data.</p>
        </div>
        <div>
          <h3>Products</h3>
          <div>
            <div>
              <h3>Add</h3>
              <button className=" border-double border-2 border-red-300 px-4 py-2 rounded-md hover:bg-orange-300">
                Add product
              </button>
            </div>
            <div>
              <h3>List</h3>
              <button className=" border-double border-2 border-red-300 px-4 py-2 rounded-md">
                Products List
              </button>
            </div>
            <div>
              <h3>Update</h3>
              <button className=" border-double border-2 border-red-300 px-4 py-2 rounded-md">
                Update products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
