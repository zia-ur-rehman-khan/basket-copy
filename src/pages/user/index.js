import dynamic from "next/dynamic";

const DynamicProfile = dynamic(() => import("components/pages/User/UserProfile"))

const UserDashboard = () => {
  return (
    <DynamicProfile />
  );
}

export default UserDashboard;
