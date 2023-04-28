import React from "react";
import { Col, Row } from "antd";

import ProductBody from "./Body";
import ProductGallery from "./Gallery";

const Index = () => {
  return (
    <>
      <div className="product-side">
        <p></p>
        <Row gutter={[33, 33]} className="mt-5 card-parent" wrap={false}>
          <Col span={12}>
            <ProductGallery />
          </Col>
          <Col span={12}>
            <ProductBody />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
