import React from 'react'
import { useRouter } from 'next/router'
import { userNav, coachNav } from 'data';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs'
import styles from './Style.module.css'

function Sidebar() {
  const admin = useRouter();
  const user = useRouter();

  const isAdmin = admin.pathname.startsWith('/coach')
  const isUser = user.pathname.startsWith('/user')
  const isActive = useRouter().pathname

  return (
    <ul className={styles.profile__sidebar}>
      {
        isAdmin && (
          userNav.map((nav, i) => (
            <li key={i} className={isActive == nav.route && styles.active__link}><Link href={nav.route}><a>{nav.linkText} <span><BsArrowRight /></span></a></Link> </li>
          ))
        )
      }
      {
        isUser && (
          coachNav.map((nav, i) => (
            <li key={i} className={isActive == nav.route && styles.active__link}><Link href={nav.route}><a>{nav.linkText} <span><BsArrowRight /></span></a></Link></li>
          ))
        )
      }
    </ul>
  )
}

export default Sidebar