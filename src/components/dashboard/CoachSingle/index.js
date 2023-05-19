import Image from "next/image";
import Link from "next/link";
import { Row, Col, Card } from "antd";
import { AiFillPlayCircle } from "react-icons/ai";
import CommonButton from "components/common/Button";

const CoachSingle = ({ img, title, text, name, thumb, coach, id }) => {
  return (
    <div className="single__vid-wrapp">
      <Card className="vid__card full-w">
        <div className="card__head">
          <Link href="/user/single-coach">
            <>
              <Image src={img} alt=" " />
              <AiFillPlayCircle />
            </>
          </Link>
        </div>
        <div className="card__body">
          <h4>{title}</h4>
          <p>{text}</p>
          <ul>
            <li>
              <Image src={thumb} alt=" " /> <span>{name}</span>
            </li>
            <li>12 Hours Ago</li>
          </ul>
        </div>
      </Card>
      {!coach && (
        <Row gutter={20}>
          <Col span={12}>
            <CommonButton child={"$25 To View"} />
          </Col>
          <Col span={12}>
            <CommonButton
              type="default"
              child={"Buy Monthly Membership For $500"}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CoachSingle;
