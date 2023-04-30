// Components 
import DashboardTitle from 'components/dashboard/Title'
import AdminLayout from 'components/dashboard/AdminLayout'

// Ant D
import { Button, Form, Input, Row, Col, Select } from 'antd';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';

// Data 
const options = [
    { value: 50, option: 50 },
    { value: 100, option: 100 },
    { value: 150, option: 150 },
    { value: 200, option: 200 },
]

const CreateSession = () => {
    const { TextArea } = Input
    return (
        <AdminLayout>
            <DashboardTitle title={"Create Session"} />
            <Form className='dashboard__form'>
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
                            <Input placeholder='Kennith' type='text' />
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
                            <TextArea placeholder='Enter Session Description' rows={4} />
                        </Form.Item>
                    </Col>
                    <Col
                        lg={{ span: 12 }}
                        md={{ span: 12 }}
                        sm={{ span: 24 }}
                        xs={{ span: 24 }}>
                        <Form.Item
                            name="select-date"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col
                        lg={{ span: 12 }}
                        md={{ span: 12 }}
                        sm={{ span: 24 }}
                        xs={{ span: 24 }}>
                        <Form.Item
                            name="select-time"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                        </Form.Item>

                    </Col>
                    <Col
                        lg={{ span: 12 }}
                        md={{ span: 12 }}
                        sm={{ span: 24 }}
                        xs={{ span: 24 }}>
                        <Form.Item
                            name="Select how much will you charge for this session"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select options={options} placeholder="City" />
                        </Form.Item>
                    </Col>
                    <Col
                        lg={{ span: 12 }}
                        md={{ span: 12 }}
                        sm={{ span: 24 }}
                        xs={{ span: 24 }}
                        style={{ paddingRight: "10px" }}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" >
                                Save Changes
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </AdminLayout >
    )
}
``
export default CreateSession