import { Card } from 'antd'
import CommonButton from 'components/common/button'
import Image from 'next/image'
const CoachCard = ({ image,  name,  price }) => {
    return (
        <Card className='coach__card'>
            <Image src={image}/>
            <h4>{name}</h4>
            <p>{price}</p>
            <CommonButton child={"Book Now"}/>
        </Card>
    )
}

export default CoachCard