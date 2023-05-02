import dynamic from "next/dynamic";

const DynamicRanking = dynamic(() =>
  import("components/pages/User/UserRanking")
);

const Ranking = () => {
  return <DynamicRanking />;
};

export default Ranking;
