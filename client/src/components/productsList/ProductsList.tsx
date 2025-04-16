import React from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "app/store/api/productApi";

export const ProductsList: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const handleDeleteProduct = async (productId: number) => {
    try {
      await deleteProduct(productId).unwrap();
    } catch (err) {
      console.error("Помилка при видаленні продукту:", err);
    }
  };

  if (isLoading) return <p>Завантаження продуктів...</p>;
  if (error) return <p className="text-red-500">Помилка при завантаженні.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Список продуктів</h1>

      {products && products.length > 0 ? (
        <ul className="flex flex-wrap">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex w-1/4 justify-between product-item border p-4 rounded mb-4 mr-2"
            >
              <div>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p>{product.brand}</p>
                <p>{product.description}</p>
                <p>
                  {product.price}
                  <span className="text-base-darkGreen">$</span>
                </p>
              </div>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                disabled={isDeleting}
                className="flex justify-center items-center w-24 border-double border-2 border-red-300 rounded-md bg-base-pink hover:bg-red-600 hover:text-white transition duration-300"
              >
                {isDeleting ? "..." : "Delete"}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Немає доступних продуктів.</p>
      )}
    </div>
  );
};
