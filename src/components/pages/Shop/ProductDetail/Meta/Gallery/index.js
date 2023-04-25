import React from "react";

import { Col, Divider, Row, Space } from "antd";
import CommonCard from "components/common/Card";
import Image from "next/image";

const index = () => {
  return (
    <>
      <div className="product_gallery_wrapper">
        <Row>
          <Col span={18}>
            <CommonCard
              child={
                <>
                  <div>
                    <Image src={`/image.png`} alt="Picture" layout="fill" />
                  </div>
                </>
              }
            />
          </Col>
          <Col span={6}>
            <CommonCard
              child={
                <>
                  <div>
                    {/* <Image src={`/image.png`} alt="Picture" layout="fill" /> */}
                    <p>kdhskdjhsdks</p>
                  </div>
                </>
              }
            />
            <CommonCard
              child={
                <>
                  <div>
                    {/* <Image src={`/image.png`} alt="Picture" layout="fill" /> */}
                    <p>kdhskdjhsdks</p>
                  </div>
                </>
              }
            />
            <CommonCard
              child={
                <>
                  <div>
                    {/* <Image src={`/image.png`} alt="Picture" layout="fill" /> */}
                    <p>kdhskdjhsdks</p>
                  </div>
                </>
              }
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default index;
