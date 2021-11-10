import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section>
        <div className="h-96 overflow-hidden relative video-outer">
          <video
            src="https://assets.mixkit.co/videos/preview/mixkit-highway-between-trees-506-large.mp4"
            muted
            autoPlay
            loop
            className="w-full"
          ></video>
          <div className="absolute top-0 bottom-0 m-auto h-full flex flex-col md:flex-row items-center justify-between p-7 md:px-32 w-full">
            <div className="text-white text-center md:text-left">
              <h1 className="text-2xl md:text-7xl">Amazing Droner</h1>
              <p className="md:text-3xl mt-3 text-red-600">
                Fly in higher to get the target.
              </p>
              <p className="mt-3 hidden md:block">
                Dream to achieve the best and go higher and higher. We're with
                you.
              </p>
              <NavLink to="/drones">
                <button className="h-10 px-5 m-2 text-white transition-colors duration-150 bg-blue-400 rounded-lg focus:shadow-outline hover:bg-blue-500 mt-5">
                  Explore more
                </button>
              </NavLink>
            </div>
            <img
              src="https://www1.djicdn.com/assets/images/products/phantom-4-pro/s1/e-3-abec9da58eed5e2fa8ffe68806c4946c.png?from=cdnMap"
              alt="Drone"
              className="drone-gif w-96"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
