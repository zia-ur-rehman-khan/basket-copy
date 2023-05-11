import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/CommingSoon"));

export default function CommingSoon() {
  return <DynamicHeader />;
}
