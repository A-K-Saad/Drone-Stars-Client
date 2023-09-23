import Ripple from "material-ripple-effects";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";
import "animate.css";

const Banner = () => {
  const ripple = new Ripple();
  return (
    <>
      <section>
        <div className="overflow-hidden relative bg-gray-100 py-14 lg:py-24 bg-gradient-to-br from-blue-200 to-purple-300">
          <div className="flex flex-col md:flex-row items-center justify-between p-7 md:px-14 lg:px-32 w-full">
            <div className="text-white text-center md:text-left">
              <p className="mb-2 text-xl md:text-2xl font-bold drop-shadow-md filter flex items-center animate__animated animate__bounceIn">
                <span className="w-10 mr-2 bg-white border border-white"></span>
                Capture Every Moment
                <span className="w-10 ml-2 bg-white border border-white"></span>
              </p>
              <h1 className="text-3xl lg:text-6xl font-bold drop-shadow-md filter animate__animated animate__fadeIn">
                Target Everything <br />
                From The Sky
              </h1>
              <p className="mt-2 filter drop-shadow">
                Get the best out of your photography.
                <br />
              </p>
              <NavLink to="/drones">
                <button
                  className="h-10 px-5 text-white transition-colors duration-150 bg-indigo-400 rounded focus:shadow-outline hover:bg-indigo-500 mt-4"
                  onMouseUp={(e) => ripple.create(e, "light")}
                >
                  Explore more
                </button>
              </NavLink>
            </div>
            <img
              src="https://i.ibb.co/Bc50CtM/image.png"
              alt="Drone"
              className="drone-gif mt-10 md:mt-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
