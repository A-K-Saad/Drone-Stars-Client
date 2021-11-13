import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import Alert from "../../hooks/Alert";

const SingleOrder = ({ order, setUpdateOrderId, allOrdersPage }) => {
  const { sweetAlert } = Alert();

  const updateStatus = (orderId, status) => {
    fetch("https://mysterious-falls-17889.herokuapp.com/orders/", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ orderId: orderId, status: status }),
    })
      .then((res) => res.json())
      .then(() => setUpdateOrderId(orderId));
  };
  const deleteOrder = (orderId) => {
    fetch("https://mysterious-falls-17889.herokuapp.com/orders", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: orderId }),
    })
      .then((res) => res.json())
      .then(() => {
        setUpdateOrderId(orderId);
      });
    setUpdateOrderId(orderId);
  };

  //Confirmation SweetAlert

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton:
        "bg-red-500 hover:bg-red-600 px-4 py-2 rounded mr-2 text-white",
      confirmButton:
        "bg-green-500 hover:bg-green-600 px-4 py-2 rounded ml-2 text-white",
    },
    buttonsStyling: false,
  });
  const confirmAlert = async (_id) => {
    return swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteOrder(_id);

          sweetAlert(
            "success",
            "Cancelled!",
            "Cancelled The Order Successfully!"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          sweetAlert("error", "UH OH!", "Couldn't Cancel The Order!");
        }
      });
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 text-sm">
        <div className="flex items-start flex-col py-2 md:py-6 px-6">
          <span className="text-indigo-600">{order.name}</span>
          <span className="text-gray-500">{order.email}</span>
          {allOrdersPage && (
            <span className="text-blue-600">{order.address}</span>
          )}
        </div>
        <div className="text-center flex items-center justify-center overflow-hidden">
          <NavLink
            to={`/purchase/${order.droneId}`}
            className="text-indigo-600"
          >
            #{order.droneId}
          </NavLink>
        </div>
        <div className="text-center flex items-center justify-center">
          <span
            className={`px-3 py-1 rounded-full ${
              order.status === "Rejected"
                ? "bg-red-200 text-red-700"
                : order.status === "Shipped"
                ? "bg-green-200 text-green-700"
                : "bg-indigo-200 text-indigo-600 "
            }`}
          >
            {order.status}
          </span>
        </div>
        <div className="text-center flex items-center justify-end py-2 md:py-6 px-6">
          <div className="flex items-center space-x-2 text-2xl">
            {allOrdersPage && (
              <>
                <i
                  className="fas fa-check-circle text-green-500 cursor-pointer"
                  onClick={() => updateStatus(order._id, "Shipped")}
                ></i>
                <i
                  className="fas fa-shipping-fast text-indigo-400 cursor-pointer"
                  onClick={() => updateStatus(order._id, "Pending")}
                ></i>
                <i
                  className="fas fa-times-circle text-red-500 cursor-pointer"
                  onClick={() => updateStatus(order._id, "Rejected")}
                ></i>
              </>
            )}
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-xl rounded"
              onClick={() => confirmAlert(order._id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SingleOrder;
