import React from "react";

import { Col, Divider, Row, Space } from "antd";

import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";
import tempImage from "public/product/product1.png";
import star from "public/product/star.png";
import free from "public/product/free.png";
import secure from "public/product/secure.png";
import delivery from "public/product/delivery.png";

import Image from "next/image";
import { useRouter } from "next/router";
import CommonTextField from "components/common/TextField";

const Index = () => {
  const { push } = useRouter();

  const handelRoute = () => {
    push("/cart");
  };

  const temp = [star, star, star, star, star];
  const colors = ["#454545", "#B81818", "#46B472", "#2861B6"];

  return (
    <>
      <div className="meta-main">
        <Space direction="vertical" className="w-100" size={0}>
          <Space className="justify-content-between w-100">
            <Commonheading level={2} heading={"Black iBall Hoodie"} />
            <CommonTextField
              fontSize={"28.5px"}
              fontWeight={600}
              text={"£20.00"}
              color="#FF6600"
            />
          </Space>

          <Space size={20}>
            <CommonTextField
              text={"Organic Cotton"}
              color=" rgba(255, 255, 255, 0.5)"
              fontSize={"16.5px"}
            />
            <Space size={2}>
              {temp.map((t, key) => (
                <Image src={t} alt="icon" key={key} width={15} height={13} />
              ))}
            </Space>
          </Space>
        </Space>
        <Commonheading level={4} heading={"Description"} className={"mt-5"} />
        <CommonTextField
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          className={"mt-2"}
        />

        <Row className="mt-4" gutter={[48, 10]}>
          <Col>
            <Space size={30}>
              <CommonTextField text={"Quantity:"} />
              <Space>
                <CommonButton
                  child={"-"}
                  background={"#454545"}
                  border={"none"}
                  height="22px"
                  width="22px"
                  padding="0px"
                />
                <CommonTextField text={"05"} />
                <CommonButton
                  child={"+"}
                  height="22px"
                  width="22px"
                  padding="0px"
                />
              </Space>
            </Space>
          </Col>
          <Col>
            <Space size={10}>
              <CommonTextField text={"colors:"} />
              <Space size={18}>
                {colors.map((_t, index) => (
                  <CommonButton
                    key={index}
                    child={" "}
                    background={_t}
                    height="22px"
                    width="22px"
                    border={"none"}
                    padding="0px"
                  />
                ))}
              </Space>
            </Space>
          </Col>
        </Row>
        <Space size={30} className="mt-5" wrap>
          <Space align="end">
            <Image
              src={delivery}
              alt="imgae"
              layout="fixed"
              width={"28.34"}
              height={"27px"}
            />
            <Space direction="vertical" size={0}>
              <CommonTextField text={"Next Day"} fontSize={"9.75px"} />
              <CommonTextField text={"Delivery"} />
            </Space>
          </Space>
          <Divider type="vertical" />

          <Space align="end">
            <Image
              src={free}
              alt="imgae"
              layout="fixed"
              width={"36px"}
              height={"26px"}
            />
            <Space direction="vertical" size={0}>
              <CommonTextField text={"Free Shipping"} fontSize={"9.75px"} />
              <CommonTextField text={"with $50 Order"} />
            </Space>
          </Space>
          <Divider type="vertical" />

          <Space align="end">
            <Image
              src={secure}
              alt="imgae"
              layout="fixed"
              width={"26.25px"}
              height={"28.5px"}
            />
            <Space direction="vertical" size={0}>
              <CommonTextField text={"Free Shipping"} fontSize={"9.75px"} />
              <CommonTextField text={"with $50 Order"} />
            </Space>
          </Space>
        </Space>

        <Row className="mt-5" gutter={[16, 16]}>
          <Col span={12}>
            <CommonButton
              child={"Add to Cart"}
              width={"100%"}
              onClick={handelRoute}
            />
          </Col>
          <Col span={12}>
            <CommonButton
              child={"Add to Wishlist "}
              background={"#8F8F8F"}
              color="#ffffff"
              width={"100%"}
              border={"none"}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
