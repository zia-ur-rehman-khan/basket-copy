// components 
import DashboardTitle from "components/dashboard/Title"
import UserLayout from "components/dashboard/UserLayout"
import VideoCard from "components/dashboard/VideoCard"

// Ant D 
import { Col, Row, Space } from "antd"

// Next 
import Image from "next/image"
import CommonButton from "components/common/Button"
import { useState } from "react"

// Image 
import coachAvatar from 'public/profile/coach-avatar.png'
import uploadedOne from 'public/profile/uploaded/uploaded1.png'
import uploadedTwo from 'public/profile/uploaded/uploaded2.png'
import uploadedThree from 'public/profile/uploaded/uploaded3.png'
import uploadedFour from 'public/profile/uploaded/uploaded4.png'
import thumbOne from 'public/profile/thumb1.png'
import thumbTwo from 'public/profile/thumb2.png'
import thumbThree from 'public/profile/thumb3.png'
import thumbFour from 'public/profile/thumb4.png'

// Data 
const coachInfo = [
    {
        name: "Wilbur Todd",
        height: "6'7",
        phone: '+1-234-567-890',
        age: 25,
        image: coachAvatar
    }
]

// Data 
const uploads = [
    {
        id: 1,
        img: uploadedOne,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbOne,

    },
    {
        id: 2,
        img: uploadedTwo,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbTwo,

    },
    {
        id: 3,
        img: uploadedThree,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbThree,

    },
    {
        id: 4,
        img: uploadedFour,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbFour,

    },
]

const MyCoach = () => {
    const [size, setSize] = useState(20);
    return (
        <UserLayout>
            <DashboardTitle title="My Coach" />
            <Row>
                <Col span={20}>
                    {
                        coachInfo.map((coach, i) => (
                            <div className="coach__info-wrapp" key={i}>
                                <div className="coach__avatar">
                                    <Image src={coachAvatar} alt=" " />
                                </div>
                                <div className="coach__info">
                                    <h2 className="color__light">About Coach</h2>
                                    <div className="info__row">
                                        <p className="color__light">Name: {coach.name}</p>
                                        <p className="color__light">Height: {coach.height}</p>
                                    </div>
                                    <div className="info__row">
                                        <p className="color__light">Contact: {coach.phone}</p>
                                        <p className="color__light">Age: {coach.age}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Col>
                <Col span={4}>
                    <CommonButton child="View Profile" />
                </Col>
            </Row>
            <div style={{ height: '50px' }}></div>
            <Col span={24}>
                <DashboardTitle title="Uploaded Videos" />
                {
                    uploads?.map(upload => <VideoCard
                        key={upload?.id}
                        image={upload?.img}
                        title={upload?.title}
                        text={upload?.text}
                        name={upload?.name}
                        thumb={upload?.thumb}
                        id={upload.id}
                    />)
                }
            </Col>
        </UserLayout>
    )
}

export default MyCoach