import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD";
const API_URL = "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD";

export const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${API_URL}?page=0&limit=15`);
        return response.data;
      } catch (error) {
        console.error(`API error: ${error}`);
        try {
          const response = await axios.get(`${PROXY_URL}?page=0&limit=15`);
          return response.data;
        } catch (error) {
          console.error(`Proxy error: ${error}`);
          return { error: "Failed to fetch data" };
        }
      }
    },
    retry: 2,
    retryOnMount: true,
  });

  return {
    isLoading,
    error: error || (data && data.error),
    products: data?.data?.products || [],
  };
};
