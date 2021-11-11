import React from "react";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="py-10 text-center">
        <Products quantity={6}></Products>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
