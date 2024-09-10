import React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface BagsProductProps {
  products: Product[];
}

const BagsProduct: React.FC<BagsProductProps> = ({ products }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Bags Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BagsProduct;