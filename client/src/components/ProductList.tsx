import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook/hooks";
import { RootState } from "../store/store";
import { fetchProducts } from "../store/slices/productSlice";

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const handleDelete = (id: number) => {
  //   dispatch(deleteProduct(id));
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p>Color: {product.color}</p>
            <p>${product.price}</p>
            {/* <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
