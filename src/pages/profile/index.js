import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/Profile/NewAddress")
);

const Index = () => {
  return (
    <>
      <DynamicHeader />
    </>
  );
};

export default Index;
