import AllProducts from "../AllProducts/AllProducts";
import CategoriesSlider from "../categoriesSlider/categoriesSlider";
import MainSlider from "../MainSlider/MainSlider";

export default function Home() {
  return (
    <>
      <MainSlider />
      <CategoriesSlider />
      <AllProducts />
    </>
  );
}
