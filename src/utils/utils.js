import { productsData } from "../data/data";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useProducts = (page, limit) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => {
      return productsData;
    },
    retry: 2,
    retryOnMount: true,
    onMount: () => {
      // Prefetch the next page
      queryClient.prefetchQuery(["products", page + 1, limit], () => {
        return productsData;
      });
    },
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
