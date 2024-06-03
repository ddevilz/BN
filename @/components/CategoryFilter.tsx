import React from "react";
import useFetch from "../../hooks/useFetch";
import { CategoryProps } from "../../types/list-type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface CategoryFilterProps {
  setFilterParams: React.Dispatch<
    React.SetStateAction<Record<string, unknown>>
  >;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ setFilterParams }) => {
  const { data, loading, error } = useFetch<CategoryProps[]>("/categories");

  const handleCategoryChange = (value: string) => {
    const categoryId = Number(value);
    setFilterParams((prevParams) => ({
      ...prevParams,
      categoryId: categoryId,
    }));
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <div className="p-6">
      <label className="block text-white font-semibold mb-2">
        Select Category
      </label>
      <Select defaultValue={""} onValueChange={handleCategoryChange}>
        <SelectTrigger className="bg-violet-700 border-none">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key={0} value={" "}>
            All
          </SelectItem>
          {data?.map((category) => (
            <SelectItem key={category.id} value={String(category.id)}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
