import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addToWishList,
  getUserWishList,
  removeFromWishList,
} from "./../API/WishListApi";

export default function useWishList() {
  const queryClient = useQueryClient();
  const queryKey = ["wishList"];

  let {
    data: wishList,
    isLoading,
    error,
  } = useQuery({
    queryKey,
    queryFn: getUserWishList,
  });

  let deleteMutation = useMutation({
    mutationFn: removeFromWishList,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
  let addMutation = useMutation({
    mutationFn: addToWishList,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return {
    wishList,
    isLoading,
    error,
    addToWishList: addMutation.mutate,
    removeFromWishList: deleteMutation.mutate,
  };
}
