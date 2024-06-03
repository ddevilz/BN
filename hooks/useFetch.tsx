import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../@/lib/utils";

const useFetch = <T,>(url: string, params?: Record<string, unknown>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<boolean | null | string>(null);
  const [loading, setLoading] = useState<boolean | null | string>(null);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    fetchDataFromApi({ url, params })
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || "Something went wrong");
      });
  }, [url, params]);

  return { data, loading, error };
};

export default useFetch;
