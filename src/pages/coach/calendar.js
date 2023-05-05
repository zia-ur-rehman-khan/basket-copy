import dynamic from "next/dynamic";

const DynamicCoachCalendar = dynamic(() =>
  import("components/pages/Coach/CoachCalendar")
);

const CoachCalendar = () => {
  return <DynamicCoachCalendar />;
};

export default CoachCalendar;
