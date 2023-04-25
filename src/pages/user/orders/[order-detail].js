// Components 
import DashboardTitle from 'components/dashboard/Title'
import UserLayout from 'components/dashboard/UserLayout'
import Sort from 'components/dashboard/Sort'
import OrderRow from 'components/dashboard/OrderRow'

// Ant D
import { Col, Row } from 'antd'

// Images 
import orderOne from 'public/profile/ordered1.png'
import orderTwo from 'public/profile/ordered2.png'

// Data 
const ordersData = [
    {
        id: 1,
        img: orderOne,
        itemName: 'Iball White Jersey',
        qty: 2,
        price: 20.00
    },
    {
        id: 2,
        img: orderOne,
        itemName: 'Iball White Jersey',
        qty: 2,
        price: 20.00
    },
    {
        id: 3,
        img: orderTwo,
        itemName: 'Iball White Jersey',
        qty: 2,
        price: 20.00
    },
]

const OrderDetail = () => {
    return (
        <UserLayout>
            <Row>
                <Col span={12}>
                    <DashboardTitle title="My Orders" />
                </Col>
                <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '3rem' }}>
                    <Sort />
                </Col>
            </Row>

            <div className='orders__wrapp'>
                {
                    ordersData.map(orders => (
                        <OrderRow key={orders.id} image={orders.img} qty={orders.qty} price={orders.price} name={orders.itemName} />
                    ))
                }
                <div className='orders__total-wrapp'>
                    {/* <div className='order__titles'></div>
                    <div className='order__totals'></div> */}
                    <div className='total__row'>
                        <span><p>Tax</p></span>
                        <span><p>£5.00</p></span>
                    </div>
                    <div className='total__row'>
                        <span><p>Estimated Shipping Cost</p></span>
                        <span><p>£5.00</p></span>
                    </div>
                    <div className='total__row'>
                        <span><p>Promo Applied</p></span>
                        <span><p>£5.00</p></span>
                    </div>
                    <div className='total__row'>
                        <span><p><strong>Order Total</strong></p></span>
                        <span><p><strong>£5.00</strong></p></span>
                    </div>

                </div>
            </div>
        </UserLayout>
    )
}

export default OrderDetail