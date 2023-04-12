import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { Divider } from "antd";
import CommonTextField from "components/common/TextField";
import CommonButton from "components/common/Button";
import { Space } from "antd";

const ProductCard = ({ image }) => {
  const { src, width, height } = image;
  return (
    <div className="product-card">
      <div className="card_image">
        <Image
          src={src}
          alt="Picture of the author"
          width={width}
          height={height}
        />
      </div>
      <Space className="card-content" direction="vertical">
        <Divider />
        <CommonTextField
          text="Basketball with Net and Ring for Home and Outdoors"
          color="#000000"
          fontSize="23px"
          fontWeight="600"
        />
        <CommonTextField
          text="Pt 2000"
          color="#FF6600"
          fontSize="23px"
          fontWeight="600"
        />
        <Space>
          <CommonButton width={"250px"} child="Add to Cart" />
          <CommonButton classname="black" child="Add to Wishlist" />
        </Space>
      </Space>
    </div>
  );
};

export default ProductCard;
