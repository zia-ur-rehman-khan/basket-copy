import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Media"));

export default function About() {
  return <DynamicHeader />;
}
