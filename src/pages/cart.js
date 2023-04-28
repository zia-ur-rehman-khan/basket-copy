import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/Shop/ShoppingCart")
);

const cart = () => {
  return <DynamicHeader />;
};

export default cart;
