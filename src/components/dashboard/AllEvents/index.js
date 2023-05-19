import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import { useRouter } from "next/router";
import checkGreen from "public/profile/check-green.svg";
const AllEvents = ({ date, month, name, isCompleted, sessionCompleted }) => {
  const { push } = useRouter();
  const handelRoute = () => {
    push("/event/camps/1");
  };
  const handelEditSessionRoute = () => {
    push("/coach/edit-session");
  };
  return (
    <div className="event-wrapp">
      <div className="event-info-wrap">
        <div className={`event__date ${isCompleted ? "bg__transparent" : ""}`}>
          {isCompleted ? (
            <Image src={checkGreen} alt=" " />
          ) : (
            <>
              <CommonHeading
                level={3}
                heading={date}
                color={"#FF6600"}
                lineHeight={1}
              />
              <CommonHeading level={4} heading={month} color={"#FF6600"} />
            </>
          )}
        </div>
        <CommonHeading level={4} heading={name} />
      </div>
      <CommonTextField
        text={sessionCompleted ? "Edit" : "View Details"}
        color={"#FF6600"}
        onClick={sessionCompleted ? handelEditSessionRoute : handelRoute}
      />
    </div>
  );
};

export default AllEvents;
