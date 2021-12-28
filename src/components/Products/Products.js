import Ripple from "material-ripple-effects";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = ({ quantity }) => {
  const [drones, setDrones] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const ripple = new Ripple();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mysterious-falls-17889.herokuapp.com/drones")
      .then((res) => res.json())
      .then((data) => {
        setDrones(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center align-center">
        <img
          src="https://i.ibb.co/QjZhgZc/load.gif"
          alt="Loading"
          className="w-32"
        />
      </div>
    );
  }

  return (
    <>
      <div className="my-10 px-2 md:px-14 lg:px-32">
        <h1 className="text-3xl text-center">Explore Out Drones</h1>
        <div className="underline mx-auto my-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drones?.slice(0, quantity).map((product) => (
            <div
              className="rounded-lg shadow-xl bg-white text-center"
              key={product._id}
            >
              <img
                src={product.image || product.white}
                alt="Drone"
                className="rounded-t-lg h-60 w-full object-cover"
              />
              <header className=" text-xl font-extrabold p-4">
                {product.name}
              </header>
              <div className="px-5">
                <p className="text-gray-500 px-4">
                  {product.description.slice(0, 85)}...
                </p>
              </div>
              <footer className="text-center py-3 px-8 text-gray-500">
                <NavLink
                  to={`/drones/${product._id}`}
                  onMouseUp={(e) => ripple.create(e, "light")}
                  className="py-2 px-4 mt-5 bg-red-500 rounded text-white font-semibold hover:bg-red-600"
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
