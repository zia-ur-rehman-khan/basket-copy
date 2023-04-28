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
import PlayerForm from "../SignUp/PlayerForm";
import LoginFormData from "./LoginForm";

const LoginForm = () => {
  const tabs = [
    { key: "1", label: "Sign Up as a Coach", children: <PlayerForm coach /> },
    { key: "2", label: "Sign Up as a iball Player", children: <PlayerForm /> },
  ];

  return (
    <div className="mt-5">
      <Space direction="vertical" size={5}>
        <CommonTextField
          text={"Welcome to Iball"}
          fontSize="29.64px"
          letterSpacing={"5px"}
        />

        <CommonHeading heading={"Sign Up as a iBall Player"} level={2} />

        <CommonTextField
          text={"Fill The Information below To create a New Account"}
        />
      </Space>
      <LoginFormData />
    </div>
  );
};

export default LoginForm;
