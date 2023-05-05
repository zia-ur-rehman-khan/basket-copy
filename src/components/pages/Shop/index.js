import React from "react";
import FeaturedProducts from "./Featured";
import AllProducts from "./All";
import Hero from "./Hero";
import CommonButton from "components/common/Button";
import CommonTextField from "components/common/TextField";

const Index = () => {
  return (
    <>
      <div className="shop-parent">
        <Hero />
        <FeaturedProducts />

        <AllProducts />
        <CommonTextField
          topClass={"p-5"}
          className={"primary "}
          textAlign={"center"}
          text="Load More"
        />
      </div>
    </>
  );
};

export default Index;
