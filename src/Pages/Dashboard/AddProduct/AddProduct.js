import React, { useState } from "react";
import Alert from "../../../hooks/Alert";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quality, setQuality] = useState(0);
  const [description, setDescription] = useState("");
  const [chosenFile, setChosenFile] = useState();
  const [image, setImage] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const { sweetAlert } = Alert();

  const handleProduct = async (e) => {
    setIsAdding(true);
    e.preventDefault();
    const imageData = new FormData();
    imageData.set("key", "47b2d957da970efd46650889d3040352");
    imageData.append("image", chosenFile);

    const response = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imageData,
    });
    const data = await response.json();
    setImage(data.data.url);
    if (image) {
      fetch("http://localhost:5000/drones", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          price: price,
          quality: quality,
          description: description,
          image: image,
        }),
      })
        .then(() => {
          sweetAlert("success", "Successed!", "Added Drone Successfully!");
          setIsAdding(false);
          e.target.reset();
        })
        .catch(() => {
          sweetAlert("error", "OOPS!", "Failed To Add Drone!");
        });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleProduct}
          className="m-auto bg-white p-7 sign-form shadow-sm"
        >
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
          <label
            className="block text-sm font-bold mb-2 text-lefte mt-4"
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
            defaultValue="100"
            onChange={(e) => {
              if (e.target.value < 1) {
                e.target.value = 1;
              }
              setPrice(e.target.value);
            }}
            required
          />
          <label
            className="block text-sm font-bold mb-2 text-lefte mt-4"
            htmlFor="quality"
          >
            Quality:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quality"
            type="number"
            placeholder="Enter Drone Camera Quality"
            defaultValue="100"
            onChange={(e) => {
              if (e.target.value < 1) {
                e.target.value = 1;
              }
              setQuality(e.target.value);
            }}
          />
          <label
            className="block text-sm font-bold mb-2 text-lefte mt-4"
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
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4">
            <i className="fas fa-cloud-upload-alt mr-2"></i>
            <input
              type="file"
              required
              className="custom-file-input"
              onChange={(e) => {
                setChosenFile(e.target.files[0]);
                e.target.click();
              }}
            />
          </div>

          {isAdding ? (
            <button
              className="bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4 text-center cursor-not-allowed"
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4 text-center"
              type="submit"
            >
              Add Product
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddProduct;
