import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hooks/hooks";
import { fetchProducts, deleteProduct } from "features/product/productSlice"; // Import the thunk

export const ProductsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  const loading = useAppSelector((state) => state.products.loading);
  const error = useAppSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the thunk on component mount
  }, [dispatch]); // Add the dispatch dependency

  const handleDeleteProduct = async (productId: number) => {
    try {
      await dispatch(deleteProduct(productId)); // Dispatch the thunk for deletion
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Product List</h1>
          <ul>
            {products.map((product) => (
              <li
                key={product.id}
                className="product-item border p-4 rounded mb-4"
              >
                <h2 className="text-xl font-bold">{product.name}</h2>

                <p>{product.color}</p>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className=" border-double border-2 border-red-300 px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
