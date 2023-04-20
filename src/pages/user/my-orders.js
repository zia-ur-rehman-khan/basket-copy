// Components 
import DashboardTitle from 'components/dashboard/Title'
import UserLayout from 'components/dashboard/UserLayout'

// Ant D
import { Col, Row, Table, Column } from 'antd'

// React Icons 
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Link from 'next/link';


// Data 
const data = [
  {
    id: 1,
    key: "1",
    orderNo: '#1084598423154',
    date: '04-12-21',
    status: 'Confirm',
    paymentStatus: 'Paid',
    total: 590.00,
    details: `/user/order-detail`
  },
  {
    id: 2,
    key: "2",
    orderNo: '#1084598423154',
    date: '04-12-21',
    status: 'Confirm',
    paymentStatus: 'Paid',
    total: 590.00,
    details: `/user/order-detail`
  },
  {
    id: 3,
    key: "3",
    orderNo: '#1084598423154',
    date: '04-12-21',
    status: 'Confirm',
    paymentStatus: 'Paid',
    total: 590.00,
    details: `/user/order-detail`
  },
  {
    id: 4,
    key: "4",
    orderNo: '#1084598423154',
    date: '04-12-21',
    status: 'Confirm',
    paymentStatus: 'Paid',
    total: 590.00,
    details: `/user/order-detail`
  },
  {
    id: 5,
    key: "5",
    orderNo: '#1084598423154',
    date: '04-12-21',
    status: 'Confirm',
    paymentStatus: 'Paid',
    total: 590.00,
    details: `/user/order-detail`
  },
  {
    id: 6,
    key: "6",
    orderNo: '#1084598423154',
    date: '04-12-21',
    status: 'Confirm',
    paymentStatus: 'Paid',
    total: 590.00,
    details: `/user/order-detail`
  },
];

const MyOrders = () => {
  return (
    <UserLayout>
      <Row>
        <Col span={12}>
          <DashboardTitle title="My Orders" />
        </Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '3rem' }}>
          filter
        </Col>
      </Row>
      <Table dataSource={data} className='dashboard__table order__table'>
        <Column title="SNo" dataIndex="key" key="key" />
        <Column title="OrderNo" dataIndex="orderNo" key="key" />
        <Column title="Order Date" dataIndex="date" key="key" />
        <Column title="Status" dataIndex="status" key="key" />
        <Column title="Payment Status" dataIndex="paymentStatus" key="key" render={(_, record) => (
          <>
            <span className='color__green'>{record.paymentStatus} <BsFillCheckCircleFill /></span>
          </>
        )} />
        <Column title="Total" dataIndex="total" key="key" />
        <Column title="Details" dataIndex="key" key="key" render={
          (_, record) => (
            <Link href={record.details}>View Details</Link>
          )
        } />
      </Table>
    </UserLayout>
  )
}

export default MyOrders