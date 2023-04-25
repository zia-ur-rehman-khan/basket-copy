import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/privacyPolicy"));

export default function About() {
  return <DynamicHeader />;
}
