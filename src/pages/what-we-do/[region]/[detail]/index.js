import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/WhatWeDo/SchoolDetailes")
);

export default function About() {
  return <DynamicHeader />;
}
