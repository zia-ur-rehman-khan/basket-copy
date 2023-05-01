import Link from "next/link";
import AllEvents from "../AllEvents";
import CommonButton from "components/common/Button";
import { useRouter } from "next/router";

// My Sessions Data
const createdSessions = [
  {
    id: 1,
    date: 16,
    month: "Feb",
    name: "Eventions Parade Festivities",
  },
];

// Booked
const completedSessions = [
  {
    id: 1,
    date: 16,
    month: "Feb",
    completed: true,
    name: "Eventions Parade Festivities",
  },
  {
    id: 2,
    date: 16,
    month: "Feb",
    completed: true,
    name: "Eventions Parade Festivities",
  },
];

const CoachSessions = () => {
  const { push } = useRouter();

  const handelRoute = () => {
    push("/coach/create-session");
  };
  return (
    <div>
      <h3 className="color__light head__sm">Created Sessions</h3>
      {createdSessions.map((session, i) => (
        <AllEvents
          key={i}
          date={session.date}
          month={session.month}
          name={session.name}
        />
      ))}
      <h3 className="color__light head__sm">Completed</h3>
      {completedSessions.map((session, i) => (
        <AllEvents
          key={i}
          date={session.date}
          month={session.month}
          isCompleted={session.completed}
          name={session.name}
        />
      ))}
      <CommonButton child={"Create Session"} onClick={handelRoute} />
    </div>
  );
};

export default CoachSessions;
