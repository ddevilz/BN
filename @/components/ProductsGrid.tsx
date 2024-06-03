import React from "react";
import ProductCard from "./ProductCard";
import { ProductArrayProps } from "../../types/list-type";

const ProductsGrid: React.FC<ProductArrayProps> = ({ products }) => {
  return (
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <ProductCard products={products} />
    </div>
  );
};

export default ProductsGrid;
