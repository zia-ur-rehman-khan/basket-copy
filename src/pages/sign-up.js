import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/SignUp"));

export default function About() {
  return <DynamicHeader />;
}
