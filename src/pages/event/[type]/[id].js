import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/Event/EventDetailes")
);

export default function Event() {
  return <DynamicHeader />;
}
