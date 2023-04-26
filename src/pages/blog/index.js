import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Blog"));

export default function Blog() {
  return <DynamicHeader />;
}
