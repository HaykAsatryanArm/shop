import React from 'react'
import styles from './Footer.module.scss'
import { IoLocationSharp, IoLocationOutline } from 'react-icons/io5'
import { BsTelephoneFill, BsTelephone } from 'react-icons/bs'
import { AiFillYoutube, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.sections}>
                <div className={styles.sections__title}>
                    Sections
                    <ul className={styles.sections__list}>
                        <li className={styles.sections__listItem}>
                            <Link to='/man'>MAN</Link>
                        </li>
                        <li className={styles.sections__listItem}>
                            <Link to='/womman'>WOMAN</Link>
                        </li>
                        <li className={styles.sections__listItem}>
                            <Link to='/boy'>BOY</Link>
                        </li>
                        <li className={styles.sections__listItem}>
                            <Link to='/girl'>GIRL</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.social}>
                <div className={styles.social__title}>
                    Social Media
                    <ul className={styles.social__list}>
                        <li className={styles.social__listItem}>
                            <Link to='https://www.instagram.com/'>
                                <div className={styles.social__listItem__icon}>
                                    <AiFillInstagram />
                                </div>
                                Instagram
                            </Link>
                        </li>
                        <li className={styles.social__listItem}>
                            <Link to='https://www.facebook.com/'>
                                <div className={styles.social__listItem__icon}>
                                    <AiFillFacebook />
                                </div>
                                Facebook
                            </Link>
                        </li>
                        <li className={styles.social__listItem}>
                            <Link to='https://www.youtube.com/'>
                                <div className={styles.social__listItem__icon}>
                                    <AiFillYoutube />
                                </div>
                                Youtube
                            </Link>
                        </li>
                        <li className={styles.social__listItem}>
                            <Link to='https://www.linkedin.com/'>
                                <div className={styles.social__listItem__icon}>
                                    <AiFillLinkedin />
                                </div>
                                LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.contact}>
                <div className={styles.contact__title}>
                    Contact
                    <ul className={styles.contact__list}>
                        <li className={styles.contact__listItem}>
                            <div className={styles.contact__listItem__icon}>
                                <IoLocationSharp />
                            </div>
                            123 California street, New York, USA
                        </li>
                        <li className={styles.contact__listItem}>
                            <div className={styles.contact__listItem__icon}>
                                <IoLocationOutline />
                            </div>
                            456 Tverskaya street, Moscow, Russia
                        </li>
                        <li className={styles.contact__listItem}>
                            <div className={styles.contact__listItem__icon}>
                                <BsTelephoneFill />
                            </div>
                            +1 0234 567890
                        </li>
                        <li className={styles.contact__listItem}>
                            <div className={styles.contact__listItem__icon}>
                                <BsTelephone />
                            </div>
                            +7 123 45 67 89
                        </li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer
