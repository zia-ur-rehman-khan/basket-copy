// Components 
import DashboardTitle from "components/dashboard/Title"
import UserLayout from "components/dashboard/UserLayout"
import MembershipCard from "components/dashboard/MembershipCard";

// Ant D 
import { Tabs } from 'antd';

// Tabs Data 
const tabItems = [
    {
        key: '1',
        label: ` Academy Membership`,
        children: 'test',
    },
    {
        key: '2',
        label: `Birthday Membership`,
        children: <MembershipCard/>,
    },
];

const membership = () => {
    return (
        <UserLayout>
            <DashboardTitle title="My Membership" />
            <Tabs defaultActiveKey="1" items={tabItems} />
        </UserLayout>
    )
}

export default membership