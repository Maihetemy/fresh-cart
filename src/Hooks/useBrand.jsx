import { useQuery } from "@tanstack/react-query";
import { getSpecificBrand } from "../API/brandAPI";
import { getAllBrands } from "./../API/brandAPI";

export default function useBrands(brandID) {

  let {
    data: specificBrandList,
    isLoading: isLoadingSpecific,
    error: errorSpecific,
  } = useQuery({
    queryKey: ["specificBrand", brandID],
    queryFn: () => getSpecificBrand(brandID),
    enabled: !!brandID,
  });

  let {
    data: brandList,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useQuery({
    queryKey: ["allBrands"],
    queryFn: getAllBrands,
  });
  return {
    specificBrandList,
    brandList,
    isLoadingSpecific,
    isLoadingAll,
    errorSpecific,
    errorAll,
  };
}
