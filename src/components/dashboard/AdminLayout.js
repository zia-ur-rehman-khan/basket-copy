import React from 'react'
import Header from 'components/layout/Header'
import Sidebar from 'components/Profile/sidebar'

const AdminLayout = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <div className='dashboard-wrapp'>
                <Sidebar />
                <div className='dashboard-content'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AdminLayout