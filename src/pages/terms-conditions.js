import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/TermsConditions"));

export default function About() {
  return <DynamicHeader />;
}
