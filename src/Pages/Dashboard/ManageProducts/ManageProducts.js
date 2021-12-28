import React, { useEffect, useState } from "react";
import Ripple from "material-ripple-effects";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [updateOrderId, setUpdateOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const ripple = new Ripple();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mysterious-falls-17889.herokuapp.com/drones")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [updateOrderId]);

  const deleteOrder = (orderId) => {
    fetch("https://mysterious-falls-17889.herokuapp.com/drones", {
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
  const confirmAlert = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrder(_id);
        Swal.fire("Deleted!", "Product Removed Successfully!", "success");
      }
    });
  };
  if (isLoading) {
    return (
      <div className="flex justify-center align-center absolute">
        <img
          src="https://i.ibb.co/QjZhgZc/load.gif"
          alt="Loading..."
          className="w-24"
        />
      </div>
    );
  }

  return (
    <>
      <div className="m-auto w-full">
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

                    <div>
                      {/* <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-xl rounded mr-2"
                        onClick={() => confirmAlert(product._id)}
                      >
                        <i className="fas fa-edit"></i>
                      </button> */}
                      <button
                        onMouseUp={(e) => ripple.create(e, "light")}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-xl rounded"
                        onClick={() => confirmAlert(product._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
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
