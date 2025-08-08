import {  useQuery } from "@tanstack/react-query";
import { getAllUserOrders } from "../API/allOrdersApi";

export default function useAllOrders(userId) {
  const queryKey = ["allOrders", userId];

  let {
    data: allUserOrdersList,
    isLoading,
    error,
  } = useQuery({
    queryKey,
    queryFn: () => getAllUserOrders(userId),
    enabled: !!userId,
  });

  return {
    allUserOrdersList,
    isLoading,
    error,
  };
}
