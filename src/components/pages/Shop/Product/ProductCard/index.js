import { Col, Divider, Row, Space } from "antd";
import CommonButton from "components/common/Button";
import CommonTextField from "components/common/TextField";
import CommonCard from "components/common/Card";
import Image from "next/image";
import React from "react";
import star from "public/product/star.png";
import heart from "public/product/heart.png";

import Link from "next/link";
import Commonheading from "components/common/Heading";
import { useRouter } from "next/router";

const ProductCard = ({ productData, styling, featured }) => {
  const { id, src, width, height, category } = productData;
  const temp = [star, star, star, star, star];

  const { push } = useRouter();

  const handelClick = () => {
    push("productDetail/1");
  };

  return (
    <CommonCard
      style={styling}
      onClick={featured && handelClick}
      child={
        <div className="shop-product-parent w-100">
          <div className="image-side d-flex justify-content-center ">
            <Image
              src={src}
              alt="Picture of the author"
              layout="fixed"
              width={width}
              height={height}
            />
          </div>
          <Space className="p-3 w-100" size={5} direction="vertical">
            <Space className="justify-content-between w-100">
              <CommonTextField
                text={"White Jersey"}
                className={"black"}
                fontWeight={600}
                fontSize={"18px"}
              />
              <Space size={2}>
                {temp.map((t, key) => (
                  <Image src={t} alt="icon" key={key} width={18} height={17} />
                ))}
              </Space>
            </Space>
            <Space className="justify-content-between w-100">
              <CommonTextField
                text={"Organic Cotton"}
                fontWeight={500}
                color="#00000080"
              />
              {!featured && (
                <CommonTextField
                  text={"£20.00"}
                  className={"black"}
                  fontWeight={600}
                  fontSize={"18px"}
                />
              )}
            </Space>
            <div className="button-session w-100 mt-3 d-flex align-items-center">
              <CommonButton
                child={featured ? "Learn More" : "Add to Cart"}
                topClass="cart"
              />
              {featured ? (
                <CommonTextField
                  text={"£20.00"}
                  color="#FF6600"
                  fontWeight={600}
                  fontSize={"18px"}
                />
              ) : (
                <div className="icon d-flex justify-content-center align-items-center">
                  <Image
                    src={heart}
                    alt=""
                    layout="fixed"
                    width={18}
                    height={15.75}
                  />
                </div>
              )}
            </div>
          </Space>
        </div>
      }
    />
  );
};

export default ProductCard;
