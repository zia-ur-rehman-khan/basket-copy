// Components
import DashboardTitle from "components/dashboard/Title";
import UserLayout from "components/dashboard/UserLayout";

// Images for tabs
import coachOne from "public/profile/coach1.png";
import coachTwo from "public/profile/coach2.png";
import coachThree from "public/profile/coach3.png";
import coachFour from "public/profile/coach4.png";
import coachFive from "public/profile/coach5.png";
import coachSix from "public/profile/coach6.png";
import coachSeven from "public/profile/coach7.png";
import coachEight from "public/profile/coach8.png";
import coachNine from "public/profile/coach9.png";
import coachTen from "public/profile/coach10.png";
import ProfileCard from "components/dashboard/CoachCard/ProfileCard";

const coachInfo = [
  {
    id: 1,
    img: coachOne,
    name: "Molly Carroll",
    desig: "Iball Coach",
  },
  {
    id: 2,
    img: coachTwo,
    name: "Wallace Boone",
    desig: "Iball Coach",
  },
  {
    id: 3,
    img: coachThree,
    name: "Malcolm Leonard",
    desig: "Iball Coach",
  },
  {
    id: 4,
    img: coachFour,
    name: "Clarence Schmi",
    desig: "Iball Coach",
  },
  {
    id: 5,
    img: coachFive,
    name: "Trevor Dawson",
    desig: "Iball Coach",
  },
  {
    id: 6,
    img: coachSix,
    name: "Dallas Hunter",
    desig: "Iball Coach",
  },
  {
    id: 7,
    img: coachSeven,
    name: "Jeffery Blair",
    desig: "Iball Coach",
  },
  {
    id: 8,
    img: coachEight,
    name: "Derrick Duncan",
    desig: "Iball Coach",
  },
  {
    id: 9,
    img: coachNine,
    name: "Frankie Griffith",
    desig: "Iball Coach",
  },
  {
    id: 10,
    img: coachTen,
    name: "Alejandro Mack",
    desig: "Iball Coach",
  },
];

const Index = () => {
  return (
    <UserLayout>
      <DashboardTitle title="Coach Profile" />
      {coachInfo?.map((card) => (
        <ProfileCard
          key={card?.id}
          image={card?.img}
          name={card?.name}
          desig={card?.desig}
          btnText="View Profile"
        />
      ))}
    </UserLayout>
  );
};

export default Index;
