import React from 'react'
import styles from '../styles/Sidebar.module.css'
import logo from '../assets/icons/icon1.jpg'
import logo2 from '../assets/icons/icon2.jpg'
import logo3 from '../assets/icons/icon3.jpg'
import logo4 from '../assets/icons/icon4.jpg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className={styles.container}>
        <nav>
            <ul className={styles.nav}>
                <li className={styles.li}>
                    <Link><img className={styles.img} src={logo} alt="Relax"/></Link>
                </li>
                <li className={styles.li}>
                    <Link><img className={styles.img} src={logo2} alt="Swim"/></Link>
                </li>
                <li className={styles.li}>
                    <Link><img className={styles.img} src={logo3} alt="Bike"/></Link>
                </li>
                <li className={styles.li}>
                    <Link><img className={styles.img} src={logo4} alt="Fitness"/></Link>
                </li>
            </ul>
        </nav>
        <p className={styles.copyright}>Copyright, SportSee 2020</p>
    </div>
    </>
  )
}

export default Sidebar