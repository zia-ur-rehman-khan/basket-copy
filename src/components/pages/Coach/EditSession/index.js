// Components
import DashboardTitle from "components/dashboard/Title";
import AdminLayout from "components/dashboard/AdminLayout";

// Ant D
import { Form, Input, Row, Col } from "antd";
import CommonInputField from "components/common/Input";
import CommonDatePicker from "components/common/DatePicker";
import CommonSelect from "components/common/Select";
import CommonButton from "components/common/Button";
import CommonTimePicker from "components/common/TimePicker";

// Data
const options = [
  { value: "$50", option: "$50" },
  { value: "$100", option: "$100" },
  { value: "$150", option: "$150" },
  { value: "$200", option: "$200" },
];

const CreateSession = () => {
  const { TextArea } = Input;
  return (
    <AdminLayout>
      <DashboardTitle title={"Edit Session"} />
      <Form className="dashboard__form">
        <Row gutter={20}>
          <Col span={24}>
            <Form.Item
              name="your-name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonInputField placeholder="Kennith" type="text" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="session-description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea placeholder="Enter Session Description" rows={4} />
            </Form.Item>
          </Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Form.Item
              name="select-date"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonDatePicker />
            </Form.Item>
          </Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Form.Item
              name="select-time"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              {/* <TimePicker defaultOpenValue={moment("00:00:00", "HH:mm:ss")} /> */}
              <CommonTimePicker placeholder={"Select Time"} />
            </Form.Item>
          </Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Form.Item
              name="charges"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CommonSelect
                options={options}
                placeholder="Select how much will you charge for this session"
              />
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
              <CommonButton
                type="primary"
                htmlType="Submit"
                child={"Save Changes"}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </AdminLayout>
  );
};
``;
export default CreateSession;
