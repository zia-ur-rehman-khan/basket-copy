// Components
import DashboardTitle from "components/dashboard/Title";
import UserLayout from "components/dashboard/UserLayout";
import MembershipCard from "components/dashboard/MembershipCard";
import AcademyMembership from "components/dashboard/AcademyMembership";

// Ant D
import { Tabs } from "antd";

// Tabs Data
const tabItems = [
  {
    key: "1",
    label: ` Academy Membership`,
    children: <AcademyMembership />,
  },
  {
    key: "2",
    label: `Birthday Membership`,
    children: <MembershipCard />,
  },
];

const membership = () => {
  return (
    <UserLayout>
      <DashboardTitle title="My Membership" />
      <Tabs defaultActiveKey="1" items={tabItems} className="full__w-tabs" />
    </UserLayout>
  );
};

export default membership;
