// Components 
import DashboardTitle from "components/dashboard/Title"
import UserLayout from "components/dashboard/UserLayout"
import Sort from 'components/dashboard/Sort'

// Ant D
import { Col, Row, Table, Column } from 'antd'

// Next 
import Link from "next/link"
import Image from "next/image"

// Images 
import wishlist from 'public/profile/wishlist.png'
import bin from 'public/profile/bin.svg'

// Data 
const data = [
  {
    id: 1,
    key: "1",
    productPicture: wishlist,
    productName: 'Iball White Jersey',
    price: 20.00,
  },
  {
    id: 2,
    key: "2",
    productPicture: wishlist,
    productName: 'Iball White Jersey',
    price: 20.00,
  },
  {
    id: 3,
    key: "3",
    productPicture: wishlist,
    productName: 'Iball White Jersey',
    price: 20.00,
  },
  {
    id: 4,
    key: "4",
    productPicture: wishlist,
    productName: 'Iball White Jersey',
    price: 20.00,
  },
  {
    id: 5,
    key: "5",
    productPicture: wishlist,
    productName: 'Iball White Jersey',
    price: 20.00,
  },
  {
    id: 6,
    key: "6",
    productPicture: wishlist,
    productName: 'Iball White Jersey',
    price: 20.00,
  },
];

const removeItem = id => {
  // data(oldValues => {
  //   return oldValues.filter(whishlist => wishlist.id !== id)
  // })
  // data.filter(wishlist => wishlist.id !== id)
  console.log(data.map(dat => dat.id))
}

const Whishlist = () => {
  return (
    <UserLayout>
      <Row>
        <Col span={12}>
          <DashboardTitle title="My Wishlist" />
        </Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '3rem' }}>
          <Sort />
        </Col>
      </Row>

      <Table dataSource={data} className='dashboard__table whishlist-table order__table'>
        <Column title="SNo" dataIndex="key" key="key" />
        <Column title="Product Picture" dataIndex="productPicture" key="key" render={(_, record) => (
          <Image src={record.productPicture} alt=" " />
        )} />
        <Column title="Product Name" dataIndex="productName" key="key" />
        <Column title="Price" dataIndex="price" key="key" render={(_, record) => (
          <>
            £ {record.price}
          </>
        )} />
        <Column title="View" dataIndex="view" key="key" render={(_, record) => (
          <Link href={`${record.id}`}>
            view Products
          </Link>
        )} />
        <Column title="Remove" dataIndex="remove" key="key" render={(_, record) => (
          <button onClick={()=> removeItem(record.id)}>
            <Image src={bin} />
          </button>
        )} />
      </Table>
    </UserLayout>
  )
}

export default Whishlist