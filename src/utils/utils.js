import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// create a proxy server in vite.config.js 
const API_URL = "/api/products-service/products/website/CAD";
const url = API_URL + "/?page=0&limit=20"; 

export const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.log(`Server error: ${error}`);
        return {error: error};
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
