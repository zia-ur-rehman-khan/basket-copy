import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/Event/AcademyPage")
);

export default function About() {
  return <DynamicHeader />;
}
