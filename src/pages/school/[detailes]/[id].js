import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/School/PlayerDetailes")
);

export default function About() {
  return <DynamicHeader />;
}
