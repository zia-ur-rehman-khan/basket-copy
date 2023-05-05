// Components
import DashboardTitle from "components/dashboard/Title";
import AdminLayout from "components/dashboard/AdminLayout";
import UpdatePassword from "components/dashboard/UpdatePassword";

const Index = () => {
  return (
    <AdminLayout>
      <DashboardTitle title="Change Password" />
      <UpdatePassword />
    </AdminLayout>
  );
};

export default Index;
