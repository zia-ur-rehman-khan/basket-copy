import React from "react";

import { Col, Divider, Row, Space } from "antd";
import CommonCard from "components/common/Card";
import Image from "next/image";

import tempImage from "public/product/product2.png";
const Index = () => {
  return (
    <>
      <div className="product_gallery_wrapper">
        <Row gutter={[10, 10]}>
          <Col span={18}>
            <div style={{ height: "100%" }}>
              <CommonCard
                // className="d-flex flex-column justify-content-center align-items-center  "
                child={
                  <>
                    <div>
                      <Image src={tempImage} alt="Picture" />
                    </div>
                  </>
                }
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Col>
          <Col span={6}>
            <div
              className="product_images"
              style={{ margin: "10px 0px 10px 0px" }}
            >
              <CommonCard
                style={{ padding: "10px" }}
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
                style={{ padding: "10px" }}
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
                style={{ padding: "10px" }}
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
