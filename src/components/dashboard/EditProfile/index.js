import React from 'react'
import CommonButton from 'components/common/Button';

// Ant Design 
import { Button, Form, Input, Row, Col, Select } from 'antd';
const { TextArea } = Input;


// Drodowns options 

const regions = [
    {
        value: 'regions',
        label: 'regions',
    },
    {
        value: 'regions',
        label: 'regions',
    },
];
const cities = [
    {
        value: 'cities',
        label: 'cities',
    },
    {
        value: 'cities',
        label: 'cities',
    },
];
const states = [
    {
        value: 'states',
        label: 'states',
    },
    {
        value: 'states',
        label: 'states',
    },
];

// Drodowns options 

const index = () => {
    return (
        <>
            <h3 className='color__light head__sm'>Personal Information</h3>
            <Form className='panel__form'>
                <Row>
                    <Col span={12}>
                        <Input placeholder="Kennith" type='text' />
                    </Col>
                    <Col span={12}>
                        <Input placeholder="Martina" type='text' />
                    </Col>
                    <Col span={12}>
                        <Input placeholder="+1-234-567-890" type='tel' />
                    </Col>
                    <Col span={12}>
                        <Input placeholder="Kennith@gmail.com" type='email' />
                    </Col>
                    <Col span={24}>
                        <TextArea rows={3} placeholder="Address" />
                    </Col>
                    <Col span={12}>
                        <Input placeholder="Zip" type='number' />
                    </Col>
                    <Col span={12}>
                        <Select defaultValue="Select Region" options={regions} />
                    </Col>
                    <Col span={12}>
                        <Select defaultValue="Select City" options={cities} />
                    </Col>
                    <Col span={12}>
                        <Select defaultValue="Select State" options={states} />
                    </Col>
                </Row>
                <h3 className='color__light head__sm'>School Information</h3>
                <Row>
                    <Col span={12}>
                        <Input placeholder="School Name" type='text' />
                    </Col>
                    <Col span={12}>
                        <Input placeholder="Grade" type='text' />
                    </Col>
                    <Col span={12}>
                        <Input placeholder="Campus" type='text' />
                    </Col>
                    <Col span={12}>
                        <Input placeholder="City" type='text' />
                    </Col>
                    <Col span={12}>
                        <CommonButton child={"Save Changes"} />
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default index