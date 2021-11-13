import React, { useEffect, useState } from "react";

const Services = () => {
  const [clients, setClients] = useState(0);
  const [resulation, setResulation] = useState(0);
  const [flights, setFlights] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (clients < 225) {
        setClients(clients + 5);
      }
      if (resulation < 2400) {
        setResulation(resulation + 50);
      }
      if (flights < 98) {
        setFlights(flights + 2);
      }
      if (projects < 54) {
        setProjects(projects + 1);
      }
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
    }, 50);
  }, [clients, resulation, flights, projects]);

  return (
    <>
      <div className="px:4 md:px-20 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          <div className="flex items-center justify-center p-2 shadow-sm border-2 border-red-400">
            <div className="p-5 bg-white border border-gray-300 w-full">
              <h1 className="font-black text-5xl fw-bold">{clients}+</h1>
              <p className="pt-3 text-red-700">Clients</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-2 shadow-sm border-2 border-red-400">
            <div className="p-5 bg-white border border-gray-300 w-full">
              <h1 className="font-black text-5xl fw-bold">{resulation}+</h1>
              <p className="pt-3 text-red-700">Resulation</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-2 shadow-sm border-2 border-red-400">
            <div className="p-5 bg-white border border-gray-300 w-full">
              <h1 className="font-black text-5xl fw-bold">{flights}+</h1>
              <p className="pt-3 text-red-700">Flights</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-2 shadow-sm border-2 border-red-400">
            <div className="p-5 bg-white border border-gray-300 w-full">
              <h1 className="font-black text-5xl fw-bold">{projects}+</h1>
              <p className="pt-3 text-red-700">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
