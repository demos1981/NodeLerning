import React, { useState } from "react";
import { useAppDispatch } from "hooks/hooks";
import { addProduct } from "features/product/productSlice";

export const AddProduct: React.FC = () => {
  const [articles, setArticles] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [barcode, setBarcode] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addProduct({
        articles,
        brand,
        name,
        description,
        quantity,
        price,
        barcode,
        color,
        size,
        role,
        sex,
        category,
      })
    );
    alert("Product added successfully");
  };

  return (
    <div className=" min-h-screen flex items-center justify-center max-w-md bg-base-gray text-base-gray-light">
      <div className="p-8 rounded-md shadow-md  max-w-md bg-base-gray-dark text-base-gray-light">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Articles</label>
            <input
              type="text"
              value={articles}
              onChange={(e) => setArticles(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full"
              required
            />
          </div>
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
            <label className="block text-gray-700">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-2 px-4 py-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-2 px-4 py-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Barcode</label>
            <input
              type="text"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
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
          <div>
            <label className="block text-gray-700">Size</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Sex</label>
            <input
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 px-4 py-2 border bg-base-gray text-base-gray-dark rounded w-full hover:bg-base-blue hover:text-base-gray-dark transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
