// Components 
import DashboardTitle from 'components/dashboard/Title'
import AdminLayout from 'components/dashboard/AdminLayout'
import BecomePartnerForm from 'components/dashboard/BecomePartnerForm'


const BecomePartner = () => {
    return (
        <AdminLayout>
            <DashboardTitle title="Become A Partner" />
            <>
                <BecomePartnerForm />
            </>
        </AdminLayout>
    )
}

export default BecomePartner