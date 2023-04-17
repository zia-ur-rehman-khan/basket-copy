import React from 'react'
import { Row, Col } from 'antd'
import userAvatar from '../../../public/profile/user-avatar.png'
// import userAvatar from '../../../constants'
import Image from 'next/image'

const ProfileThumb = ({ image, name, username }) => {
    return (
        <div className='profile__thumb'>
            <Row align="middle" gutter={20}>
                <Col span={3}>
                    <Image src={image} />
                </Col>
                <Col span={9}>
                    <h4 className='name'>{name}</h4>
                    <p className='username'>{username}</p>
                </Col>
            </Row>
        </div>
    )
}

export default ProfileThumb