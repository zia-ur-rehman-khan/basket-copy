import dynamic from "next/dynamic";

const DynamicMembership = dynamic(() =>
  import("components/pages/User/UserMembership")
);

const membership = () => {
  return <DynamicMembership />;
};

export default membership;
