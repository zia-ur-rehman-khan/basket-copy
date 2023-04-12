import React from "react";
import Image from "next/image";
import CommonTextField from "components/common/TextField";
import Commonheading from "components/common/Heading";
import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import { Space } from "antd";

const ImageContent = ({ src, content, className, responsive }) => {
  return (
    <div className="product-side p-5">
      <Row gutter={[58, 58]} align="middle" className={`${className || ""}`}>
        <Col
          xxl={{ span: responsive.imagelarge }}
          xl={{ span: responsive.imagelarge }}
          lg={{ span: responsive.imagelarge }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Image className="c-pointer" src={src} alt="logo" />
        </Col>
        <Col
          xxl={{ span: responsive.contentlarge }}
          xl={{ span: responsive.contentlarge }}
          lg={{ span: responsive.contentlarge }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          {content}
        </Col>
      </Row>
    </div>
  );
};

export default ImageContent;
