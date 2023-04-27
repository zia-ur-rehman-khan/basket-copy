// Components 
import DashboardTitle from "components/dashboard/Title"
import AdminLayout from "components/dashboard/AdminLayout"
import Sort from 'components/dashboard/Sort'
import Wishlists from "components/dashboard/Wishlists"

// Ant D
import { Col, Row } from 'antd'


const Whishlist = () => {
  return (
    <AdminLayout>
      <Row>
        <Col span={12}>
          <DashboardTitle title="My Wishlist" />
        </Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '3rem' }}>
          <Sort />
        </Col>
      </Row>

      {/* Wishlist */}
      <Wishlists />
      {/* Wishlist */}
    </AdminLayout>
  )
}

export default Whishlist