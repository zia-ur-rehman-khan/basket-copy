// Next Link 
import Image from 'next/image';

// Ant d
import { Space, Table, Tag } from 'antd';
const { Column } = Table;

// Images 
import tableImageOne from 'public/profile/table1.png'
import tableImageTwo from 'public/profile/table2.png'
import tableImageThree from 'public/profile/table3.png'
import tableImageFour from 'public/profile/table4.png'
import tableImageFive from 'public/profile/table5.png'
import tableImageSix from 'public/profile/table6.png'
import tableImageSeven from 'public/profile/table7.png'
import tableImageEight from 'public/profile/table8.png'
import tableImageNine from 'public/profile/table9.png'
import tableImageTen from 'public/profile/table10.png'
import up from 'public/profile/up.png'
import down from 'public/profile/down.png'

// Data 
const data = [
    {
        key: 1,
        name: 'Clinton Gardner',
        image: tableImageOne,
        evolution: true,
        score: 65
    },
    {
        key: 2,
        name: 'Clinton Gardner',
        image: tableImageTwo,
        evolution: false,
        score: 65
    },
    {
        key: 3,
        name: 'Clinton Gardner',
        image: tableImageThree,
        evolution: true,
        score: 65
    },
    {
        key: 4,
        name: 'Clinton Gardner',
        image: tableImageFour,
        evolution: false,
        score: 65
    },
    {
        key: 5,
        name: 'Clinton Gardner',
        image: tableImageFive,
        evolution: true,
        score: 65
    },
    {
        key: 6,
        name: 'Clinton Gardner',
        image: tableImageSix,
        evolution: false,
        score: 65
    },
    {
        key: 7,
        name: 'Clinton Gardner',
        image: tableImageSeven,
        evolution: true,
        score: 65
    },
    {
        key: 8,
        name: 'Clinton Gardner',
        image: tableImageEight,
        evolution: false,
        score: 65
    },
    {
        key: 9,
        name: 'Clinton Gardner',
        image: tableImageNine,
        evolution: true,
        score: 65
    },
    {
        key: 10,
        name: 'Clinton Gardner',
        image: tableImageTen,
        evolution: false,
        score: 65
    },
];

const RankingTable = () => {
    return (
        <Table dataSource={data} className='dashboard__table'>
            <Column title="No" dataIndex="key" key="key" />
            <Column title="Name" dataIndex="name" key="name" render={
                (_, record) => (
                    <div className='table__name'>
                        <Image src={record.image} alt=" " />
                        <p>{record.name}</p>
                    </div>
                )
            } />
            <Column title="Evolution" dataIndex="evolution" key="evolution" render={
                (_, record) => (
                    <>
                        <span>{record.evolution ? (<Image src={up} alt=" " />) : (<Image src={down} alt=" " />)}</span>
                    </>
                )
            } />
            <Column title="Score" dataIndex="score" key="score" />
        </Table>
    )
}

export default RankingTable