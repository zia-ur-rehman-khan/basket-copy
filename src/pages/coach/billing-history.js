// components 
import DashboardTitle from 'components/dashboard/Title'
import AdminLayout from 'components/dashboard/AdminLayout'
import Sort from 'components/dashboard/Sort'
// Next 
import Link from 'next/link';

// AntD 
import { Col, Row, Tabs, Table, Column } from 'antd'

// Images 
import product from 'public/profile/wishlist.png'
import item from 'public/profile/item.png'
import Image from 'next/image';

// Data 
const data = [
    {
        id: 1,
        key: "1",
        img: product,
        name: 'Iball White Jersey',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ',
        qty: 2,
        date: '24 Nov',
        amount: 20.00
    },
    {
        id: 2,
        key: "2",
        img: item,
        name: 'Iball White Jersey',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ',
        qty: 2,
        date: '24 Nov',
        amount: 20.00
    },
    {
        id: 3,
        key: "3",
        img: product,
        name: 'Iball White Jersey',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ',
        qty: 2,
        date: '24 Nov',
        amount: 20.00
    },
    {
        id: 4,
        key: "4",
        img: item,
        name: 'Iball White Jersey',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ',
        qty: 2,
        date: '24 Nov',
        amount: 20.00
    },
    {
        id: 5,
        key: "5",
        img: product,
        name: 'Iball White Jersey',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ',
        qty: 2,
        date: '24 Nov',
        amount: 20.00
    },
    {
        id: 6,
        key: "6",
        img: item,
        name: 'Iball White Jersey',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore ',
        qty: 2,
        date: '24 Nov',
        amount: 20.00
    },
];

// Tabs Content
const tabItems = [
    {
        key: '1',
        label: `Shopping Billing`,
        children: <Table dataSource={data} className='dashboard__table order__table billing__table'>
            <Column title="SNo" dataIndex="key" key="key" />
            <Column title="Name" dataIndex="name" key="key" render={(_, record) => (
                <div className='item'>
                    <Image src={record.img} alt=" " />
                    <span>{record.name}</span>
                </div>
            )} />
            <Column title="Description" dataIndex="description" key="key" />
            <Column title="Quantity" dataIndex="qty" key="key" render={(_, record) => (
                <span>Qty {record.qty}</span>
            )} />
            <Column title="Date" dataIndex="date" key="key" />
            <Column title="Amount" dataIndex="amount" key="key" render={(_, record) => (
                <span>£ {record.amount}</span>
            )} />
        </Table>
    },
    {
        key: '2',
        label: `Tutorials Billing`,
        children: <Table dataSource={data} className='dashboard__table order__table billing__table'>
            <Column title="SNo" dataIndex="key" key="key" />
            <Column title="Name" dataIndex="name" key="key" render={(_, record) => (
                <div className='item'>
                    <Image src={record.img} alt=" " />
                    <span>{record.name}</span>
                </div>
            )} />
            <Column title="Description" dataIndex="description" key="key" />
            <Column title="Quantity" dataIndex="qty" key="key" render={(_, record) => (
                <span>Qty {record.qty}</span>
            )} />
            <Column title="Date" dataIndex="date" key="key" />
            <Column title="Amount" dataIndex="amount" key="key" render={(_, record) => (
                <span>£ {record.amount}</span>
            )} />
            <Column title="" dataIndex="test" key="key" />
        </Table>,
    },
];


const BillingHistory = () => {
    return (
        <AdminLayout>
            <Row>
                <Col span={12}>
                    <DashboardTitle title={"Billing History"} />
                </Col>
                <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '3rem' }}>
                    <Sort />
                </Col>
            </Row>

            <Tabs defaultActiveKey="1" items={tabItems} />
        </AdminLayout>
    )
}

export default BillingHistory