import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/partnersSponsers")
);

export default function About() {
  return <DynamicHeader />;
}
