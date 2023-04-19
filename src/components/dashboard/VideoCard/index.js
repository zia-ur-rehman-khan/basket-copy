import { Card } from 'antd'
import Image from 'next/image'
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
const VideoCard = ({ image, title, text, name, thumb }) => {
    return (
        <Card className='vid__card'>
            <div className='card__head'>
                <Image src={image} alt=" " />
                <AiFillPlayCircle />
            </div>
            <div className='card__body'>
                <h4>{title}</h4>
                <p>{text}</p>
                <ul>
                    <li><Image src={thumb} alt=" " /> <span>{name}</span></li>
                    <li>12 Hours Ago</li>
                </ul>
            </div>
        </Card>
    )
}

export default VideoCard