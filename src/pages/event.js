import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Event"));

export default function Event() {
  return <DynamicHeader />;
}
