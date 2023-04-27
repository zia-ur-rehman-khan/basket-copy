// Components 
import DashboardTitle from "components/dashboard/Title"
import UserLayout from "components/dashboard/UserLayout"
import Sort from 'components/dashboard/Sort'

// Ant D
import { Col, Row } from 'antd'


// Images 
import wishlist from 'public/profile/wishlist.png'
import Wishlists from "components/dashboard/Wishlists"

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

      <Wishlists />
    </UserLayout>
  )
}

export default Whishlist