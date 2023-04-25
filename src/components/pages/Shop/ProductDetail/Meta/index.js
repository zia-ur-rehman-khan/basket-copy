import React from "react";
import { Col, Row } from "antd";

import ProductBody from "./Body";
import ProductGallery from "./Gallery";

const index = () => {
  return (
    <>
      <div className="product-side">
        <p>product meta wil be display here</p>
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

export default index;
