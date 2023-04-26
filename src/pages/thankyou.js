import React from "react";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Shop/ThankYou"));

const thankyou = () => {
  return <DynamicHeader />;
};

export default thankyou;
