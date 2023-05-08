import React from "react";
import { Col, Row } from "antd";

import ProductBody from "./Body";
import ProductGallery from "./Gallery";

const Index = () => {
  return (
    <>
      <div className="product-side">
        <p></p>
        <Row gutter={[58, 58]} className="mt-5">
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <ProductGallery />
          </Col>
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <ProductBody />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
