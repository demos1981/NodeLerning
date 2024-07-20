import React from "react";
import AddProduct from "../components/AddProduct";
import { Link } from "react-router-dom";

const AdminPage: React.FC = () => {
  return (
    <div>
      <h1>Admin page</h1>
      <div>
        <h2>Welcome to the admin panel</h2>
        <p>Here you can manage your products, orders, and other data.</p>
      </div>
      <div>
        <h3>Products</h3>
        <div>
          <div>
            <h3>Add</h3>
            <button className=" border-double border-2 border-red-300 px-4 py-2 rounded-md">
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
  );
};

export default AdminPage;
