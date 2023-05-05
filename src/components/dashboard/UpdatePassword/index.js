import { Form, Row, Col } from "antd";
import CommonInputField from "components/common/Input";
import CommonButton from "components/common/Button";

const UpdatePassword = () => {
  return (
    <div>
      <Form className="dashboard__form">
        <Row gutter={20}>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Form.Item
              name="Old Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="*********" type="password" />
            </Form.Item>
          </Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Form.Item
              name="New Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="*********" type="password" />
            </Form.Item>
          </Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Form.Item
              name="Confirm Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="*********" type="password" />
            </Form.Item>
          </Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ paddingRight: "10px" }}
          >
            <Form.Item>
              <CommonButton htmlType="submit" child={"Save Changes"} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UpdatePassword;
