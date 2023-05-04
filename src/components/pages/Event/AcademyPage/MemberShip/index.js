import { Space } from "antd";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import tick from "public/tick.svg";
import React from "react";

const MemberShip = () => {
  const temp = [
    {
      point: "1 Group Training Session per Week",
      text: "Weekly Group Training Sessions Made Up Of Drills & Scrimmages.",
    },
    {
      point: "1 Film Study Session Per Week",
      text: "30 Min Film Study Session - One Of The Senior Iball Coaches Reviews And Analyses Your In-Game Footage And Identifies Areas Of Progression And Those Which Can Be Improved.",
    },
    {
      point: "1 Academy Jersey ",
      text: "1 X Iball Academy Kit With Printed Name.",
    },
  ];
  return (
    <div className="bg-grey member-ship-card radius">
      <Space size={30} direction="vertical">
        <Commonheading level={2} heading={"Academy memberships"} />
        <CommonTextField
          fontSize={"22px"}
          text="You can access following"
          fontWeight={600}
        />
        {temp.map((t, i) => (
          <>
            <Space align="baseline" key={i}>
              <Image
                src={tick}
                alt="Picture of the author"
                width={16}
                height={16}
                layout="fixed"
              />
              <Space direction="vertical">
                <CommonTextField
                  fontSize={"22px"}
                  fontWeight={600}
                  text={t?.point}
                  className={"primary"}
                />
                <CommonTextField text={t?.text} />
              </Space>
            </Space>
          </>
        ))}
      </Space>
      <CommonTextField
        className={"primary mt-5"}
        fontSize={"27px"}
        text={"Only $35.50"}
      />
    </div>
  );
};

export default MemberShip;
