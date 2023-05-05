import { useEffect, useState } from "react";

// components
import DashboardTitle from "components/dashboard/Title";
import AdminLayout from "components/dashboard/AdminLayout";
import AllEvents from "components/dashboard/AllEvents";

// Calendar
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// AntD
import { Col, Row, Tabs } from "antd";
import CoachSessions from "components/dashboard/CoachSessions";
import CommonTextField from "components/common/TextField";

// Events Data
const events = [
  {
    id: 1,
    date: 16,
    month: "Feb",
    name: "Eventions Parade Festivities",
  },
  {
    id: 2,
    date: 16,
    month: "Feb",
    name: "Eventions Parade Festivities",
  },
  {
    id: 3,
    date: 16,
    month: "Feb",
    name: "Eventions Parade Festivities",
  },
];

const Index = () => {
  // Calendar Customizer
  const [date, setDate] = useState([
    // new Date(2023, 3, 1),
    // new Date(2023, 3, 5),
    new Date(),
  ]);
  useEffect(() => {
    const calendarDays = document.querySelectorAll(
      ".react-calendar__month-view__weekdays__weekday abbr"
    );
    calendarDays.forEach((daysIndex) => {
      daysIndex.innerHTML = daysIndex.innerText[0];
    });
  }, []);

  // Tabs Content
  const tabItems = [
    {
      key: "1",
      label: `Events`,
      children: events.map((event, i) => (
        <AllEvents
          key={i}
          date={event.date}
          month={event.month}
          name={event.name}
        />
      )),
    },
    {
      key: "2",
      label: `My Sessions`,
      children: <CoachSessions />,
    },
  ];
  
  const locale = {
    startWeekDay : 0
  }

  return (
    <AdminLayout>
      <DashboardTitle title="Calendar" />
      <Row gutter={25}>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Tabs defaultActiveKey="1" items={tabItems} className="full__w-tabs" />
        </Col>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <div className="calendar__wrapp">
            <Calendar onChange={setDate} defaultValue={date} locale={locale} />
            <ul className="events__highlighter">
              <li className="current__events">
                <CommonTextField
                  text="Events"
                  color="#ff6600"
                  fontSize={"15.24px"}
                />
              </li>
              <li className="upcoming__events">
                <CommonTextField
                  text="Events"
                  color="#ffc700"
                  fontSize={"15.24px"}
                />
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default Index;
