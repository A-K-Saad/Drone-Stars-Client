import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Reviews from "../Reviews/Reviews";
import Drone from "./Drone/Drone";
import "./Home.css";
import Shots from "./Shots/Shots";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="py-10 text-center">
        <div className="px-5 md:px-12 lg:px-32">
          <Services></Services>
        </div>
        <Drone></Drone>
        <Shots></Shots>
        <Reviews sliceQuantity={2}></Reviews>
      </div>
    </>
  );
};

export default Home;
