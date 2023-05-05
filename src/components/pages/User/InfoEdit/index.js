// Components
import UserLayout from "components/dashboard/UserLayout";
import DashboardTitle from "components/dashboard/Title";
import EditPofileInfo from "components/dashboard/EditInformation";
const Index = () => {
    return (
        <UserLayout>
            {/* Title  */}
            <DashboardTitle title="Edit Personal Information" />
            {/* Title  */}
            <EditPofileInfo />
        </UserLayout>
    );
};

export default Index;
