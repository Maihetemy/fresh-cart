import emptyCart from "../../assets/imgs/empty_cart_transparent.png";
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center w-full mt-32 mb-14">
        <h1 className="text-3xl font-bold text-green-950 mb-4">Not Found</h1>
        <img
          className="h-[200px] w-auto object-contain "
          src={emptyCart}
          alt="Empty Cart"
        />
      </div>
    </>
  );
}
