import AdminLayout from 'components/dashboard/AdminLayout'
import DashboardTitle from 'components/dashboard/Title'
import Upload from 'components/dashboard/Upload'
import React from 'react'

const UploadVideo = () => {
    return (
        <AdminLayout>
            <DashboardTitle title={"Upload Video"} />
            <Upload />
        </AdminLayout>
    )
}

export default UploadVideo