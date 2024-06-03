import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsFilter from "./ProductsFilter";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { ProductProps } from "../../types/list-type";

const ProductsPageLayout = () => {
  const [filterParams, setFilterParams] = useState<Record<string, unknown>>({});
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");
    if (query) {
      setFilterParams((prevParams) => ({
        ...prevParams,
        title: query,
      }));
    }
  }, [location.search]);

  const { data, loading, error } = useFetch<ProductProps[]>(
    "/products",
    filterParams
  );

  return (
    <div className="pt-24 pb-24  ">
      <div className="px-16 xl:px-4 lg:px-8 md:px-10 xs:px-4   p-4">
        <div className="flex flex-wrap   p-4">
          <div className="w-full lg:w-1/4 order-2 lg:order-1   p-4">
            <ProductsFilter setFilterParams={setFilterParams} />
          </div>
          <div className="w-full lg:w-3/4 order-1 lg:order-2   p-4">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <ProductsGrid products={data} />}
            <div className="pro-pagination-style text-center mt-8   p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageLayout;
