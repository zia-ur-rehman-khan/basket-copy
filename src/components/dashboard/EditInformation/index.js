import { Form, Input, Row, Col } from "antd";
import CommonButton from "components/common/Button";
import CommonInputField from "components/common/Input";
import CommonSelect from "components/common/Select";

const regions = [
  { value: "region", option: "region" },
  { value: "region", option: "region" },
  { value: "region", option: "region" },
  { value: "region", option: "region" },
];
const city = [
  { value: "city", option: "city" },
  { value: "city", option: "city" },
  { value: "city", option: "city" },
  { value: "city", option: "city" },
];
const state = [
  { value: "state", option: "state" },
  { value: "state", option: "state" },
  { value: "state", option: "state" },
  { value: "state", option: "state" },
];

const EditPofileInfo = () => {
  const { TextArea } = Input;
  return (
    <>
      <h3 className="color__light head__sm">Personal Information</h3>
      <Form className="dashboard__form">
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              name="first-name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="Kennith" type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="last-name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="Martina" type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="phone-number"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="+1-234-567-890" type="tel" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="your-email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="Kennith@gmail.com" type="email" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="your-address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea placeholder="Address" rows={4} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="zip"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="Zip" type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="select region"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonSelect options={regions} placeholder="Region" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="select city"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonSelect options={city} placeholder="City" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="select state"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonSelect options={state} placeholder="State" />
            </Form.Item>
          </Col>
        </Row>

        {/* School information */}
        <h3 className="color__light head__sm">School Information</h3>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              name="school-name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="School Name" type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="grade"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField type="text" placeholder="Grade" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="campus"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField type="text" placeholder="Campus" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="city"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField type="text" placeholder="City" />
            </Form.Item>
          </Col>
        </Row>
        <Col span={12} style={{ paddingRight: "10px" }}>
          <Form.Item>
            <CommonButton htmlType="submit" child={"Save Changes"} />
          </Form.Item>
        </Col>
      </Form>
    </>
  );
};

export default EditPofileInfo;
