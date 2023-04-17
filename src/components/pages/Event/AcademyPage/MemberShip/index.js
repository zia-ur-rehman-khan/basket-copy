import { Space } from "antd";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import tick from "public/tick.svg";
import React from "react";

const MemberShip = () => {
  const temp = [1, 2, 3, 4];
  return (
    <div className="bg-grey member-ship-card radius">
      <Space size={20} direction="vertical">
        <Commonheading level={4} heading={"Academy memberships"} />
        <CommonTextField fontSize={"22px"} text="You can access following" />
        {temp.map((t, i) => (
          <>
            <Space align="baseline" key={i}>
              <Image
                src={tick}
                alt="Picture of the author"
                width={19}
                height={19}
              />
              <Space direction="vertical">
                <CommonTextField
                  fontSize={"22px"}
                  text="1 Group Training Session per Week"
                  className={"primary"}
                />
                <CommonTextField
                  text={
                    "Weekly Group Training Sessions Made Up Of Drills & Scrimmages."
                  }
                />
              </Space>
            </Space>
          </>
        ))}
      </Space>
      <CommonTextField
        className={"primary mt-3"}
        fontSize={"27px"}
        text={"Only $35.50"}
      />
    </div>
  );
};

export default MemberShip;
