import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Services"));

export default function About() {
  return <DynamicHeader />;
}
