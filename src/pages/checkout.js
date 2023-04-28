import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Shop/CheckOut"));

const checkout = () => {
  return <DynamicHeader />;
};

export default checkout;
