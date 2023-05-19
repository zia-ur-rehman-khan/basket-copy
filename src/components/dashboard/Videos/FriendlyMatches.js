// Components
import VideoCard from "../VideoCard";

// Images
import matchOne from "public/profile/match/match1.png";
import matchTwo from "public/profile/match/match2.png";
import matchThree from "public/profile/match/match3.png";
import matchFour from "public/profile/match/match4.png";
import matchFive from "public/profile/match/match5.png";
import matchSix from "public/profile/match/match6.png";
import matchSeven from "public/profile/match/match7.png";
import matchEight from "public/profile/match/match8.png";
import thumbOne from "public/profile/thumb1.png";
import thumbTwo from "public/profile/thumb2.png";
import thumbThree from "public/profile/thumb3.png";
import thumbFour from "public/profile/thumb4.png";

// Data
const friendlyMatches = [
  {
    id: 1,
    img: matchOne,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbOne,
  },
  {
    id: 2,
    img: matchTwo,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbTwo,
  },
  {
    id: 3,
    img: matchThree,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbThree,
  },
  {
    id: 4,
    img: matchFour,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbFour,
  },
  {
    id: 5,
    img: matchFive,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbOne,
  },
  {
    id: 6,
    img: matchSix,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbTwo,
  },
  {
    id: 7,
    img: matchSeven,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbThree,
  },
  {
    id: 8,
    img: matchEight,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbFour,
  },
];

const FriendlyMatches = () => {
  return (
    <>
      {friendlyMatches?.map((matches) => (
        <VideoCard
          disableClick
          key={matches?.id}
          image={matches?.img}
          title={matches?.title}
          text={matches?.text}
          name={matches?.name}
          thumb={matches?.thumb}
        />
      ))}
    </>
  );
};

export default FriendlyMatches;
