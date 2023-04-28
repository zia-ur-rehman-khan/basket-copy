// Components
import CoachSingle from "components/dashboard/CoachSingle";
import DashboardTitle from "components/dashboard/Title";
import UserLayout from "components/dashboard/UserLayout";

// Image
import thumbOne from "public/profile/thumb1.png";
import singleCoach from "public/profile/single-coach.jpg";

const coachVids = [
  {
    id: 1,
    img: singleCoach,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbOne,
  },
];

const SingleCoach = () => {
  return (
    <UserLayout>
      <DashboardTitle title="Current Coaching" />
      {/* Mapping through the data  */}
      {coachVids.map((coach, i) => (
        <CoachSingle
          key={i}
          img={coach.img}
          title={coach.title}
          text={coach.text}
          name={coach.name}
          thumb={coach.thumb}
        />
      ))}
      {/* Mapping through the data  */}
    </UserLayout>
  );
};

export default SingleCoach;
