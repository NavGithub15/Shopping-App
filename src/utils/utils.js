import { useQuery } from "@tanstack/react-query";

// create a proxy server in vite.config.js
const JSON_URL = "/data/fulhausdata.json";

export const useProducts = (page, limit) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: async () => {
      try {
        const response = await fetch(JSON_URL);
        const jsonData = await response.json();
        return jsonData;
      } catch (error) {
        console.log(`Error fetching JSON data: ${error}`);
        return { error: error };
      }
    },
    retry: 2,
    retryOnMount: true,
  });

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    isLoading,
    error: error || (data && data.error),
    products: data?.data?.products.slice(start, end) || [],
    totalPages: Math.ceil((data?.data?.products.length || 0) / limit),
  };
};
