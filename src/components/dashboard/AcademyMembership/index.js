// Next
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
// images
import check from "public/profile/check.svg";

// Data
const academyData = [
  {
    id: 1,
    title: "1 Group Training Session Per Week",
    text: "Weekly Group Training Sessions Made Up Of Drills & Scrimmages.",
  },
  {
    id: 2,
    title: "1 Film Study Session Per Week",
    text: "30 Min Film Study Session - One Of The Senior Iball 	Coaches Reviews And Analyses Your In-Game Footage And Identifies Areas Of Progression And Those Which Can Be Improved. ",
  },
  {
    id: 3,
    title: "1 Academy Jersey ",
    text: "1 X Iball Academy Kit With Printed Name. ",
  },
];

const AcademyMembership = () => {
  return (
    <div className="academy__membership">
      {/* <h2 className="color__light">You Can Access</h2> */}
      <CommonHeading level={4} heading={"You Can Access"} />
      <div className="features__outer">
        {academyData.map((data, i) => (
          <div className="features__wrapp" key={i}>
            <Image src={check} alt=" " width={50} />
            <div className="academy__features">
              <CommonHeading level={3} heading={data.title} mb={10} />
              <CommonTextField text={data.text} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademyMembership;
