import { Col, Row } from 'antd'
import ProfileThumb from 'components/dashboard/ProfileThumb'
import RankingTable from 'components/dashboard/Rankings/RankingTable'
import DashboardTitle from 'components/dashboard/Title'
import UserLayout from 'components/dashboard/UserLayout'
import rankingThumb from '../../public/profile/user-thumb.png'
import RankingHighlight from 'components/dashboard/Rankings/RankingHighlight'

const Ranking = () => {
    return (
        <UserLayout>
            <Row gutter={30}>
                <Col span={16}>
                    <DashboardTitle title="Ranking" />
                    <RankingTable />
                </Col>
                <Col span={8}>
                    <DashboardTitle title="My Rankings" />
                    <ProfileThumb image={rankingThumb} name="Herbert Douglas" username="@Herbert Douglas" />
                    <RankingHighlight />
                </Col>
            </Row>
        </UserLayout>
    )
}

export default Ranking