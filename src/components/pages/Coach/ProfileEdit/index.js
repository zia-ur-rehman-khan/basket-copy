// Components
import AdminLayout from "components/dashboard/AdminLayout";
import DashboardTitle from "components/dashboard/Title";
import EditPofileInfo from "components/dashboard/EditInformation";

const EditProfile = () => {
  return (
    <AdminLayout>
      <DashboardTitle title="Edit Personal Information" />
      <EditPofileInfo />
    </AdminLayout>
  );
};

export default EditProfile;
