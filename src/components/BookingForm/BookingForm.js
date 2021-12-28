import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Alert from "../../hooks/Alert";
import { useHistory } from "react-router-dom";
import Ripple from "material-ripple-effects";
import UseRazorPay from "./useRazorPay";

const BookingForm = ({ droneId, dronePrice }) => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState("sm");
  const [color, setColor] = useState("white");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(dronePrice);
  const { sweetAlert } = Alert();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const history = useHistory();
  const ripple = new Ripple();
  const { loadRazorpay } = UseRazorPay();

  const [paymentId, setPaymentId] = useState("");

  useEffect(() => {
    setPrice(dronePrice * quantity);
  }, [quantity, dronePrice]);

  const placeOrder = () => {
    setIsPlacingOrder(true);
    const order = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      size: size,
      color: color,
      quantity: quantity,
      price: price,
      droneId: droneId,
      status: "Pending",
      paymentId: paymentId,
    };
    fetch("https://mysterious-falls-17889.herokuapp.com/orders", {
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
    setPaymentId("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loadRazorpay(price, setPaymentId, placeOrder);
        }}
        className="m-auto bg-white p-3 md:p-7 sign-form shadow-sm"
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
          htmlFor="size"
        >
          Size:
        </label>
        <select
          className="form-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="size"
          onChange={(e) => setSize(e.target.value)}
        >
          <option defaultSelected disabled>
            Select the drone size
          </option>
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
        </select>
        <label
          className="block text-sm font-bold mb-2 text-left mt-3"
          htmlFor="color"
        >
          Color:
        </label>
        <select
          className="form-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="color"
          onChange={(e) => setColor(e.target.value)}
        >
          <option defaultSelected disabled>
            Select the drone color
          </option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
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
        <button
          className={`${
            isPlacingOrder ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-700"
          } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-5`}
          onMouseUp={(e) => ripple.create(e, "light")}
          type="submit"
          disabled={isPlacingOrder}
        >
          {isPlacingOrder ? (
            <img
              src="https://i.ibb.co/nkCByxZ/loader.gif"
              alt="Loading..."
              className="w-6 m-auto"
            />
          ) : (
            `Pay Now $${price}`
          )}
        </button>
      </form>
    </>
  );
};

export default BookingForm;
