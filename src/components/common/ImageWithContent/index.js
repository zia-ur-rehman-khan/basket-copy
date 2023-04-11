import React from "react";
import Image from "next/image";
import banner from "public/image.png";
import CommonTextField from "components/common/TextField";
import Commonheading from "components/common/Heading";
import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import { Space } from "antd";

const ImageContent = () => {
  return (
    <div className="product_side p-5">
      <Row gutter={[58, 58]} align="middle">
        <Col
          xxl={{ span: 14 }}
          xl={{ span: 14 }}
          lg={{ span: 14 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Image
            src={banner}
            sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
            alt="logo"
          />
        </Col>
        <Col
          xxl={{ span: 10 }}
          xl={{ span: 10 }}
          lg={{ span: 10 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <CommonTextField fontSize="20px" text="Learn more about Iball" />
          <Commonheading level={2} heading="Learn who we are and what we do" />
          <Space direction="vertical" size={24}>
            <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
            <CommonButton child="learn more" type="primary" />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default ImageContent;
