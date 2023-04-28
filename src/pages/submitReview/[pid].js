import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Shop/ProductDetail/Reviews/SubmitReview"));

const SubmitReview = () => {
  return <DynamicHeader />;
};

export default SubmitReview;
