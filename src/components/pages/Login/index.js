import { Col, Row, Space } from "antd";
import CommonButton from "components/common/Button";
import CommonHeading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/register/signUp.png";

import React from "react";
import Image from "next/image";
import SignUpForm from "../SignUp/SignUp";
import LoginForm from "./Login";

const Login = () => {
  return (
    <Row gutter={[30, 58]} justify={"space-between"} className="main-login">
      <Col
        xxl={{ span: 12 }}
        xl={{ span: 12 }}
        lg={{ span: 12 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
      >
        <LoginForm />
      </Col>
      <Col
        xxl={{ span: 12 }}
        xl={{ span: 12 }}
        lg={{ span: 12 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
      >
        <Image
          priority={true}
          className="c-pointer"
          src={contentImage}
          alt="logo"
        />
      </Col>
    </Row>
  );
};

export default Login;
