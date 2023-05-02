// Components
import UserLayout from "components/dashboard/UserLayout";
import DashboardTitle from "components/dashboard/Title";
import ProfileThumb from "components/dashboard/ProfileThumb";
import Information from "components/dashboard/Information";
import CommonButton from "components/common/Button";

// React Icons
import userAvatar from "../../public/profile/user-avatar.png";

// Ant D
import { Row, Col } from "antd";

function Index() {
    return (
        <UserLayout>
            {/* Title  */}
            <Row>
                <Col span={12}>
                    <DashboardTitle title="Personal Information" />
                </Col>
                <Col
                    span={12}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingRight: "3rem",
                    }}
                >
                    <CommonButton child={"Edit"} />
                </Col>
            </Row>
            {/* Title  */}

            {/* Profile thumb  */}
            <ProfileThumb
                image={userAvatar}
                name="Kennith Martina"
                username="@Kennith Martina"
            />
            {/* Profile thumb  */}

            {/* contact info  */}
            <Information />
            {/* contact info  */}
        </UserLayout>
    );
}

export default Index;
