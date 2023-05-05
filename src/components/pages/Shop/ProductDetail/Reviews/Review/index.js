import React from "react";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

import CommonCard from "components/common/Card";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";

const Index = () => {
  return (
    <>
      <CommonCard
        style={{ margin: "0 9px" }}
        child={
          <>
            <Card
              cover={
                <div
                  className="review_content"
                  style={{ padding: "20px 20px 0px 20px" }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Interdum consectetur libero id faucibus nisl
                    tincidunt eget nullam.
                  </p>
                  {/* <Commonheading level={4} heading={"Andy Smith"} /> */}
                </div>
              }
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Andy Smith"
                description="VP of Marketing"
                // padding: 10px 10px 15px 10px;
              />
            </Card>
          </>
        }
      />
    </>
  );
};

export default Index;
