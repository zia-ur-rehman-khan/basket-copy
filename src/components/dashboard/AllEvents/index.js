import Image from "next/image";
import Link from "next/link";
import checkGreen from "public/profile/check-green.svg";
const AllEvents = ({ date, month, name, isCompleted }) => {
  return (
    <div className="event-wrapp">
      <div className="event__date">
        {isCompleted ? (
          <Image src={checkGreen} alt=" " />
        ) : (
          <>
            <h3>{date}</h3>
            <h4>{month}</h4>
          </>
        )}
      </div>
      <h3 className="event__name">{name}</h3>
      <Link href="/">View Details</Link>
    </div>
  );
};

export default AllEvents;
