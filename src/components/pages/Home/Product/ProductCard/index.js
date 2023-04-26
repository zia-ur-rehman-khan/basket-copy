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
      style={{ margin: "0 10px", height: "485px" }}
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
