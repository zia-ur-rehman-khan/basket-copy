import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Login"));

export default function About() {
  return <DynamicHeader />;
}
