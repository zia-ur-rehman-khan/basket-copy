// Components
import VideoCard from "../VideoCard";

// Images
import uploadedOne from "public/profile/uploaded/uploaded1.png";
import uploadedTwo from "public/profile/uploaded/uploaded2.png";
import uploadedThree from "public/profile/uploaded/uploaded3.png";
import uploadedFour from "public/profile/uploaded/uploaded4.png";
import uploadedFive from "public/profile/uploaded/uploaded5.png";
import uploadedSix from "public/profile/uploaded/uploaded6.png";
import uploadedSeven from "public/profile/uploaded/uploaded7.png";
import uploadedEight from "public/profile/uploaded/uploaded8.png";
import thumbOne from "public/profile/thumb1.png";
import thumbTwo from "public/profile/thumb2.png";
import thumbThree from "public/profile/thumb3.png";
import thumbFour from "public/profile/thumb4.png";

// Data
const uploads = [
  {
    id: 1,
    img: uploadedOne,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbOne,
  },
  {
    id: 2,
    img: uploadedTwo,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbTwo,
  },
  {
    id: 3,
    img: uploadedThree,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbThree,
  },
  {
    id: 4,
    img: uploadedFour,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbFour,
  },
  {
    id: 5,
    img: uploadedFive,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbOne,
  },
  {
    id: 6,
    img: uploadedSix,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbTwo,
  },
  {
    id: 7,
    img: uploadedSeven,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbThree,
  },
  {
    id: 8,
    img: uploadedEight,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbFour,
  },
];

const UploadedVideos = () => {
  return (
    <>
      {uploads?.map((upload) => (
        <VideoCard
          crudButtons
          disableClick
          key={upload?.id}
          image={upload?.img}
          title={upload?.title}
          text={upload?.text}
          name={upload?.name}
          thumb={upload?.thumb}
        />
      ))}
    </>
  );
};

export default UploadedVideos;
