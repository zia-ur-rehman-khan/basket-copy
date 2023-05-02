import { useEffect, useState } from "react";

// components
import DashboardTitle from "components/dashboard/Title";
import UserLayout from "components/dashboard/UserLayout";
import AllEvents from "components/dashboard/AllEvents";
import Sessions from "components/dashboard/Sessions";

// Calendar
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// AntD
import { Col, Row, Tabs } from "antd";

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
        new Date(2023, 3, 1),
        new Date(2023, 3, 5),
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
            children: <Sessions />,
        },
    ];

    return (
        <UserLayout>
            <DashboardTitle title="Calendar" />
            <Row gutter={25}>
                <Col span={12}>
                    <Tabs defaultActiveKey="1" items={tabItems} />
                </Col>
                <Col span={12}>
                    <div className="calendar__wrapp">
                        <Calendar onChange={setDate} defaultValue={date} />
                        <ul className="events__highlighter">
                            <li className="current__events">Events</li>
                            <li className="upcoming__events">Events</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </UserLayout>
    );
};

export default Index;
