import React from "react";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="py-10 text-center">
        <Services></Services>
        <Products quantity={6}></Products>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
