import React, { useEffect, useState } from "react";
import logo from "public/logo.png";
import Image from "next/image";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import { Col, Row } from "antd";
import CommonInputField from "components/common/Input";
import { Input } from "antd";
import { Space } from "antd";
import CommonButton from "components/common/Button";

const { TextArea } = Input;

const CommingSoon = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      countDownDate();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const countDownDate = function () {
    let timeleft = new Date("2023/6/1").getTime() - new Date().getTime();

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setData({ days, hours, minutes, seconds });
  };

  return (
    <Space
      size={20}
      direction="vertical"
      className="w-100 align-items-center mt-5 mb-5"
    >
      <Image src={logo} alt="" width={324} height={193} />
      <Space direction="vertical" className="align-items-center">
        <CommonHeading heading={"COMING SOON"} />
        <CommonTextField
          text={"At What We Do…"}
          fontSize={"24px"}
          fontWeight={600}
        />
      </Space>
      <Space>
        {data?.hours ? (
          <>
            <Space direction="vertical">
              <CommonHeading heading={`${data?.days} - `} />
              <CommonTextField text={"days"} />
            </Space>
            <Space direction="vertical">
              <CommonHeading heading={`${data?.hours} - `} />
              <CommonTextField text={"hours"} />
            </Space>
            <Space direction="vertical">
              <CommonHeading heading={`${data?.minutes} - `} />
              <CommonTextField text={"Minutes"} />
            </Space>
            <Space direction="vertical">
              <CommonHeading heading={`${data?.seconds}`} />
              <CommonTextField text={"Seconds"} />
            </Space>
          </>
        ) : (
          <CommonHeading heading={"Loading..."} />
        )}
      </Space>

      <Space size={20} direction="vertical" className="align-items-center">
        <CommonTextField
          text={"Contact Form"}
          fontWeight={600}
          color="var(--primary-color)"
        />
        <CommonTextField
          text={"Get In Touch"}
          fontSize={"35px"}
          fontWeight={600}
        />
        <Row gutter={[14, 14]} className="signUp-main">
          <Col span={24}>
            <CommonInputField placeholder="Your Name" />
          </Col>
          <Col span={24}>
            <CommonInputField placeholder="Email" />
          </Col>
          <Col span={24}>
            <CommonInputField placeholder="Contact" type={"number"} />
          </Col>
          <Col span={24}>
            <TextArea placeholder="Message" rows={4} />
          </Col>
          <Col span={24}>
            <CommonButton child="Send" />
          </Col>
        </Row>
      </Space>
    </Space>
  );
};

export default CommingSoon;
