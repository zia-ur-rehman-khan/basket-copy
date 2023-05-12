import { Input } from "antd";
import { Tabs } from "antd";
import { Select } from "antd";
import { Col, Row, Space } from "antd";
import CommonButton from "components/common/Button";
import CommonHeading from "components/common/Heading";
import CommonInputField from "components/common/Input";
import CommonSelect from "components/common/Select";
import CommonTextField from "components/common/TextField";
import React from "react";
import PlayerForm from "./PlayerForm";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const { push, query } = useRouter();

  const handelRoute = (t) => {
    push(t);
  };

  const tabs = [
    { key: "1", label: "Sign Up as a Coach", children: <PlayerForm coach /> },
    { key: "2", label: "Sign Up as an iball Player", children: <PlayerForm /> },
  ];

  return (
    <div className="mt-5">
      <Space direction="vertical" size={15}>
        <CommonTextField
          text={"Welcome to Iball"}
          fontSize="29.64px"
          letterSpacing={"5px"}
        />

        <CommonHeading heading={"Sign Up as an iBall Player"} level={2} />
        <Space size={8} className="mb-3">
          <CommonTextField text={"Already A memeber ?"} />
          <CommonTextField
            text={"Sign In"}
            color="#4DC3D1"
            fontWeight={600}
            className={"c-pointer"}
            onClick={() => {
              handelRoute("/login");
            }}
          />
        </Space>
      </Space>
      <Tabs
        defaultActiveKey={query.type === "player" ? "2" : "1"}
        items={tabs}
        className="register-tab"
      />
    </div>
  );
};

export default SignUpForm;
