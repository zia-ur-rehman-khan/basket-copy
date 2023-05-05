import React from "react";
import { Row, Col } from "antd";
import { schollInfo } from "data";
const SchoolInformation = () => {
  return (
    <div className="information__wrapp">
      <Row>
        {schollInfo?.map((pInfo, i) => (
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            span={12}
            key={i}
          >
            <div className="info__box">
              <Row>
                <Col span={2}>{pInfo?.ico}</Col>
                <Col span={12}>
                  <p className="label__text">{pInfo?.text}</p>
                  <p className="label__value">{pInfo?.labelValue}</p>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SchoolInformation;
