import React from 'react'
import { Row, Col } from 'antd'
import userAvatar from '../../../public/profile/user-avatar.png'
// import userAvatar from '../../../constants'
import Image from 'next/image'

const ProfileThumb = ({ image, name, username }) => {
    return (
        <div className='profile__thumb'>
            <Row align="middle" gutter={20}>
                <Image src={image} />
                <div style={{ marginLeft : '10px' }}>
                    <h4 className='name'>{name}</h4>
                    <p className='username'>{username}</p>
                </div>
            </Row>
        </div>
    )
}

export default ProfileThumb