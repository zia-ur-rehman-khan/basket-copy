import { Card } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillPlayCircle } from 'react-icons/ai'
const VideoCard = ({ image, title, text, name, thumb, id }) => {
    return (
        <Card className='vid__card'>
            <>
                <div className='card__head'>
                    <Link href={`/user/coach/${id}`}>
                        <>
                            <Image src={image} alt=" " />
                            <AiFillPlayCircle />
                        </>
                    </Link>
                </div>
                <div className='card__body'>
                    <Link href={`/user/coach/${id}`}>
                        <h4>{title}</h4>
                    </Link>
                    <p>{text}</p>
                    <ul>
                        <li><Image src={thumb} alt=" " /> <span>{name}</span></li>
                        <li>12 Hours Ago</li>
                    </ul>
                </div>
            </>
        </Card>
    )
}

export default VideoCard