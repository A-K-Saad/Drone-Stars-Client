import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import BookingForm from "../../components/BookingForm/BookingForm";
import Ripple from "material-ripple-effects";
import Magnifier from "react-magnifier";
import ProductReviews from "./ProductReviews/ProductReviews";

const Purchase = () => {
  const [drone, setDrone] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState();
  const { droneId } = useParams();
  const history = useHistory();
  const ripple = new Ripple();

  useEffect(() => {
    fetch("https://mysterious-falls-17889.herokuapp.com/drones")
      .then((res) => res.json())
      .then((data) => {
        const drone = data?.find((d) => d._id === droneId);
        setDrone(drone);
        setCurrentImage(drone.white);
        setIsLoading(false);
        //Update views
        fetch("https://mysterious-falls-17889.herokuapp.com/drones", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: droneId,
            views: drone.views + 1 || 1,
            updateType: "views",
          }),
        });
      });
  }, [droneId]);

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
      <div className="my-10 px-2 md:px-32 text-center max-w-full">
        <div className="md:grid grid-cols-12 w-full gap-8">
          <div className="col-span-12 md:col-span-7 text-left max-w-full overflow-hidden">
            <button
              className="mt-5 py-2 px-8 mx-2 rounded text-gray-700 transition-colors duration-150 focus:shadow-outline border border-transparent"
              onClick={() => history.goBack() || history.push("/")}
              onMouseUp={(e) => ripple.create(e, "dark")}
            >
              <i className="far fa-arrow-alt-circle-left mr-2"></i> Back
            </button>
            <div className="overflow-hidden magnifier">
              <Magnifier src={currentImage || drone?.image} />
            </div>
            <div className="p-5 flex items-center space-x-5">
              {drone?.white && (
                <div
                  className="h-6 w-6 rounded-full bg-gray-200 hover:bg-gray-300 ring ring-gray-300 ring-offset-2 cursor-pointer"
                  onClick={() => setCurrentImage(drone?.white)}
                ></div>
              )}
              {drone?.red && (
                <div
                  className="h-6 w-6 rounded-full bg-red-500 hover:bg-red-600 ring ring-red-500 ring-offset-2 cursor-pointer"
                  onClick={() => setCurrentImage(drone?.red)}
                ></div>
              )}
              {drone?.blue && (
                <div
                  className="h-6 w-6 rounded-full bg-blue-500 hover:bg-blue-600 ring ring-blue-500 ring-offset-2 cursor-pointer"
                  onClick={() => setCurrentImage(drone?.blue)}
                ></div>
              )}
              {drone?.yellow && (
                <div
                  className="h-6 w-6 rounded-full bg-yellow-300 hover:bg-yellow-400 ring ring-yellow-400 ring-offset-2 cursor-pointer"
                  onClick={() => setCurrentImage(drone?.yellow)}
                ></div>
              )}
              {drone?.green && (
                <div
                  className="h-6 w-6 rounded-full bg-green-500 hover:bg-green-600 ring ring-green-500 ring-offset-2 cursor-pointer"
                  onClick={() => setCurrentImage(drone?.green)}
                ></div>
              )}
            </div>
            <h1 className="text-2xl mb-4">{drone?.name}</h1>
            <div className="flex justify-between py-4">
              <h1 className="text-xl">${drone?.price}</h1>
              <h1 className="text-md text-gray-500">
                <i className="fas fa-camera-retro mr-2"></i>
                {drone?.quality || 2013}p
              </h1>
              <h1 className="text-md text-gray-500">
                <i className="fas fa-car-battery mr-2"></i>
                {drone?.battery}
              </h1>
              <div className="text-md text-gray-500">
                ( <i className="fas fa-user mr-2"></i>
                {drone?.views || 10} Views)
              </div>
            </div>{" "}
            <p className="text-justify whitespace-pre-line">
              {drone?.description}
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <BookingForm
              droneId={droneId}
              dronePrice={drone?.price}
            ></BookingForm>
          </div>
        </div>
        <div className="mt-5 bg-white">
          <ProductReviews droneId={droneId}></ProductReviews>
        </div>
      </div>
    </>
  );
};

export default Purchase;
