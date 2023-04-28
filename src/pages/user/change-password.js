// Components 
import DashboardTitle from 'components/dashboard/Title'
import UserLayout from 'components/dashboard/UserLayout'
import UpdatePassword from 'components/dashboard/UpdatePassword'

const ChangePassword = () => {
    return (
        <UserLayout>
            <DashboardTitle title="Change Password" />
            <UpdatePassword/>
        </UserLayout>
    )
}

export default ChangePassword