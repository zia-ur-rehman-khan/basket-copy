// Ant D
import { Col, Row } from "antd";

// Components
import RankingTable from "components/dashboard/Rankings/RankingTable";
import DashboardTitle from "components/dashboard/Title";
import AdminLayout from "components/dashboard/AdminLayout";

const Ranking = () => {
  return (
    <AdminLayout>
      <Col span={24}>
        <DashboardTitle title="Ranking" />
        <RankingTable className={"evolution__table"}/>
      </Col>
    </AdminLayout>
  );
};

export default Ranking;
