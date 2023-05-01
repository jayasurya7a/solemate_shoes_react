import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
