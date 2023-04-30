// Components
import AdminLayout from "components/dashboard/AdminLayout";
import DashboardTitle from "components/dashboard/Title";
import ProfileThumb from "components/dashboard/ProfileThumb";
import Information from "components/dashboard/Information";
import CommonButton from "components/common/Button";

// React Icons
import userAvatar from "../../public/profile/user-avatar.png";

// Data
import { personalInfo } from "data";

// Next
import { useRouter } from "next/router";

// Ant D
import { Row, Col } from "antd";
import Link from "next/link";

const AdminDashboard = () => {

  const { push } = useRouter();

  const handelRoute = () => {
    push("/coach/edit-profile");
  };

  return (
    <AdminLayout>
      {/* Title  */}
      <Row>
        <Col lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
        >
          <DashboardTitle title="Personal Information" />
        </Col>
        <Col
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}

          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "3rem",
          }}
        >
          <CommonButton child={"Edit"} onClick={handelRoute} />
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
    </AdminLayout>
  );
};

export default AdminDashboard;
