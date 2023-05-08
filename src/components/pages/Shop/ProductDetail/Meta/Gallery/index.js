import React from "react";

import { Col, Divider, Row, Space } from "antd";
import CommonCard from "components/common/Card";
import Image from "next/image";

import tempImage from "public/product/product2.png";
import product5 from "public/product/product5.png";

const Index = () => {
  return (
    <>
      <div className="product_gallery_wrapper">
        <Row gutter={[20, 20]}>
          <Col span={18}>
            <div style={{ height: "100%" }}>
              <CommonCard
                child={<Image src={tempImage} alt="Picture" />}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Col>
          <Col span={6}>
            <Space direction="vertical">
              {new Array(3).fill(1).map((_, index) => (
                <CommonCard
                  key={index}
                  child={
                    <div style={{ padding: "10px" }}>
                      <Image src={product5} alt="Picture" />
                    </div>
                  }
                />
              ))}
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
