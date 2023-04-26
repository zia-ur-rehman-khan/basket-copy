import React from "react";
import FeaturedProducts from "./Featured";
import AllProducts from "./All";
import Hero from "./Hero";
import CommonButton from "components/common/Button";

const index = () => {
  return (
    <>
      <div className="carasoul-container">
        <Hero />
        <FeaturedProducts />
        <AllProducts />
        <CommonButton
          child="Load More"
          classname="load-products-btn"
          topClass="load-products"
          style={{
            margin:"50px auto 50px auto"
          }}
        />
      </div>
    </>
  );
};

export default index;
