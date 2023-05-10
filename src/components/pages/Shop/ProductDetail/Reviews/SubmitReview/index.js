import React from "react";

import { Input } from "antd";
const { TextArea } = Input;
import { Col, Divider, Row, Space } from "antd";

import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import star from "public/product/star.png";
import { useRouter } from "next/router";

const Index = () => {
  const { push } = useRouter();

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const handelRoute = (pid) => {
    push(`/productDetail/${pid}`);
  };

  const temp = [star, star, star, star, star];

  return (
    <>
      <div className="review_form p-5" style={{ width: "60%", margin: "auto" }}>
        <Space
          direction="vertical"
          className="flex-column align-items-center w-100 mb-4"
        >
          <CommonTextField
            fontSize={"21px"}
            text={"Review"}
            className={"text-uppercase"}
          />
          <Commonheading
            level={1}
            heading={"Submit Your Review"}
            className={"mb-4"}
          />
        </Space>
        <TextArea
          showCount
          maxLength={100}
          style={{
            height: 220,
            resize: "none",
          }}
          onChange={onChange}
          placeholder="Share Your experience with our product"
        />
        <Row className={"mb-4 mt-4"}>
          <Col span={12} className=" d-flex flex-column align-items-start">
            <Commonheading level={3} heading={"Rate Your Experience :"} />
          </Col>
          <Col span={12} className=" d-flex flex-column align-items-end">
            <Space size={2}>
              {temp.map((t, key) => (
                <Image src={t} alt="icon" key={key} width={31.5} height={30} />
              ))}
            </Space>
          </Col>
        </Row>
        <CommonButton
          child={"Submit Review"}
          classname={"mt-4"}
          height={"45px"}
          width={"100%"}
          onClick={() => handelRoute(1)}
        />
      </div>
    </>
  );
};

export default Index;
