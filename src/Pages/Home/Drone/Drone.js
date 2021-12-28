import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { NavLink } from "react-router-dom";
import Ripple from "material-ripple-effects";
SwiperCore.use([Pagination, Autoplay]);

const Drone = () => {
  const [drones, setDrones] = useState([]);
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
          className="w-24"
        />
      </div>
    );
  }
  return (
    <>
      <div className="my-10 px-2 md:px-14 lg:px-32">
        <h1 className="text-3xl">Featured Producs</h1>
        <div className="underline my-4"></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {drones?.map((drone) => {
            return (
              <SwiperSlide
                key={drone._id}
                className="flex-col rounded-lg bg-white text-center"
              >
                <div className="w-full h-60 overflow-hidden p-2">
                  <img
                    src={drone.white || drone.image}
                    alt="Drone"
                    className="rounded-t-lg w-full h-full"
                  />
                </div>
                <div className="pb-8 px-2">
                  <h1 className="text-xl">{drone.name}</h1>
                  <h1 className="text-blue-400 pb-3">${drone.price}</h1>
                  <NavLink
                    to={`/drones/${drone._id}`}
                    className="py-2 px-5 bg-indigo-400 rounded text-base text-white hover:bg-indigo-500 rounded-full"
                    onMouseUp={(e) => ripple.create(e, "light")}
                  >
                    View Details
                  </NavLink>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Drone;
