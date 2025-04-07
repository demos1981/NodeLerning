import React, { useState } from "react";
import { useAppDispatch } from "hooks/hooks";
import { addProduct } from "features/product/productSlice";
import AddProductMedia from "./AddProductMedia";

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
  const [role, setRole] = useState<string>("new");
  const [sex, setSex] = useState<string>("unisex");
  const [category, setCategory] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [productId, setProductId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const handleUpload = (files: File[]) => {
    // Implement your file upload logic here
    console.log("Files to upload:", files);
    // Example: You might want to upload files to a server or process them
  };

  const validateForm = () => {
    let newErrors: Record<string, string> = {};
    if (!articles) newErrors.articles = "Add articles";
    if (!brand) newErrors.brand = "Add Brand";
    if (!name) newErrors.name = "Add name";
    if (!description) newErrors.description = "Add description";
    if (quantity <= 0) newErrors.quantity = "Add quantity";
    if (price <= 0) newErrors.price = "Price must be > 0";
    if (!barcode) newErrors.barcode = "Add barcode";
    if (!color) newErrors.color = "Add color";
    if (!size) newErrors.size = "Add size";
    if (!role) newErrors.role = "Add role";
    if (!sex) newErrors.sex = "Add sex";

    if (!category) newErrors.category = "Add category";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      alert("Bugs in form:\n\n" + Object.values(newErrors).join("\n"));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const resultAction = await dispatch(
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
      const newProduct = resultAction.payload;

      if (newProduct?.id) {
        setProductId(newProduct.id); // <-- Це те, що потрібно для медіа
        alert("Продукт створено. Тепер завантаж медіафайли.");
      }
    } catch (errors) {
      alert("Помилка при створенні продукту");
      console.error(errors);
    }

    setArticles("");
    setBrand("");
    setName("");
    setDescription("");
    setQuantity(0);
    setPrice(0);
    setBarcode("");
    setColor("");
    setSize("");
    setRole("");
    setSex("");
    setCategory("");
    alert("Product added successfully");
  };

  return (
    <div className=" min-h-screen flex items-center justify-center max-w-md bg-base-gray text-base-gray-light">
      <div className="p-8 rounded-md shadow-md  max-w-md bg-base-gray-dark ">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 ">Articles</label>
            <input
              type="text"
              value={articles}
              onChange={(e) => setArticles(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Barcode</label>
            <input
              type="text"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Color</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Size</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark bg-white"
              required
            >
              <option value="new">New</option>
              <option value="stock">Stock</option>
              <option value="old">Old</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Sex</label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark bg-white"
              required
            >
              <option value="unisex">Unisex</option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
              <option value="children">Children</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
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
      <AddProductMedia onUpload={handleUpload} productId={productId} />;
    </div>
  );
};
