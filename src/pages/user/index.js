import React from 'react'
import UserLayout from 'components/dashboard/UserLayout'
import DashboardTitle from 'components/dashboard/Title'
import ProfileThumb from 'components/dashboard/ProfileThumb'
import userAvatar from '../../public/profile/user-avatar.png'
import Information from 'components/dashboard/Information'
function UserDashboard() {
  return (
    <UserLayout>
      <DashboardTitle title="Personal Information" />
      <ProfileThumb image={userAvatar} name="Kennith Martina" username="@Kennith Martina" />
      <Information/>
    </UserLayout>
  )
}

export default UserDashboard