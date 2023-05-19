import { Card } from "antd";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import edit from "public/profile/icon-edit.svg";
import deleteIco from "public/profile/icon-delete.svg";
import { useRouter } from "next/router";

import { AiFillPlayCircle } from "react-icons/ai";
const CoachVideoCard = ({
  image,
  title,
  text,
  name,
  thumb,
  id,
  crudButtons,
  user,
  disableClick,
  coachTutorial,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/coach/my-tutorials/${id}`);
  };
  const handleEdit = () => {
    router.push("/coach/edit-video");
  };
  return (
    <Card className="vid__card">
      <>
        <div className="card__head">
          {crudButtons && (
            <div className="edit__btns-wrapp">
              <button>
                <Image src={deleteIco} alt="Iball" />
              </button>
              <button onClick={handleEdit}>
                <Image src={edit} alt="Iball" />
              </button>
            </div>
          )}
          <>
            <Image src={image} alt=" " />
            <button className="view__btn">
              <AiFillPlayCircle onClick={handleClick} />
            </button>
          </>
        </div>
        <div className="card__body">
          <CommonHeading heading={title} level={4} mb={10} fontWeight={600} />
          <CommonTextField text={text} mb={15} />
          <ul>
            <li>
              <Image src={thumb} alt=" " /> <span>{name}</span>
            </li>
            <li>12 Hours Ago</li>
          </ul>
        </div>
      </>
    </Card>
  );
};

export default CoachVideoCard;
