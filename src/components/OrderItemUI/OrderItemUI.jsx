import PropTypes from "prop-types";

export default function OrderItemUi({ order, index }) {
  return (
    <>
      <li className="capitalize p-5 sm:py-4 border border-green-300 rounded-lg text-gray-600 mb-10">
        <div className="flex items-center flex-nowrap">
          <div className="row justify-between w-full">
            <p className="w-1/4 font-semibold text-start">order #{index}</p>
            <div className="w-1/4 font-semibold text-gray-800">
              order details:
            </div>
            <div className="w-1/4 flex flex-col items-start font-semibold">
              <p className="flex font-bold text-gray-800">
                total:
                <span className={`ms-1 text-green-600`}>
                  {order.totalOrderPrice} EGP
                </span>
              </p>
              <p className="flex text-gray-800">
                paid:{" "}
                <span
                  className={`ms-1 ${
                    order.isPaid ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {order.isPaid ? "yes" : "no"}
                </span>
              </p>
              {order.isPaid ? (
                <p className="flex text-gray-800">
                  payment Method Type:
                  <span className={`ms-1 text-gray-600`}>
                    {order.paymentMethodType}
                  </span>
                </p>
              ) : null}
            </div>

            <div className="w-1/4 text-start flex flex-col font-semibold">
              <p className="font-[600]">
                <span className="text-gray-800">phone: </span>{" "}
                {order.user.phone}
              </p>
              <p className="text-gray-800">
                delivered:
                <span
                  className={`ms-1  ${
                    order.isDelivered ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {order.isDelivered ? "yes" : "no"}
                </span>
              </p>
              <p>
                <p>
                  <span className="text-gray-800">date: </span>
                  {`${new Date(order.createdAt).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}, ${new Date(order.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                  })} ${new Date(order.createdAt).getDate()} at ${new Date(
                    order.createdAt
                  ).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}`}
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {order.cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-nowrap border  h-full rounded-lg border-gray-200"
            >
              <div className="w-full md:w-1/4 flex flex-col items-center bg-white  shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="w-full " src={item.product.imageCover} alt />
              </div>
              <div className="w-3/4 p-3 text-black text-start capitalize text-xs flex flex-col items-start justify-center">
                <p className="font-bold">{item.product.title}</p>
                <p>
                  count: <span className="text-gray-600">{item.count}</span>
                </p>
                <p>
                  price: <span className="text-gray-600">{item.price} EGP</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </li>
    </>
  );
}
// [0].cartItems[0].product.imageCover
// props type validation
OrderItemUi.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date),
    isDelivered: PropTypes.bool,
    isPaid: PropTypes.bool,
    paymentMethodType: PropTypes.string,
    shippingPrice: PropTypes.number,
    totalOrderPrice: PropTypes.number,
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        count: PropTypes.number,
        price: PropTypes.number,
        product: PropTypes.shape({
          name: PropTypes.string,
          imageCover: PropTypes.string,
          title: PropTypes.string,
          ratingsAverage: PropTypes.number,
        }).isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
    user: PropTypes.shape({ name: PropTypes.string, phone: PropTypes.number })
      .isRequired,
  }).isRequired,
  addToCartFun: PropTypes.func.isRequired,
  index: PropTypes.number,
};
