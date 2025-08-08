import useAllOrders from "../../Hooks/useAllOrders";
import { useContext } from "react";
import { userTokenContext } from "./../../context/UserContext";
import OrderItemUi from "./../../components/OrderItemUI/OrderItemUI";
export default function AllUserOrders() {
  const { userID } = useContext(userTokenContext);
  const { allUserOrdersList } = useAllOrders(userID);
  console.log(allUserOrdersList);

  return (
    <>
      <h5 className="capitalize text-2xl mt-28 text-start mb-10 font-bold leading-none text-green-700 dark:text-white ">
        All User Orders
      </h5>
      <div className="flow-root">
        <ul role="list">
          {allUserOrdersList?.map((order, index) => (
            <OrderItemUi key={index} order={order} index={index + 1} />
          ))}
        </ul>
      </div>
    </>
  );
}
{
  /* <li key={order.id} className="py-3 sm:py-4">
                <div className="flex items-center ">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={order.userImage || "/default-profile.jpg"}
                      alt={`${order.userName} image`}
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {order.userName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {order.userEmail}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${order.totalAmount}
                  </div>
                </div>
              </li> */
}
