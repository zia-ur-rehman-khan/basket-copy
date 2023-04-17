import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React from "react";
import AcademyPage from "./AcademyPage";
import SchoolPage from "./SchoolPage";
import CampsPage from "./CampsPage";
import CommunityPage from "./CommunityPage";
import BirthdayPage from "./BirthdayPage";

const Event = (props) => {
  const router = useRouter();
  const { type } = router.query;

  console.log(props, "params");

  const _render = () => {
    switch (type) {
      case "school":
        return <SchoolPage />;
      case "academy":
        return <AcademyPage />;
      case "community":
        return <CommunityPage />;
      case "birthday":
        return <BirthdayPage />;
      case "camps":
        return <CampsPage text={"camps"} />;
    }
  };

  return <>{_render()}</>;
};

export default Event;
