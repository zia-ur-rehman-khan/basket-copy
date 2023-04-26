// Components 
import AdminLayout from 'components/dashboard/AdminLayout'
import DashboardTitle from 'components/dashboard/Title'
import ProfileThumb from 'components/dashboard/ProfileThumb'
import Information from 'components/dashboard/Information'
import CommonButton from 'components/common/button'

// React Icons 
import userAvatar from '../../public/profile/user-avatar.png'

// Ant D
import { Row, Col } from 'antd'
import Link from 'next/link'

const AdminDashboard = () => {
  return (
    <AdminLayout>
      {/* Title  */}
      <Row>
        <Col span={12}>
          <DashboardTitle title="Personal Information" />
        </Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '3rem' }}>
          <Link href="/admin/edit-profile" ><a className='primary__btn'>Edit</a></Link>
        </Col>
      </Row>
      {/* Title  */}

      {/* Profile thumb  */}
      <ProfileThumb image={userAvatar} name="Kennith Martina" username="@Kennith Martina" />
      {/* Profile thumb  */}

      {/* contact info  */}
      <Information />
      {/* contact info  */}
    </AdminLayout>
  )
}

export default AdminDashboard