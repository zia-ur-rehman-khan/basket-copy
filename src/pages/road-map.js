import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/RoadMap"));

export default function About() {
  return <DynamicHeader />;
}
