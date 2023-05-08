import React from "react";
import AllEvents from "../AllEvents";
import CommonHeading from "components/common/Heading";

// My Sessions Data
const upcomingSessions = [
  {
    id: 1,
    date: 16,
    month: "Feb",
    name: "Eventions Parade Festivities",
  },
  {
    id: 2,
    date: 16,
    month: "Feb",
    name: "Eventions Parade Festivities",
  },
];

// Booked
const booked = [
  {
    id: 1,
    date: 16,
    month: "Feb",
    name: "Eventions Parade Festivities",
  },
];

const Sessions = () => {
  return (
    <div>
      <CommonHeading level={4} heading={"Upcoming Sessions"} />
      {upcomingSessions.map((session, i) => (
        <AllEvents
          key={i}
          date={session.date}
          month={session.month}
          name={session.name}
        />
      ))}
      <CommonHeading level={4} heading={"Booked"} />
      {booked.map((session, i) => (
        <AllEvents
          key={i}
          date={session.date}
          month={session.month}
          name={session.name}
        />
      ))}
    </div>
  );
};

export default Sessions;
