import React, { useState } from "react";

interface RangeSliderProps {
  updateFilterParams: (minPrice: number, maxPrice: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ updateFilterParams }) => {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1000);

  const updateMinPrice = (value: number) => {
    setMinPrice(value);
    updateFilterParams(value, maxPrice);
  };

  const updateMaxPrice = (value: number) => {
    setMaxPrice(value);
    updateFilterParams(minPrice, value);
  };

  return (
    <div className="rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Range Slider</h2>
      <div className="mb-4">
        <label
          htmlFor="min-price-range"
          className="block text-white font-semibold mb-2"
        >
          Min Price
        </label>
        <input
          type="range"
          className="w-full accent-indigo-600"
          min="1"
          max="1000"
          value={minPrice}
          onChange={(e) => updateMinPrice(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Max Price</label>
        <input
          type="range"
          className="w-full accent-indigo-600"
          min="10"
          max="1000"
          value={maxPrice}
          onChange={(e) => updateMaxPrice(Number(e.target.value))}
        />
      </div>
      <div className="flex justify-between text-white">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
