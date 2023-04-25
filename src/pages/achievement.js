import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Achievement"));

export default function About() {
  return <DynamicHeader />;
}
