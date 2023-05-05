import dynamic from "next/dynamic";

const DynamicCoach = dynamic(() => import("components/pages/User/UserCoach"));

const MyCoach = () => {
  return <DynamicCoach />;
};

export default MyCoach;
