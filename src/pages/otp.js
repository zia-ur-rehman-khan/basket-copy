import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Otp"));

export default function About() {
  return <DynamicHeader />;
}
