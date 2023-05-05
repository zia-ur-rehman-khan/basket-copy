import React from "react";
import { Row, Col } from "antd";
import { personalInfo } from "data";
import CommonTextField from "components/common/TextField";
const Information = () => {
  return (
    <div className="information__wrapp">
      <Row>
        {personalInfo?.map((pInfo, i) => (
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            key={i}
          >
            <div className="info__box">
              <Row>
                <Col span={2}>{pInfo?.ico}</Col>
                <Col span={12}>
                  <CommonTextField
                    text={`${pInfo?.text}:`}
                    fontSize="13.5px"
                    color="#fafafa99"
                  />
                  <CommonTextField
                    text={pInfo?.labelValue}
                    fontSize="16.5px"
                    color="#fafafa99"
                    mt={10}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Information;
