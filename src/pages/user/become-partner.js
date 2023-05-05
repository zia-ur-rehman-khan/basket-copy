import dynamic from "next/dynamic";

const DynamicPartner = dynamic(() => import("components/pages/User/Partner"));

const BecomePartner = () => {
  return <DynamicPartner />;
};

export default BecomePartner;
