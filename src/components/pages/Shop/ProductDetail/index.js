import React from "react";
import Hero from "../Hero";
import ProductReviews from "./Reviews";
import SimilarProducts from "../Similar";
import RecentlyProducts from "../Recently";
import ProductMeta from "./Meta";

const index = () => {
  return (
    <>
      <div className="carasoul-container">
        <ProductMeta />
        <ProductReviews />
        <SimilarProducts />
        <RecentlyProducts />
      </div>
    </>
  );
};

export default index;
