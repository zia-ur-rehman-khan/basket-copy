// Components 
import UserLayout from 'components/dashboard/UserLayout'
import DashboardTitle from 'components/dashboard/Title';
import EditPofileInfo from 'components/dashboard/EditInformation';


const EditProfile = () => {
  return (
    <UserLayout>
      <DashboardTitle title="Edit Personal Information" />
      <EditPofileInfo />
    </UserLayout>
  )
}

export default EditProfile