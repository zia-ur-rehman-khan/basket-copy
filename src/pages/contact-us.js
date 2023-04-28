import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/ContactUs"));

export default function About() {
  return <DynamicHeader />;
}
