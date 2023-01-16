import React from 'react'
import styles from './Header.module.scss'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.header__list}>
                <li className={styles.header__listItem}>
                    <Link to='/'>ALL</Link>
                </li>
                <li className={styles.header__listItem}>
                    <Link to='/man'>MAN</Link>
                </li>
                <li className={styles.header__listItem}>
                    <Link to='/woman'>WOMAN</Link>
                </li>
                <li className={styles.header__listItem}>
                    <Link to='/boy'>BOY</Link>
                </li>
                <li className={styles.header__listItem}>
                    <Link to='/girl'>GIRL</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
