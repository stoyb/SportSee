import React from 'react'
import logo from '../assets/logo_header.svg'
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="SportSee"/>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.link} to="/">Accueil</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/">Accueil</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/">Profil</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/">Réglagles</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/">Communauté</Link>
                </li>
            </ul>
        </nav>
    </header>
    
    </>
  )
}

export default Navbar