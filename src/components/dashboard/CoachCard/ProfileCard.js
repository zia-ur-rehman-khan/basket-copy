import { Card } from "antd";
import CommonButton from "components/common/Button";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
const ProfileCard = ({ image, name, desig }) => {
  return (
    <Card className="coach__card">
      <Image src={image} alt=" " />
      <CommonHeading level={4} heading={name} mb={5} />
      <CommonTextField
        text={desig}
        mb={10}
        fontWeight={300}
        fontSize={"11.25px"}
        color="#ffffff90"
      />
      <CommonButton child={"View Profile"} />
    </Card>
  );
};

export default ProfileCard;
