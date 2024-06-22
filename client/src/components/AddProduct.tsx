import React, { useState } from "react";
import { useAppDispatch } from "../hook/hooks";
import { addProduct } from "../store/slices/productSlice";
import axios from "axios";

const AddProduct: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  // const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const product = await axios.post("http://localhost:3001/api/products", {
        name,
        color,
      });
      console.log("Data saved:", product.data);
    } catch (err) {
      console.error("Error saving data:", err);
    }
    // dispatch(addProduct(product));
    // setName("");
    // setPrice("");
    // setDescription("");
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
          <label className="block text-gray-700">Price</label>
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
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
