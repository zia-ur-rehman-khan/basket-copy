import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import React from "react";
import data from "json/staticData.json";
import { Space } from "antd";

const Privacypolicy = () => {
  return (
    <Space direction="vertical" className="common-padding" align="center">
      <CommonHeading
        heading={"Privacy Policy"}
        className="mb-5"
        fontSize={"71px"}
      />
      <Space direction="vertical" size={30}>
        <CommonTextField text={data.termsConditions1} />
        <CommonTextField text={data.termsConditions2} />
        <CommonTextField text={data.termsConditions3} />
        <CommonTextField text={data.termsConditions4} />
      </Space>
    </Space>
  );
};

export default Privacypolicy;
