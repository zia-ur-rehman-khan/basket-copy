import { Input } from "antd";
import { Divider } from "antd";
import { Space } from "antd";
import { Radio } from "antd";
import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import CommonInputField from "components/common/Input";
import CommonSelect from "components/common/Select";
import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React from "react";

const LoginFormData = ({ coach }) => {
  const { push } = useRouter();

  const handelRoute = (t) => {
    push(t);
  };

  return (
    <div>
      <CommonTextField
        className={"mb-4 "}
        text={
          coach
            ? "Fill The Information below To create a New Account"
            : "Personal Information"
        }
      />

      <Row gutter={[14, 14]} className="signUp-main">
        <Col span={24}>
          <CommonInputField placeholder="First Name" />
        </Col>
        <Col span={24}>
          <CommonInputField placeholder="Last Name" />
        </Col>
        <Col span={24}>
          <div className="d-flex justify-content-between">
            <Space>
              <CommonTextField
                text={"Remember Me"}
                opacity="0.5"
                fontSize={"14px"}
              />
              <Radio.Group>
                <Radio value={1}></Radio>
              </Radio.Group>
            </Space>
            <CommonTextField
              text={"Forgot Password ?"}
              fontSize={"14px"}
              opacity="0.5"
              className={"c-pointer"}
              onClick={() => handelRoute("/forgot-password")}
            />
          </div>
        </Col>
      </Row>

      <CommonButton
        child={"Submit"}
        classname={"mt-4"}
        height={"45px"}
        onClick={() => handelRoute("/")}
      />

      <Divider plain>
        <CommonTextField text="Not A member ? Sign Up Now" />
      </Divider>
      <div className="d-flex justify-content-between" style={{ gap: "25px" }}>
        <CommonButton
          topClass="w-100"
          type="default"
          child={"Sign Up as a Coach"}
          height={"45px"}
          onClick={() => handelRoute("/sign-up")}
        />
        <CommonButton
          topClass="w-100"
          type="default"
          child={"Sign Up as a Player"}
          height={"45px"}
          onClick={() => handelRoute("/sign-up")}
        />
      </div>
    </div>
  );
};

export default LoginFormData;
