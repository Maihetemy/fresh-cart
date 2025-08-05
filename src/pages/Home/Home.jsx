import AllProducts from "../../components/AllProducts/AllProducts";
import CategoriesSlider from "../../components/categoriesSlider/categoriesSlider";
import MainSlider from "../../components/MainSlider/MainSlider";

export default function Home() {
  return (
    <>
      <MainSlider />
      <CategoriesSlider />
      <AllProducts />
    </>
  );
}
