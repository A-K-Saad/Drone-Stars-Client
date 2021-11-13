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
        <div className="px-5 md:px-12">
          <Services></Services>
        </div>
        <Products quantity={6}></Products>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
