import dynamic from "next/dynamic";

const DynamicCalendar = dynamic(() => import("components/pages/User/UserCalendar"))

const CalendarOutlet = () => {
  return (
    <DynamicCalendar />
  );
};

export default CalendarOutlet;
