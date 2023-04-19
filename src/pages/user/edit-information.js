import React from 'react'
import UserLayout from 'components/dashboard/UserLayout';
import DashboardTitle from 'components/dashboard/Title';
import EditProfile from 'components/dashboard/EditProfile'
const EditInformation = () => {
    return (
        <UserLayout>
            {/* Title  */}
            <DashboardTitle title="Edit Personal Information" />
            {/* Title  */}
            <EditProfile/>
        </UserLayout>
    )
}

export default EditInformation