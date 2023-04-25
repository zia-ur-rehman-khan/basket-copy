import { Col, Divider, Row, Space } from "antd";
import CommonButton from "components/common/Button";
import CommonTextField from "components/common/TextField";
import CommonCard from "components/common/Card";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProductCard = ({ productData }) => {
  const { id, src, width, height, category } = productData;
  return (
    <CommonCard
      child={
        <>
          <div>
            <Image src={src} alt="Picture of the author" />
          </div>
          <Space className="p-3" size={11} direction="vertical">
            <div>
              <Row>
                <Col span={12}>
                  <CommonTextField
                    text="White Jersey"
                    className="black"
                    fontSize="25px"
                    fontWeight="600"
                    color="#000000"
                  />
                  <CommonTextField
                    text="Organic Cotton"
                    className="black"
                    fontSize="17px"
                    fontWeight="500"
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
                    <CommonButton
                      child="£20.00"
                      classname="product-price"
                      // topClass="load-products"
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
                <CommonButton
                  child="£20.00"
                  classname="product-price"
                  // topClass="load-products"
                />
              ) : null}
              {category == "all" ? (
                <CommonButton
                  child="❤️"
                  classname="product-favourite"
                  // topClass="load-products"
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
