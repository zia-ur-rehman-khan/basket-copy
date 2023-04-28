// Components 
import DashboardTitle from 'components/dashboard/Title'
import UserLayout from 'components/dashboard/UserLayout'

// Ant D 
import { Tabs } from 'antd';

// Images for tabs 
import coachOne from 'public/profile/coach1.png'
import coachTwo from 'public/profile/coach2.png'
import coachThree from 'public/profile/coach3.png'
import coachFour from 'public/profile/coach4.png'
import coachFive from 'public/profile/coach5.png'
import coachSix from 'public/profile/coach6.png'
import coachSeven from 'public/profile/coach7.png'
import coachEight from 'public/profile/coach8.png'
import coachNine from 'public/profile/coach9.png'
import coachTen from 'public/profile/coach10.png'
import vidOne from 'public/profile/coachvid1.png'
import vidTwo from 'public/profile/coachvid2.png'
import vidThree from 'public/profile/coachvid3.png'
import vidFour from 'public/profile/coachvid4.png'
import thumbOne from 'public/profile/thumb1.png'
import thumbTwo from 'public/profile/thumb2.png'
import thumbThree from 'public/profile/thumb3.png'
import thumbFour from 'public/profile/thumb4.png'
import CoachCard from 'components/dashboard/CoachCard';
import VideoCard from 'components/dashboard/VideoCard';
// import vid from 'public/video/video.mp4'

const coachInfo = [
    {
        id: 1,
        img: coachOne,
        name: 'Molly Carroll',
        price: 250,
    },
    {
        id: 2,
        img: coachTwo,
        name: 'Wallace Boone',
        price: 250,
    },
    {
        id: 3,
        img: coachThree,
        name: 'Malcolm Leonard',
        price: 250,
    },
    {
        id: 4,
        img: coachFour,
        name: 'Clarence Schmidt',
        price: 250,
    },
    {
        id: 5,
        img: coachFive,
        name: 'Trevor Dawson',
        price: 250,
    },
    {
        id: 6,
        img: coachSix,
        name: 'Dallas Hunter',
        price: 250,
    },
    {
        id: 7,
        img: coachSeven,
        name: 'Jeffery Blair',
        price: 250,
    },
    {
        id: 8,
        img: coachEight,
        name: 'Derrick Duncan',
        price: 250,
    },
    {
        id: 9,
        img: coachNine,
        name: 'Frankie Griffith',
        price: 250,
    },
    {
        id: 10,
        img: coachTen,
        name: 'Alejandro Mack',
        price: 250,
    },
]
const coachVids = [
    {
        id: 1,
        img: vidOne,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbOne,

    },
    {
        id: 2,
        img: vidTwo,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbTwo,

    },
    {
        id: 3,
        img: vidThree,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbThree,

    },
    {
        id: 4,
        img: vidFour,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbFour,

    },
    {
        id: 5,
        img: vidOne,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbOne,

    },
    {
        id: 6,
        img: vidTwo,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbTwo,

    },
    {
        id: 7,
        img: vidThree,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbThree,

    },
    {
        id: 8,
        img: vidFour,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehender itcons',
        name: 'Becky Sutton',
        thumb: thumbFour,

    },
]
const tabItems = [
    {
        key: '1',
        label: `Regular Coaching`,
        children: coachInfo.map(card => <CoachCard key={card.id} image={card.img} name={card.name} price={card.price} />),
    },
    {
        key: '2',
        label: `Video Tutorials`,
        children: coachVids.map(card => <VideoCard key={card.id} id={card.id} image={card.img} title={card.title} text={card.text} name={card.name} thumb={card.thumb} />),
    },
];

const CurrentCoach = () => {
    return (
        <UserLayout>
            <DashboardTitle title="Current Coaching" />
            <Tabs defaultActiveKey="1" items={tabItems} />
        </UserLayout>
    )
}

export default CurrentCoach