import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/Event/EventRegister")
);

export default function Home() {
  return <DynamicHeader />;
}
