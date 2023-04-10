import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/home"));

export default function Home() {
  return <DynamicHeader />;
}
