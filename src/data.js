// import icoOne from '../src/public/profile/ico1.svg'
import { FaUserAlt } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaMapMarked } from 'react-icons/fa'
import { BsBuildings } from 'react-icons/bs'
import { FaSchool } from 'react-icons/fa'

// Admin Dashboard Sidenav 
export const coachNav = [
    {
        linkText: 'Personal Information', route: '/user'
    },
    {
        linkText: 'Change Password', route: '/user/change-password'
    },
    {
        linkText: 'Ranking', route: '/user/ranking'
    },
    {
        linkText: 'Current Coach', route: '/user/current-coach'
    },
    {
        linkText: 'Calendar', route: '/user/calendar'
    },
    {
        linkText: 'Videos', route: '/'
    },
    {
        linkText: 'My Orders', route: '/'
    },
    {
        linkText: 'My Wishlist', route: '/'
    },
    {
        linkText: 'Become a Partner', route: '/'
    },
    {
        linkText: 'My Wallet', route: '/'
    },
    {
        linkText: 'My Coach', route: '/'
    },
    {
        linkText: 'My  Membership', route: '/'
    },
]


// User Dashboard Sidenav 
export const userNav = [
    {
        linkText: 'Personal Information', route: '/',
    },
    {
        linkText: 'Change Password', route: '/',
    },
    {
        linkText: 'Billing History', route: '/',
    },
    {
        linkText: 'Ranking', route: '/',
    },
    {
        linkText: 'Calendar', route: '/',
    },
    {
        linkText: 'Coach Profiles', route: '/',
    },
    {
        linkText: 'Donate To iBall  Players', route: '/',
    },
    {
        linkText: 'My Wishlist', route: '/',
    },
    {
        linkText: 'My Orders', route: '/',
    },
    {
        linkText: 'My Tutorials', route: '/',
    },
    {
        linkText: 'Become a Partner', route: '/',
    },
    {
        linkText: 'My Wallet ', route: '/',
    },
]

export const personalInfo = [
    {
        text: 'First Name', labelValue: 'Herbert', ico: <FaUserAlt />
    },
    {
        text: 'Last Name:', labelValue: 'Douglas', ico: <FaUserAlt />
    },
    {
        text: 'Phone:', labelValue: '+1-234-567-890', ico: <BsTelephoneFill />
    },
    {
        text: 'Email', labelValue: 'Iball@gmail.com', ico: <BsEnvelopeFill />
    },
    {
        text: 'Address', labelValue: '347 Hickory Rd.Glen Burnie, MD 21060', ico: <FaMapMarkerAlt />
    },
    {
        text: 'Region', labelValue: 'North West', ico: <FaMapMarked />
    },
    {
        text: 'Zip', labelValue: '99501', ico: <FaMapMarked />
    },
    {
        text: 'Select State', labelValue: 'California', ico: <FaMapMarked />
    },
    {
        text: 'City', labelValue: 'New York', ico: <BsBuildings />
    },
]

export const schollInfo = [
    {
        text: 'School Name', labelValue: 'Silverleaf College', ico: <FaSchool />
    },
    {
        text: 'Grade', labelValue: 'Grade 11', ico: <FaSchool />
    },
    {
        text: 'Campus', labelValue: 'Campus 2', ico: <FaSchool />
    },
    {
        text: 'City', labelValue: 'New York', ico: <FaSchool />
    },
]