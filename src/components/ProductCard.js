import React from "react";

function ProductCard({ product }) {
  const { name, price, image, brand, color, size, description } = product;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
    <div className="p-4">
      <h3 className="font-medium text-gray-800 text-lg">{product.name}</h3>
      <div className="flex justify-between mt-2">
        <span className="text-gray-700">{product.brand}</span>
        <span className="text-gray-700">{product.price}</span>
      </div>
    </div>
  </div>
  );
}

export default ProductCard;
