import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/School/SchoolRegister")
);

export default function Home() {
  return <DynamicHeader />;
}
