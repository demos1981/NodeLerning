import React from "react";
import { Shirt } from "lucide-react";

const AdminProduct: React.FC = () => {
  return (
    <div>
      <div className="flex justify-start flex-col  max-w-fit bg-base-gray-dark rounded-tr-lg mt-10">
        <div className="flex flex-row ml-10px text-base-gray-light">
          <Shirt />
          <h3>Products</h3>
          <div className="ml-10px">
            <div className="h-12  flex justify-center mb-2  ">
              <button className="border-double border-2 px-4 py-2 rounded-md  min-w-44  bg-base-gray  text-base-gray-dark hover:bg-base-green hover:text-base-gray-light">
                Add product
              </button>
            </div>
            <div className="h-12 flex justify-center mb-2">
              <button className=" border-double border-2  px-4 py-2 rounded-md min-w-44   bg-base-gray  text-base-gray-dark  hover:bg-base-green hover:text-base-gray-light">
                Products List
              </button>
            </div>
            <div className="h-12 flex justify-center mb-2">
              <button className=" border-double border-2  px-4 py-2 rounded-md min-w-44   bg-base-gray  text-base-gray-dark  hover:bg-base-green hover:text-base-gray-light">
                Update products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
