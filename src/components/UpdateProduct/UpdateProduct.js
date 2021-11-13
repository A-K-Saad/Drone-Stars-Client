import React from "react";

const UpdateProduct = ({ productId }) => {
  return (
    <>
      <div className="absolute w-full h-full">
        <div className="flex items-center justify-center bg-black">
          <h1>Update Product {productId}</h1>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
