import dynamic from "next/dynamic";

const DynamicDonate = dynamic(() => import("components/pages/Coach/Donate"));

const Donate = () => {
  return <DynamicDonate />;
};

export default Donate;
