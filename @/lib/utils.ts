import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "INR";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "INR", notation = "compact" } = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

const BASE_URL = "https://api.escuelajs.co/api/v1";

interface FetchDataFromApiProps {
  url: string;
  params?: Record<string, unknown>;
}

export const fetchDataFromApi = async ({
  url,
  params,
}: FetchDataFromApiProps) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
