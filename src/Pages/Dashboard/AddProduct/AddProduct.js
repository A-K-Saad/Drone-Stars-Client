import React, { useState } from "react";
import Ripple from "material-ripple-effects";
import Alert from "../../../hooks/Alert";
import AddingImage from "./AddingImage/AddingImage";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [battery, setBattery] = useState(0);
  const [price, setPrice] = useState(0);
  const [quality, setQuality] = useState(0);
  const [description, setDescription] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  // const [mainImg, setMainImg] = useState("");
  //Different images of colors
  const [whiteImage, setWhiteImage] = useState("");
  const [redImage, setRedImage] = useState("");
  const [blueImage, setBlueImage] = useState("");
  const [yellowImage, setYellowImage] = useState("");
  const [greenImage, setGreenImage] = useState("");

  const { sweetAlert } = Alert();
  const ripple = new Ripple();

  const handleProduct = async (e) => {
    setIsAdding(true);
    e.preventDefault();
    fetch("https://mysterious-falls-17889.herokuapp.com/drones", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        battery: battery,
        price: price,
        quality: quality,
        description: description,
        white: whiteImage,
        red: redImage,
        blue: blueImage,
        yellow: yellowImage,
        green: greenImage,
      }),
    })
      .then(() => {
        sweetAlert("success", "Successed!", "Added Drone Successfully!");
        setIsAdding(false);
        setWhiteImage("");
        setRedImage("");
        setBlueImage("");
        setYellowImage("");
        setGreenImage("");
        setName("");
        setBattery(0);
        setPrice(0);
        setQuality(0);
        setDescription("");
        e.target.reset();
      })
      .catch(() => {
        sweetAlert("error", "OOPS!", "Failed To Add Drone!");
      });
  };

  return (
    <div className="p-2 md:p-8 m-auto">
      <form onSubmit={handleProduct} className="m-auto bg-white p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:space-x-5">
          <div>
            <label
              className="block text-sm font-bold mb-2 text-left"
              htmlFor="name"
            >
              Drone:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Drone Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Battery:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="battery"
              type="number"
              placeholder="Enter Battery Size"
              required
              onChange={(e) => {
                if (e.target.value < 0) {
                  e.target.value = 1;
                }
                setBattery(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-5">
          <div>
            <label
              className="block text-sm font-bold mb-2 mt-4"
              htmlFor="price"
            >
              Price:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Enter Drone Price"
              min="1"
              onChange={(e) => {
                if (e.target.value < 0) {
                  e.target.value = 1;
                }
                setPrice(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-bold mb-2 mt-4"
              htmlFor="quality"
            >
              Quality:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quality"
              type="number"
              placeholder="Enter Drone Camera Quality"
              onChange={(e) => {
                if (e.target.value < 0) {
                  e.target.value = 1;
                }
                setQuality(e.target.value);
              }}
            />
          </div>
        </div>

        <label
          className="block text-sm font-bold mb-2 mt-4"
          htmlFor="description"
        >
          Description:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="Enter Drone Description"
          required
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
        />
        <AddingImage
          whiteImage={whiteImage}
          redImage={redImage}
          blueImage={blueImage}
          yellowImage={yellowImage}
          greenImage={greenImage}
          setWhiteImage={setWhiteImage}
          setRedImage={setRedImage}
          setBlueImage={setBlueImage}
          setYellowImage={setYellowImage}
          setGreenImage={setGreenImage}
        ></AddingImage>
        {isAdding ? (
          <button
            className="bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center cursor-not-allowed"
            disabled
          >
            <img
              src="https://i.ibb.co/nkCByxZ/loader.gif"
              alt="Loading"
              className="w-6 m-auto"
            />
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
            type="submit"
            onMouseUp={(e) => ripple.create(e, "light")}
          >
            Add Product
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProduct;
