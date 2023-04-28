import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import sponser1 from "public/sponsers/sponser1.png";
import sponser2 from "public/sponsers/sponser2.png";
import sponser3 from "public/sponsers/sponser3.png";
import sponser4 from "public/sponsers/sponser4.png";
import sponser5 from "public/sponsers/sponser5.png";
import sponser6 from "public/sponsers/sponser6.png";
import sponser7 from "public/sponsers/sponser7.png";
import sponser8 from "public/sponsers/sponser8.png";

import React from "react";
import { Select } from "antd";
import { Space } from "antd";
import CommonSelect from "components/common/Select";
import WorkWithCard from "components/pages/School/WorkWith/card";

const OurPartner = ({ head }) => {
  const array = [
    sponser1,
    sponser2,
    sponser3,
    sponser5,
    sponser4,
    sponser6,
    sponser7,
    sponser8,
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center ">
        <Commonheading level={2} heading={`Our ${head}s`} />
        <CommonButton child={`${head} With Us`} />
      </div>
      <Row gutter={[33, 33]} justify={"center"} className="mt-5 card-parent">
        {array.map((_t, key) => (
          <Col
            key={key}
            xxl={{ span: 6 }}
            xl={{ span: 6 }}
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 16 }}
          >
            <WorkWithCard src={_t} partner />
          </Col>
        ))}
      </Row>
      <CommonTextField
        topClass={"p-5"}
        color="#4DC3D1"
        textAlign={"center"}
        text="View More"
        className={"c-pointer"}
      />
    </div>
  );
};

export default OurPartner;
