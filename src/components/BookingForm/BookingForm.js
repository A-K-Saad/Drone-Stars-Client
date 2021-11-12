import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Alert from "../../hooks/Alert";
import { useHistory } from "react-router-dom";

const BookingForm = ({ droneId, dronePrice }) => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(dronePrice);
  const { sweetAlert } = Alert();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setPrice(dronePrice * quantity);
  }, [quantity, dronePrice]);

  const placeOrder = (e) => {
    e.preventDefault();
    setIsPlacingOrder(true);
    const order = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      quantity: quantity,
      price: price,
      droneId: droneId,
      status: "Pending",
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then(() => {
        setIsPlacingOrder(false);
        sweetAlert("success", "Success!", "Placed Order Successfully!", false);
      })
      .then(() => {
        history.push("/dashboard/my-orders");
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  return (
    <>
      <form
        onSubmit={placeOrder}
        className="m-auto bg-white p-7 sign-form shadow-sm"
      >
        <h1 className="text-3xl text-center mb-5">Book The Drone</h1>
        <label
          className="block text-sm font-bold mb-2 text-left"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Severus Snape"
          required
          defaultValue={user?.displayName}
          onChange={(e) => setName(e.target.value)}
        />
        <label
          className="block text-sm font-bold mb-2 text-left mt-3"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="severus@snape.com"
          required
          disabled
          defaultValue={user?.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          className="block text-sm font-bold mb-2 text-left mt-3"
          htmlFor="phone"
        >
          Phone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="number"
          placeholder="013********"
          required
          min="1"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label
          className="block text-sm font-bold mb-2 text-left mt-3"
          htmlFor="address"
        >
          Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          placeholder="#31 London"
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <label
          className="block text-sm font-bold mb-2 text-left mt-3"
          htmlFor="quantity"
        >
          Quantity
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="quantity"
          type="number"
          placeholder="Drone Quantity"
          required
          defaultValue="1"
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <h4 className="my-4 text-xl">Total Price: ${price}</h4>
        {!isPlacingOrder ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Book Now
          </button>
        ) : (
          <button
            className="bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            disabled
          >
            <img
              src="https://i.ibb.co/nkCByxZ/loader.gif"
              alt="Loading..."
              className="w-6 m-auto"
            />
          </button>
        )}
      </form>
    </>
  );
};

export default BookingForm;
