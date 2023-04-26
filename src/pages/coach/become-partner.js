// Components 
import DashboardTitle from 'components/dashboard/Title'
import AdminLayout from 'components/dashboard/AdminLayout'
import { Button, Form, Input, Row, Col, Select } from 'antd';


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

const BecomePartner = () => {
    return (
        <AdminLayout>
            <DashboardTitle title="Become A Partner" />
            <>
                <Form className='dashboard__form'>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder='Enter Name' type='text' />
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
                                <Input placeholder='Enter your Email' type='email' />
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
                                <Input placeholder='Phone Number' type='tel' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder='Enter your address' type='text' />
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
                        <Col span={12}>
                            <Form.Item
                                name="zip"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder='Enter Your Zip' type='text' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="addtional-comments"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder='Addtional Comments' type='text' />
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
            </>
        </AdminLayout>
    )
}

export default BecomePartner