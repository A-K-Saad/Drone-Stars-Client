import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import BookingForm from "../../components/BookingForm/BookingForm";
import Ripple from "material-ripple-effects";

const Purchase = () => {
  const [drone, setDrone] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { droneId } = useParams();
  const history = useHistory();
  const ripple = new Ripple();

  useEffect(() => {
    fetch("https://mysterious-falls-17889.herokuapp.com/drones")
      .then((res) => res.json())
      .then((data) => {
        const drone = data?.find((d) => d._id === droneId);
        setDrone(drone);
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
      <div className="my-10 px-2 md:px-32 text-center">
        <div className="grid md:grid-cols-12 w-full gap-8">
          <div className="col-span-12 md:col-span-7 text-center">
            <img src={drone?.image} alt={drone?.name} className="m-auto" />
            <h1 className="text-2xl mb-4">{drone?.name}</h1>
            <div className="flex justify-between py-4">
              <h1 className="text-xl">${drone?.price}</h1>
              <h1 className="text-md text-gray-500">
                <i className="fas fa-camera-retro mr-2"></i>
                {drone?.quality}p
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
          <div className="col-span-12 md:col-span-5 p-3">
            <BookingForm
              droneId={droneId}
              dronePrice={drone?.price}
            ></BookingForm>
          </div>
        </div>
        <button
          className="mt-5 py-2 px-8 mx-2 rounded text-white transition-colors duration-150 bg-red-500 focus:shadow-outline hover:bg-red-600 border border-transparent"
          onClick={() => history.goBack() || history.push("/")}
          onMouseUp={(e) => ripple.create(e, "dark")}
        >
          <i className="fas fa-backward mr-2"></i> Back
        </button>
      </div>
    </>
  );
};

export default Purchase;
