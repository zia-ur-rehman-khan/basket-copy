import { Col, Divider, Row, Space } from "antd";
import CommonButton from "components/common/Button";
import CommonTextField from "components/common/TextField";
import CommonCard from "components/common/Card";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Commonheading from "components/common/Heading";

const ProductCard = ({ productData }) => {
  const { id, src, width, height, category } = productData;
  return (
    <CommonCard
      child={
        <>
          <div className="product-image-wrapper">
            <Image src={src} alt="Picture " className="product-image" />
          </div>
          <Space className="p-3" size={11} direction="vertical">
            <div>
              <Row>
                <Col span={12}>
                  <Commonheading
                    level={4}
                    heading={"White Jersey"}
                    color="#000000"
                  />
                  <Commonheading
                    level={5}
                    heading={"Organic Cotton"}
                    color="rgba(0, 0, 0, 0.5)"
                  />
                </Col>
                <Col span={12}>
                  <ul className="product-reviews">
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                  </ul>
                  {category == "all" ? (
                    <Commonheading
                      level={5}
                      heading={"£20.00"}
                      color={"#FF6600"}
                      className={"product-price"}
                    />
                  ) : null}
                </Col>
              </Row>
            </div>

            <Space>
              <Link href={`productDetail/1`}>
                <CommonButton
                  child="Learn More"
                  classname="product-details"
                  width={160}
                />
              </Link>
              {category == "featured" ? (
                <Commonheading
                  level={5}
                  heading={"£20.00"}
                  color={"#FF6600"}
                  className={"product-price"}
                />
              ) : null}
              {category == "all" ? (
                <CommonButton
                  child="❤️"
                  classname="product-favourite"
                  background={"#000000"}
                  color={"#000000"}
                />
              ) : null}
            </Space>
          </Space>
        </>
      }
    />
  );
};

export default ProductCard;
