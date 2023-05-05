// Images
import purchasedOne from "public/profile/purchased/purchased1.png";
import purchasedTwo from "public/profile/purchased/purchased2.png";
import purchasedThree from "public/profile/purchased/purchased3.png";
import purchasedFour from "public/profile/purchased/purchased4.png";
import purchasedFive from "public/profile/purchased/purchased5.png";
import purchasedSix from "public/profile/purchased/purchased6.png";
import purchasedSeven from "public/profile/purchased/purchased7.png";
import purchasedEight from "public/profile/purchased/purchased8.png";
import thumbOne from "public/profile/thumb1.png";
import thumbTwo from "public/profile/thumb2.png";
import thumbThree from "public/profile/thumb3.png";
import thumbFour from "public/profile/thumb4.png";

// Components
import DashboardTitle from "components/dashboard/Title";
import AdminLayout from "components/dashboard/AdminLayout";
import VideoCard from "components/dashboard/VideoCard";
import CommonButton from "components/common/Button";

// Ant D
import { Col, Row } from "antd";
import { useRouter } from "next/router";

// Data
const tutorials = [
  {
    id: 1,
    img: purchasedOne,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbOne,
  },
  {
    id: 2,
    img: purchasedTwo,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbTwo,
  },
  {
    id: 3,
    img: purchasedThree,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbThree,
  },
  {
    id: 4,
    img: purchasedFour,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbFour,
  },
  {
    id: 5,
    img: purchasedFive,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbOne,
  },
  {
    id: 6,
    img: purchasedSix,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbTwo,
  },
  {
    id: 7,
    img: purchasedSeven,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbThree,
  },
  {
    id: 8,
    img: purchasedEight,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons",
    name: "Becky Sutton",
    thumb: thumbFour,
  },
];

const PurchasedVideos = () => {
  const { push } = useRouter();

  const handelRoute = () => {
    push("/coach/upload-video");
  };

  return (
    <AdminLayout>
      <Row>
        <Col span={12}>
          <DashboardTitle title={"Videos"} />
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "3rem",
          }}
        >
          <CommonButton child={"Upload Video"} onClick={handelRoute} />
        </Col>
      </Row>

      {tutorials?.map((tutorial) => (
        <VideoCard
          key={tutorial?.id}
          image={tutorial?.img}
          title={tutorial?.title}
          text={tutorial?.text}
          name={tutorial?.name}
          thumb={tutorial?.thumb}
        />
      ))}
    </AdminLayout>
  );
};

export default PurchasedVideos;
