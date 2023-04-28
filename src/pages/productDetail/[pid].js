import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Shop/ProductDetail"));

const ProductDetail = () => {
  return <DynamicHeader />;
};

export default ProductDetail;
