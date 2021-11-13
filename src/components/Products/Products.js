import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = ({ quantity }) => {
  const [drones, setDrones] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://mysterious-falls-17889.herokuapp.com/drones")
      .then((res) => res.json())
      .then((data) => {
        setDrones(data);
      });
    setIsLoading(false);
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
      <div className="my-10 px-2 md:px-32">
        <h1 className="text-3xl text-center mb-6">Explore Out Drones</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {drones?.slice(0, quantity).map((product) => (
            <div
              className="rounded-lg shadow-xl bg-white text-center"
              key={product._id}
            >
              <img
                src={product.image}
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
