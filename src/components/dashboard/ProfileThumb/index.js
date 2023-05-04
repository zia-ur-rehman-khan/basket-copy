import React from "react";
import { Row, Col } from "antd";
import userAvatar from "public/profile/user-avatar.png";
// import userAvatar from '../../../constants'
import Image from "next/image";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";

const ProfileThumb = ({ image, name, username }) => {
  return (
    <div className="profile__thumb">
      <Row align="middle" gutter={20}>
        <Image src={image} alt="  " />
        <div style={{ marginLeft: "10px" }}>
          <CommonHeading heading={name} level={4} className="name" />
          <CommonTextField text={username} color="#ffffff8c" />
        </div>
      </Row>
    </div>
  );
};

export default ProfileThumb;
