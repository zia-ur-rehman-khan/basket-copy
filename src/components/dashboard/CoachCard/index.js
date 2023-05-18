import { Card } from "antd";
import CommonButton from "components/common/Button";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
const CoachCard = ({ image, name, price }) => {
  return (
    <Card className="coach__card">
      <Image src={image} alt=" " />
      <CommonHeading level={4} heading={name} mb={5} />
      <CommonTextField text={`$${price}`} mb={15} />
      <CommonButton child={"Book Now"} />
    </Card>
  );
};

export default CoachCard;
