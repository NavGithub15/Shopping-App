import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://cors-anywhere.herokuapp.com/https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD"

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}??page=0&limit=6`);
      // console.log(data);
      return data;
    },
    retry: 2,
    retryOnMount: true,
  });
};
