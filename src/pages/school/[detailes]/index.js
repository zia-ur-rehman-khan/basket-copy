import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/School/SchoolDetailes")
);

export default function About() {
  return <DynamicHeader />;
}
