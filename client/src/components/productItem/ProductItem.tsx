import React from "react";
import { ProductProps } from "../types/data";

interface ProductItemProps {
  product: ProductProps;
  //handleDelete: (productId: number) => void; // Add this prop when you implement delete functionality in your component.  // Example: handleDelete={handleDeleteProduct}  // This is a placeholder for the actual function. You will need to replace it with your actual delete function.  // handleDeleteProduct(productId) { //   axios.delete(`/api/products/${productId}`) //    .then(() => { //      console.log("Product deleted successfully"); //      // Refresh the list of products //      fetchProducts(); //    }) //    .catch((error) => { //      console.error("Error deleting product:", error); //    }); // }  // In your ProductList component, you can use this component like this: // <ProductItem products={products} handleDelete={handleDeleteProduct} />  // This will render the list of products with a delete button next to each product.  // Note: This
}

// const handleDeleteProduct = (id: number) => {
//   const dispatch = useAppDispatch();
//   dispatch(deleteProduct(id));
// };

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  console.log(product);
  return (
    <div className="product-item border p-4 rounded mb-4">
      <h2 className="text-xl font-bold">{product.name}</h2>

      <p>Color: {product.color}</p>
    </div>
  );
};

export default ProductItem;
