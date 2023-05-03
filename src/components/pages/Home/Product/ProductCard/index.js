import { Divider, Space } from "antd";
import CommonButton from "components/common/Button";
import CommonTextField from "components/common/TextField";
import CommonCard from "components/common/Card";
import Image from "next/image";
import React from "react";

const ProductCard = ({ image }) => {
  const { src, width, height } = image;
  return (
    <CommonCard
      style={{ margin: "0 10px" }}
      child={
        <div className="product-card-home">
          <div className="product-image">
            <Image
              src={src}
              alt="Picture of the author"
              layout="fixed"
              width={width}
              height={height}
            />
          </div>
          <Space className="p-3" size={11} direction="vertical">
            <Divider />
            <CommonTextField
              text="Basketball with Net and Ring for Home and Outdoors"
              className="black card-title"
            />
            <CommonTextField
              text="Pt 2000"
              color="#FF6600"
              fontSize="18.75px"
              fontWeight="600"
            />
            <div className="button-session">
              <CommonButton child="Add to Cart" topClass="cart" />
              <CommonButton classname="black" child="Add to Wishlist" />
            </div>
          </Space>
        </div>
      }
    />
  );
};

export default ProductCard;
