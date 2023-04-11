import React from "react";
import ProductCard from "./ProductCard";
import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";
import { Space } from "antd";
import basketBall from "public/product/product1.png";
import tshirt from "public/product/product2.png";
import shoes from "public/product/product3.png";
import socks from "public/product/product4.png";
import CommonTextField from "components/common/TextField";

const Product = () => {
  const temp = [
    { src: basketBall, width: 218, height: 218 },
    { src: tshirt, width: 223, height: 286 },
    { src: shoes, width: 357, height: 213 },
    { src: socks, width: 244, height: 243 },
  ];

  return (
    <div className="pl-5">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Commonheading heading={"Featured Product"} />
        <CommonButton child="View More" />
      </div>
      <div className="card_parent mt-3">
        {temp.map((_t, key) => (
          <ProductCard image={_t} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Product;
