import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/Event/SchoolPage")
);

export default function About() {
  return <DynamicHeader />;
}
