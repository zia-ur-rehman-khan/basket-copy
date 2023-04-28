import React from "react";
import AllEvents from "../AllEvents";

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
      <h3 className="color__light head__sm">Upcomming Sessions</h3>
      {upcomingSessions.map((session, i) => (
        <AllEvents
          key={i}
          date={session.date}
          month={session.month}
          name={session.name}
        />
      ))}
      <h3 className="color__light head__sm">Booked</h3>
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
