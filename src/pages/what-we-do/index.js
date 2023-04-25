import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/WhatWeDo"));

export default function About() {
  return <DynamicHeader />;
}
