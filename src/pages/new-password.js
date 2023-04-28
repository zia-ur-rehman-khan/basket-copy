import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/NewPassword"));

export default function About() {
  return <DynamicHeader />;
}
