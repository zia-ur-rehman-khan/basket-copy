// Components
import VideoCard from "../VideoCard";

// Images
import socialOne from "public/profile/social/social1.png";
import socialTwo from "public/profile/social/social2.png";
import socialThree from "public/profile/social/social3.png";
import socialFour from "public/profile/social/social4.png";
import thumbOne from "public/profile/thumb1.png";
import thumbTwo from "public/profile/thumb2.png";
import thumbThree from "public/profile/thumb3.png";
import thumbFour from "public/profile/thumb4.png";

// Data
const socialResponsibility = [
  {
    id: 1,
    img: socialOne,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbOne,
  },
  {
    id: 2,
    img: socialTwo,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbTwo,
  },
  {
    id: 3,
    img: socialThree,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbThree,
  },
  {
    id: 4,
    img: socialFour,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbFour,
  },
  {
    id: 5,
    img: socialOne,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbOne,
  },
  {
    id: 6,
    img: socialTwo,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbTwo,
  },
  {
    id: 7,
    img: socialThree,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbThree,
  },
  {
    id: 8,
    img: socialFour,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbFour,
  },
];

const SocialResponsibility = () => {
  return (
    <>
      {socialResponsibility?.map((social) => (
        <VideoCard
          disableClick
          key={social?.id}
          image={social?.img}
          title={social?.title}
          text={social?.text}
          name={social?.name}
          thumb={social?.thumb}
        />
      ))}
    </>
  );
};

export default SocialResponsibility;
