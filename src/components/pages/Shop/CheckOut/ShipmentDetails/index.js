import { Space } from "antd";
import { Divider } from "antd";
import { Col, Row } from "antd";
import { Radio } from "antd";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const { push } = useRouter();

  const handelRoute = () => {
    push("/profile");
  };
  return (
    <Space direction="vertical w-100" size={20}>
      <Space direction="vertical">
        <CommonTextField
          text="Shipment Details"
          fontWeight={600}
          fontSize={"18px"}
        />
        <CommonTextField
          text="Use Saved Addresses"
          fontWeight={600}
          fontSize={"15px"}
        />
      </Space>
      <div
        style={{ background: "#1D1D1D", borderRadius: "9px" }}
        className="p-3"
      >
        <Space className="justify-content-between w-100 p-2">
          <Space direction="vertical">
            <CommonTextField text="Country: United States" />
            <CommonTextField text="State: Texas" />
            <CommonTextField text="Address: 10515 Fox Ave Fairdale, Kentucky(KY), 40118" />
            <CommonTextField text="Phone: +44-123-456-789" />
          </Space>
          <Radio></Radio>
        </Space>
        <Divider style={{ opacity: "0.29", borderTop: " 1px solid #707070" }} />
        <Space className="justify-content-between w-100 p-2">
          <Space direction="vertical">
            <CommonTextField text="Country: United States" />
            <CommonTextField text="State: Texas" />
            <CommonTextField text="Address: 10515 Fox Ave Fairdale, Kentucky(KY), 40118" />
            <CommonTextField text="Phone: +44-123-456-789" />
          </Space>
          <Radio></Radio>
        </Space>
      </div>
      <CommonButton
        width={"100%"}
        child="Add New Address"
        background={"#1D1D1D"}
        color={"#FF6600"}
        border={"1px solid #FF6600"}
        onClick={handelRoute}
      />
    </Space>
  );
};

export default Index;
