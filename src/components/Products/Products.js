import React from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const allProducts = [
    {
      title: "Drone",
      price: "100",
      description: "A drone is a device that can fly autonomously.",
      _id: "j30483983F8D8E9K7Mg7",
      image:
        "https://www.pngplay.com/wp-content/uploads/1/Drone-Transparent-Images.png",
    },
    {
      title: "Drone",
      price: "100",
      description: "A drone is a device that can fly autonomously.",
      _id: "j30483983F8D8E9K7Mg7",
      image:
        "https://www.pngplay.com/wp-content/uploads/1/Drone-Transparent-Images.png",
    },
    {
      title: "Drone",
      price: "100",
      description: "A drone is a device that can fly autonomously.",
      _id: "j30483983F8D8E9K7Mg7",
      image:
        "https://www.pngplay.com/wp-content/uploads/1/Drone-Transparent-Images.png",
    },
    {
      title: "Drone",
      price: "100",
      description: "A drone is a device that can fly autonomously.",
      _id: "j30483983F8D8E9K7Mg7",
      image:
        "https://www.pngplay.com/wp-content/uploads/1/Drone-Transparent-Images.png",
    },
    {
      title: "Drone",
      price: "100",
      description: "A drone is a device that can fly autonomously.",
      _id: "j30483983F8D8E9K7Mg7",
      image:
        "https://www.pngplay.com/wp-content/uploads/1/Drone-Transparent-Images.png",
    },
    {
      title: "Drone",
      price: "100",
      description: "A drone is a device that can fly autonomously.",
      _id: "j30483983F8D8E9K7Mg7",
      image:
        "https://www.pngplay.com/wp-content/uploads/1/Drone-Transparent-Images.png",
    },
  ];
  return (
    <>
      <h1 className="text-4xl">Products</h1>
      <div className="mt-10 px-0 md:px-32">
        <div className="grid grid-cols-3 gap-4">
          {allProducts.map((product) => (
            <div className="rounded-lg shadow-xl bg-white">
              <img
                src={product.image}
                alt="Drone"
                className="rounded-t-lg h-60 w-full object-cover"
              />
              <header className=" text-xl font-extrabold p-4">
                {product.title}
              </header>
              <div className="px-5">
                <p className="text-gray-500 px-4">{product.description}</p>
              </div>
              <footer className="text-center py-3 px-8 text-gray-500">
                <NavLink
                  to={`/purchase/${product._id}`}
                  className="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600"
                >
                  Purchase
                </NavLink>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
