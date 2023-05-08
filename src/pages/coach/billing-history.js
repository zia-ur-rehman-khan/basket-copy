import dynamic from "next/dynamic";

const DynamicBilling = dynamic(() =>
  import("components/pages/Coach/BillingHistory")
);

const BillingHistory = () => {
  return <DynamicBilling />;
};

export default BillingHistory;
