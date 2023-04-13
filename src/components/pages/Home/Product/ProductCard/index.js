import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { Divider } from "antd";
import CommonTextField from "components/common/TextField";
import CommonButton from "components/common/Button";
import { Space } from "antd";
import CommonCard from "components/common/card";

const ProductCard = ({ image }) => {
  const { src, width, height } = image;
  return (
    <CommonCard
      child={
        <>
          <div>
            <Image src={src} alt="Picture of the author" />
          </div>
          <Space className="p-3" size={11} direction="vertical">
            <Divider />
            <CommonTextField
              text="Basketball with Net and Ring for Home and Outdoors"
              className="black"
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
              <CommonButton child="Add to Cart" />
              <CommonButton classname="black" child="Add to Wishlist" />
            </Space>
          </Space>
        </>
      }
    />
  );
};

export default ProductCard;
