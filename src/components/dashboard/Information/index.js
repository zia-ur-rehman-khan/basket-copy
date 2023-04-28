import React from 'react'
import { Row, Col } from 'antd'
import { personalInfo, schollInfo } from 'data'
const Information = () => {

    return (
        <div className='information__wrapp'>
            <Row>
                {
                    personalInfo?.map((pInfo, i) => (
                        <Col span={12} key={i} >
                            <div className='info__box'>
                                <Row>
                                    <Col span={2}>{pInfo?.ico}</Col>
                                    <Col span={12}>
                                        <p className='label__text'>{pInfo?.text}</p>
                                        <p className='label__value'>{pInfo?.labelValue}</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))
                }
            </Row>
            <Row>
                {
                    schollInfo?.map((pInfo, i) => (
                        <Col span={12} key={i} >
                            <div className='info__box'>
                                <Row>
                                    <Col span={2}>{pInfo?.ico}</Col>
                                    <Col span={12}>
                                        <p className='label__text'>{pInfo?.text}</p>
                                        <p className='label__value'>{pInfo?.labelValue}</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Information