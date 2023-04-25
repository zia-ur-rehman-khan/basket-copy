import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Team"));

export default function About() {
  return <DynamicHeader />;
}
