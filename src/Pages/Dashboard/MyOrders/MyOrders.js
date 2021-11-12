import React, { useEffect, useState } from "react";
import SingleOrder from "../../../components/SingleOrder/SingleOrder";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [updateOrderId, setUpdateOrderId] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/my-orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user, updateOrderId]);

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-center md:p-9 h-full w-full">
          <div className="table rounded-lg w-full shadow-md">
            <div className="grid grid-cols-4 py-4">
              <div className="text-left md:pl-6">Recipient</div>
              <div className="text-center">Product</div>
              <div className="text-center">Status</div>
              <div className="text-right md:pr-6">Action</div>
            </div>
            <hr />
            {myOrders?.map((order) => {
              return (
                <SingleOrder
                  key={order._id}
                  order={order}
                  setUpdateOrderId={setUpdateOrderId}
                ></SingleOrder>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
