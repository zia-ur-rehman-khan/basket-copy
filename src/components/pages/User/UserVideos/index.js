// Components
import DashboardTitle from "components/dashboard/Title";
import UserLayout from "components/dashboard/UserLayout";
import SocialResponsibility from "components/dashboard/Videos/SocialResponsibility";
import FriendlyMatches from "components/dashboard/Videos/FriendlyMatches";
import PurchasedVideos from "components/dashboard/Videos/PurchasedVideos";
import UploadedVideos from "components/dashboard/Videos/UploadedVideos";
import CommonButton from "components/common/Button";

// Ant D
import { Col, Row, Tabs } from "antd";
import { useRouter } from "next/router";

const tabItems = [
  {
    key: "1",
    label: `Social Responsibility`,
    children: <SocialResponsibility />,
  },
  {
    key: "2",
    label: `Friendly Matches`,
    children: <FriendlyMatches />,
  },
  {
    key: "3",
    label: `Purchased Videos`,
    children: <PurchasedVideos />,
  },
  {
    key: "4",
    label: `Uploaded Videos`,
    children: <UploadedVideos />,
  },
];

const Videos = () => {
  const { push } = useRouter();
  const handelRoute = () => {
    push("/user/upload-video");
  };
  return (
    <UserLayout>
      <Row>
        <Col span={12}>
          <DashboardTitle title="Videos" />
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
      <Tabs defaultActiveKey="1" items={tabItems} className="full__w-tabs" />
    </UserLayout>
  );
};

export default Videos;
