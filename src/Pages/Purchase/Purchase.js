import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import BookingForm from "../../components/BookingForm/BookingForm";

const Purchase = () => {
  const [drone, setDrone] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { droneId } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:5000/drones")
      .then((res) => res.json())
      .then((data) => {
        const drone = data.find((d) => d._id === droneId);
        setDrone(drone);
      });
    return setIsLoading(false);
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
        <div className="grid md:grid-cols-5 w-full gap-8">
          <div className="col-span-3 text-center">
            <img src={drone?.image} alt={drone?.name} className="m-auto" />
            <h1 className="text-2xl mb-4">{drone?.name}</h1>
            <div className="flex justify-between py-4">
              <h1 className="text-xl">${drone?.price}</h1>
              <h1 className="text-md text-gray-500">
                <i className="fas fa-camera-retro mr-2"></i>
                {drone?.quality}p
              </h1>
              <div className="text-md text-gray-500">
                ( <i className="fas fa-user"></i>
                {drone?.views || 10} Views)
              </div>
            </div>{" "}
            <p className="text-justify">{drone?.description}</p>
          </div>
          <div className="col-span-2 p-3">
            <BookingForm
              droneId={droneId}
              dronePrice={drone?.price}
            ></BookingForm>
          </div>
        </div>
        <button
          className="mt-5 py-2 px-8 mx-2 rounded text-white transition-colors duration-150 bg-red-500 focus:shadow-outline hover:bg-red-600 border border-transparent"
          onClick={() => history.goBack() || history.push("/")}
        >
          <i className="fas fa-backward mr-2"></i> Back
        </button>
      </div>
    </>
  );
};

export default Purchase;
