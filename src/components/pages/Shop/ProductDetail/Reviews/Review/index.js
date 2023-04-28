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

const Index = () => {
  return (
    <>
      <CommonCard
        child={
          <>
            <Card
              style={{
                width: 300,
              }}
              cover={
                <div className="review_content" style={{padding:"20px"}}>
                  <p>
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                  </p>
                </div>
              }
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Andy Smith"
                description="VP of Marketing"
              />
            </Card>
          </>
        }
      />
    </>
  );
};

export default Index;
