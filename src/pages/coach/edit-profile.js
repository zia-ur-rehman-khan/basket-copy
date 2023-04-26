// Components 
import AdminLayout from 'components/dashboard/AdminLayout'
import DashboardTitle from 'components/dashboard/Title';

// Ant D
import { Button, Form, Input, Row, Col, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';


// Data 
const regions = [
  { value: 'region', option: 'region' },
  { value: 'region', option: 'region' },
  { value: 'region', option: 'region' },
  { value: 'region', option: 'region' },
]
const city = [
  { value: 'city', option: 'city' },
  { value: 'city', option: 'city' },
  { value: 'city', option: 'city' },
  { value: 'city', option: 'city' },
]
const state = [
  { value: 'state', option: 'state' },
  { value: 'state', option: 'state' },
  { value: 'state', option: 'state' },
  { value: 'state', option: 'state' },
]

const EditProfile = () => {
  return (
    <AdminLayout>
      <DashboardTitle title="Edit Personal Information" />
      <Form className='dashboard__form'>
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
              <Input placeholder='Kennith' type='text' />
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
              <Input placeholder='Martina' type='text' />
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
              <Input placeholder='+1-234-567-890' type='tel' />
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
              <Input placeholder='Kennith@gmail.com' type='email' />
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
              <TextArea placeholder='Address' rows={4} />
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
              <Input placeholder='Zip' type='number' />
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
              <Select options={regions} placeholder="Region" />
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
              <Select options={city} placeholder="City" />
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
              <Select options={state} placeholder="State" />
            </Form.Item>
          </Col>
        </Row>
        <Col span={12} style={{ paddingRight: "10px" }}>
          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Save Changes
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </AdminLayout>
  )
}

export default EditProfile