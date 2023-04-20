import DashboardTitle from 'components/dashboard/Title'
import UserLayout from 'components/dashboard/UserLayout'
import React from 'react'

const OrderDetail = () => {
    return (
        <UserLayout>
            <DashboardTitle title="My Orders" />

            <div className='order__wrapp'>

            </div>
        </UserLayout>
    )
}

export default OrderDetail