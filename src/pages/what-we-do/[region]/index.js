import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/WhatWeDo/Region"));

export default function About() {
  return <DynamicHeader />;
}
