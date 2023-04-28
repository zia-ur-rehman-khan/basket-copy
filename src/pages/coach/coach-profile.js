// Components 
import DashboardTitle from 'components/dashboard/Title'
import UserLayout from 'components/dashboard/UserLayout'
import CoachCard from 'components/dashboard/CoachCard'

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


const CurrentCoach = () => {
    return (
        <UserLayout>
            <DashboardTitle title="Current Coaching" />
            {
                coachInfo.map(card => <CoachCard key={card.id} image={card.img} name={card.name} price={card.price} />)
            }
        </UserLayout>
    )
}

export default CurrentCoach