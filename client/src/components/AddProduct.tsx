import React, { useState } from "react";
import { useAppDispatch } from "../hook/hooks";
import { addProduct } from "../store/slices/productSlice";

const AddProduct: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProduct({ name, color }));
    alert("Product added successfully");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 px-4 py-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-2 px-4 py-2 border rounded w-full"
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-2 px-4 py-2 border rounded w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
