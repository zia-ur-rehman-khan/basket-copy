import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/WhatWeDo/SchoolRegister")
);

export default function Home() {
  return <DynamicHeader />;
}
