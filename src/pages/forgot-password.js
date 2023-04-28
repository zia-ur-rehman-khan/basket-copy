import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/ForgotPassword"));

export default function About() {
  return <DynamicHeader />;
}
