// Ant D
import { Col, Row } from "antd";

// Components
import ProfileThumb from "components/dashboard/ProfileThumb";
import RankingTable from "components/dashboard/Rankings/RankingTable";
import RankingHighlight from "components/dashboard/Rankings/RankingHighlight";
import DashboardTitle from "components/dashboard/Title";
import UserLayout from "components/dashboard/UserLayout";

// Images
import rankingThumb from "public/profile/user-thumb.png";

const Index = () => {
  return (
    <UserLayout>
      <Row gutter={30}>
        <Col span={16}>
          <DashboardTitle title="Ranking" />
          <RankingTable className="evolution__table" />
        </Col>
        <Col span={8}>
          <DashboardTitle title="My Rankings" />
          <ProfileThumb
            image={rankingThumb}
            name="Herbert Douglas"
            username="@Herbert Douglas"
          />
          <RankingHighlight />
        </Col>
      </Row>
    </UserLayout>
  );
};

export default Index;
