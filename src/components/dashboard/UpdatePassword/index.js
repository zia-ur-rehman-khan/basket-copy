import React from 'react'
import { Button, Form, Input, Row, Col, Select } from 'antd';


const UpdatePassword = () => {
    return (
        <div>
            <Form className='dashboard__form'>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="Old Password"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder='*********' type='password' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="New Password"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder='*********' type='password' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="Confirm Password"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder='*********' type='password' />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ paddingRight: "10px" }}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" >
                                Save Changes
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </div>
    )
}

export default UpdatePassword