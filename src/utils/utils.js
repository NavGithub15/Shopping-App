import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://cors-anywhere.herokuapp.com/https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD"

export const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}?page=0&limit=6`);
      return response.data;
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
