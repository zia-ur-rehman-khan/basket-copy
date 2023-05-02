import dynamic from "next/dynamic";

const DynamicPartner = dynamic(() =>
  import("components/pages/Coach/BecomePartner")
);

const BecomePartner = () => {
  return <DynamicPartner />;
};

export default BecomePartner;
