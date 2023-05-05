// Components
import DashboardTitle from "components/dashboard/Title";
import AdminLayout from "components/dashboard/AdminLayout";
import BecomePartnerForm from "components/dashboard/BecomePartnerForm";

const Index = () => {
  return (
    <AdminLayout>
      <DashboardTitle title="Become A Partner" />
      <>
        <BecomePartnerForm />
      </>
    </AdminLayout>
  );
};

export default Index;
