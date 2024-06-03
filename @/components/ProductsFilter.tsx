import React from "react";
import RangeSlider from "./RangeSlider";
import CategoryFilter from "./CategoryFilter";

interface ProductsFilterProps {
  setFilterParams: React.Dispatch<
    React.SetStateAction<Record<string, unknown>>
  >;
}

const ProductsFilter: React.FC<ProductsFilterProps> = ({ setFilterParams }) => {
  const updatePriceRange = (minPrice: number, maxPrice: number) => {
    setFilterParams((prevParams) => ({
      ...prevParams,
      price_min: minPrice,
      price_max: maxPrice,
    }));
  };

  return (
    <div>
      <RangeSlider updateFilterParams={updatePriceRange} />
      <CategoryFilter setFilterParams={setFilterParams} />
    </div>
  );
};

export default ProductsFilter;
