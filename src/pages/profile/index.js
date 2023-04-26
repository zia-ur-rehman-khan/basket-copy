import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/Profile/NewAddress")
);

const index = () => {
  return (
    <>
      <DynamicHeader />
    </>
  );
};

export default index;
