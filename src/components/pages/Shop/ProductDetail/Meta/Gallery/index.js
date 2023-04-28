import React from "react";

import { Col, Divider, Row, Space } from "antd";
import CommonCard from "components/common/Card";
import Image from "next/image";

import tempImage from "public/product/product1.png";
const Index = () => {
  return (
    <>
      <div className="product_gallery_wrapper">
        <Row>
          <Col span={18}>
            <div style={{ height: "500px" }}>
              <CommonCard
                child={
                  <>
                    <div>
                      <Image src={tempImage} alt="Picture" />
                    </div>
                  </>
                }
              />
            </div>
          </Col>
          <Col span={6}>
            <div
              className="product_images"
              style={{ margin: "10px 0px 10px 0px" }}
            >
              <CommonCard
                child={
                  <>
                    <div>
                      <Image src={tempImage} alt="Picture" />
                      {/* <p>kdhskdjhsdks</p> */}
                    </div>
                  </>
                }
              />
            </div>

            <div
              className="product_images"
              style={{ margin: "10px 0px 10px 0px" }}
            >
              <CommonCard
                child={
                  <>
                    <div>
                      <Image src={tempImage} alt="Picture" />
                      {/* <p>kdhskdjhsdks</p> */}
                    </div>
                  </>
                }
                className="product_images"
              />
            </div>
            <div
              className="product_images"
              style={{ margin: "10px 0px 10px 0px" }}
            >
              <CommonCard
                child={
                  <>
                    <div>
                      <Image src={tempImage} alt="Picture" />
                      {/* <p>kdhskdjhsdks</p> */}
                    </div>
                  </>
                }
                className="product_images"
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
