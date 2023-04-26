import { Col, Row } from "antd";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import region1 from "public/region/region1.png";
import region2 from "public/region/region2.png";
import region3 from "public/region/region3.png";
import region4 from "public/region/region4.png";

import React from "react";
import { Input } from "antd";
import { Space } from "antd";
import CommonSelect from "components/common/Select";
import IballerCard from "components/pages/School/SchoolDetailes/Iballers/IballerCard";
import CommonCard from "components/common/Card";
import Image from "next/image";
import CommonButton from "components/common/Button";
import { useRouter } from "next/router";
import RegionCard from "./RegionCard";

const { Search } = Input;

const PlayerRegion = ({ type }) => {
  const { push } = useRouter();
  const handelRoute = () => {
    push({ pathname: "/what-we-do/register", query: { t: type } });
  };

  const array = [
    region1,
    region2,
    region3,
    region4,
    region1,
    region2,
    region3,
    region4,
    region1,
    region2,
    region3,
    region4,
  ];

  return (
    <div>
      <Row
        align={"middle"}
        justify={"space-between"}
        className="mt-5"
        gutter={[20, 20]}
      >
        <Col
          xxl={{ span: 14 }}
          xl={{ span: 14 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Commonheading level={2} heading={`Iball  Academy ${type} Region`} />
        </Col>
        <Col
          xxl={{ span: 10 }}
          xl={{ span: 10 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Space size={20} wrap={true} className="w-100 justify-content-end">
            <Space>
              <CommonTextField text={`${type} Region:`} />
              <CommonSelect
                className="simple-select"
                defaultValue="lucy"
                width={120}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Space>
            <CommonButton
              child={`Register as an iBall ${type}`}
              onClick={handelRoute}
            />
          </Space>
        </Col>
      </Row>
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
            <RegionCard src={_t} />
          </Col>
        ))}
        <CommonTextField
          text="View More"
          color="#4DC3D1"
          className={"c-pointer"}
        />
      </Row>
    </div>
  );
};

export default PlayerRegion;
