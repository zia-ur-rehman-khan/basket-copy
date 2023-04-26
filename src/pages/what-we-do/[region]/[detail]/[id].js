import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/WhatWeDo/PlayerDetailes")
);

export default function About() {
  return <DynamicHeader />;
}
