// Component
import { Button, Col, Row } from "antd";
import CommonButton from "components/common/Button";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import AdminLayout from "components/dashboard/AdminLayout";
import DashboardTitle from "components/dashboard/Title";
import Image from "next/image";
import Link from "next/link";

// Images
import donateBg from "public/profile/donate-bg.png";
import donate from "public/profile/donate.png";

// Icons
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <AdminLayout>
      <DashboardTitle title={"Partner/sponsor"} />
      <div className="donate__banner">
        <div className="donate__bg">
          <Image src={donateBg} alt=" " priority={true} height={245}/>
        </div>
        <div className="donate__text-wrapp">
          <Row align="middle">
            <Col span={14}>
              <div className="donate__text">
                <CommonHeading level={1} heading={"Donate To Iball Players"} />
                <CommonTextField
                  mb={15}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
                <CommonButton
                  child={"Donate Now"}
                  width="30%"
                  background={"#fff"}
                  border={"none"}
                  color="#000"
                />
              </div>
            </Col>
            <Col span={10}>
              <div className="donate__img">
                <Image src={donate} alt=" " priority={true} />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }} className="donate__info">
        <CommonTextField
          text={
            "To find out how you can work with or support iBall Basketball Foundation please email Or Call"
          }
        />
        <Link href="tel:1234567890">
          <a>
            <FaPhoneAlt />
            Call Now : +1-234-567-890
          </a>
        </Link>
        <Link href="mailto:williamlaw@iball.uk">
          <a>
            <FaEnvelope />
            Email : williamlaw@iball.uk
          </a>
        </Link>
      </div>
    </AdminLayout>
  );
};

export default Index;
