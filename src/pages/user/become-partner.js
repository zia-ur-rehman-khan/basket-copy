// Components 
import DashboardTitle from 'components/dashboard/Title'
import UserLayout from 'components/dashboard/UserLayout'
import BecomePartnerForm from 'components/dashboard/BecomePartnerForm'




const BecomePartner = () => {
    return (
        <UserLayout>
            <DashboardTitle title="Become A Partner" />
            <>
                <BecomePartnerForm />
            </>
        </UserLayout>
    )
}

export default BecomePartner