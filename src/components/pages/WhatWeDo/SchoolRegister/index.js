import CommonBanner from "components/common/Banner";
import React from "react";
import banner from "public/school/detailBanner.png";
import { Col, Row } from "antd";
import CommonHeading from "components/common/Heading";
import CommonInputField from "components/common/Input";
import CommonButton from "components/common/Button";
import CommonTextField from "components/common/TextField";
import mail from "public/school/mail.svg";
import location from "public/school/location.svg";
import phone from "public/school/phone.svg";

import { Space } from "antd";
import Image from "next/image";
import { Upload } from "antd";
import { message } from "antd";
import { Input } from "antd";
import { useRouter } from "next/router";

const SchoolRegister = () => {
  const { query } = useRouter();
  const { t } = query;

  const icons = [mail, location, phone];
  const { TextArea } = Input;

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <CommonBanner src={banner} heading={"Academy Member Registration"} />
      <Row gutter={[50, 30]} className="common-padding">
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Space direction="vertical">
            <CommonHeading
              level={2}
              heading={"Get in Touch with us we are always here to help you"}
            />
            <CommonTextField
              text={
                "We’d love to hear from you. Our team is always ready and willing to take on your needs"
              }
            />
            <Space className="justify-content-between w-100" wrap={true}>
              {icons.map((_t, index) => (
                <Space
                  direction="vertical"
                  align="center"
                  className="bg-grey radius p-3 "
                  key={index}
                >
                  <Image src={_t} alt={"icon"} />
                  <CommonTextField text={"Chat: admin@iball.uk"} />
                </Space>
              ))}
            </Space>
          </Space>
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <CommonHeading
            level={2}
            heading={` ${t} Registration Form`}
            className={"mb-3"}
          />
          <Row gutter={[24, 24]}>
            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <CommonInputField placeholder="First Name" />
            </Col>
            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <CommonInputField placeholder="Last Name" />
            </Col>
            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <CommonInputField placeholder="Email" />
            </Col>
            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <CommonInputField placeholder="Select Academy" />
            </Col>

            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <CommonInputField
                placeholder={`${t === "Player" ? "Player’s Age" : "Contact"}`}
              />
            </Col>
            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Space align="center" className="h-100">
                <CommonTextField
                  text={`${t} Avatar:`}
                  opacity={"0.5"}
                  fontSize={"14px"}
                />
                <Upload {...props}>
                  <CommonTextField
                    text="Browse"
                    className={"c-pointer"}
                    color="#FF6600"
                    fontSize={"14px"}
                  />
                </Upload>
              </Space>
            </Col>

            <Col span={24}>
              <CommonButton child={"Submit"} border={"none"} height={"45px"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SchoolRegister;
