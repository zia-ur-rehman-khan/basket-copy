import { Input } from "antd";
import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import CommonInputField from "components/common/Input";
import CommonSelect from "components/common/Select";
import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React from "react";

const PlayerForm = ({ coach }) => {
  const { TextArea } = Input;

  const { push } = useRouter();

  const handelRoute = () => {
    push(coach ? "/coach" : "/user");
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
          <CommonInputField placeholder="Email " />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonInputField type={"number"} placeholder="Phone Number" />
        </Col>
        <Col span={24}>
          <TextArea placeholder="Address" rows={4} />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonInputField placeholder="Zip" />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonSelect
            placeholder="Select Region"
            options={[
              { value: "jack", label: "America" },
              { value: "lucy", label: "canada" },
              { value: "Yiminghe", label: "USA" },
            ]}
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
          <CommonSelect
            placeholder="Select City"
            options={[
              { value: "jack", label: "America" },
              { value: "lucy", label: "canada" },
              { value: "Yiminghe", label: "USA" },
            ]}
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
          <CommonSelect
            placeholder="Select State"
            options={[
              { value: "jack", label: "America" },
              { value: "lucy", label: "canada" },
              { value: "Yiminghe", label: "USA" },
            ]}
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
          <CommonInputField placeholder="Password" type={"password"} />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonInputField placeholder="Confirm Password" type={"password"} />
        </Col>
      </Row>
      {!coach && (
        <>
          <CommonTextField
            text={"School Information"}
            className={"mt-4 mb-4"}
          />
          <Row gutter={[14, 14]}>
            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <CommonInputField placeholder="School Name" />
            </Col>
            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <CommonInputField placeholder="Grade" />
            </Col>
            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <CommonInputField placeholder="Campus" />
            </Col>
            <Col
              xxl={{ span: 12 }}
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <CommonInputField placeholder="City" />
            </Col>
          </Row>
        </>
      )}
      <CommonButton
        child={"Submit"}
        classname={"mt-4"}
        height={"45px"}
        onClick={() => {
          handelRoute();
        }}
      />
    </div>
  );
};

export default PlayerForm;
