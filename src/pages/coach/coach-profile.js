import dynamic from "next/dynamic";

const DynamicCoachProfile = dynamic(() =>
  import("components/pages/Coach/CoachProfile")
);

const CurrentCoach = () => {
  return <DynamicCoachProfile />;
};

export default CurrentCoach;
