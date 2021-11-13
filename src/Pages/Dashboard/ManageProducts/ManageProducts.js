import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Alert from "../../../hooks/Alert";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [updateOrderId, setUpdateOrderId] = useState("");
  const { sweetAlert } = Alert();

  useEffect(() => {
    fetch("https://mysterious-falls-17889.herokuapp.com/drones")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [updateOrderId]);

  const deleteOrder = (orderId) => {
    fetch("http://localhost:5000/drones", {
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
      <div className="h-full w-full">
        <div className="p-2 md:p-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <div className="col-span-1" key={product._id}>
                <div className="bg-white shadow-md rounded-lg p-4">
                  <div className="flex justify-between items-center flex-col md:flex-row">
                    <div className="w-20 h-14 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-auto h-auto"
                      />
                    </div>
                    <h3 className="text-md font-semibold">{product.name}</h3>

                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-xl rounded"
                      onClick={() => confirmAlert(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProducts;
