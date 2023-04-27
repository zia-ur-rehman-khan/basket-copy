import CommonBanner from "components/common/Banner";
import React, { useState } from "react";
import banner from "public/school/detailBanner.png";
import { Col, Row, Tabs } from "antd";
import CommonHeading from "components/common/Heading";
import { Space } from "antd";
import OurAcademy from "../Event/AcademyPage/OurAcademy";
import CommonTextField from "components/common/TextField";
import ViewMore from "./ViewMore";
import { useRouter } from "next/router";

const Media = () => {
  const [activeKey, setActiveKey] = useState("1");

  const tabs = [
    { key: "1", label: "Pictures" },
    { key: "2", label: "videos" },
  ];

  function handleTabChange(key) {
    setActiveKey(key);
  }

  return (
    <div>
      <CommonBanner src={banner} heading={"Gallery"} />
      <Row
        gutter={[0, 30]}
        className="common-padding"
        justify={"space-between"}
        align={"middle"}
      >
        <CommonHeading level={2} heading={"Browse Our Gallery"} />
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Tabs
            onChange={handleTabChange}
            defaultActiveKey="1"
            items={tabs}
            className="my-tabs"
            type="card"
          />
        </Col>
      </Row>

      <div className="common-padding">
        {activeKey === "1" ? (
          <>
            <ViewMore picture />
            <CommonTextField
              topClass={"p-5"}
              className={"primary "}
              textAlign={"center"}
              text="View More"
            />
          </>
        ) : (
          <>
            <ViewMore />
            <CommonTextField
              topClass={"p-5"}
              className={"primary "}
              textAlign={"center"}
              text="View More"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Media;
