import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import banner from './../../Img/All/banner.jpg'
import BOY_1 from './../../Img/All/BOY-1.jpg'
import BOY_2 from './../../Img/All/BOY-2.jpg'
import GIRL_1 from './../../Img/All/GIRL-1.jpg'
import GIRL_2 from './../../Img/All/GIRL-2.jpg'
import MAN_1 from './../../Img/All/MAN-1.jpg'
import MAN_2 from './../../Img/All/MAN-2.jpg'
import WOMAN_1 from './../../Img/All/WOMAN-1.jpg'
import WOMAN_2 from './../../Img/All/WOMAN-2.jpg'
import styles from './Home.module.scss'

const Home = () => {

    const [shoes, setShoes] = useState([
        {
            name: 'Brown Shoes',
            wearer: 'Man',
            seasons: 'Spring',
            img: MAN_1
        },
        {
            name: 'White Shoes',
            wearer: 'Man',
            seasons: 'Summer',
            img: MAN_2
        },
        {
            name: 'Cream Shoes',
            wearer: 'Woman',
            seasons: 'Autumn',
            img: WOMAN_1
        },
        {
            name: 'Black Shoes',
            wearer: 'Woman',
            seasons: 'Winter',
            img: WOMAN_2
        },
        {
            name: 'Blue Shoes',
            wearer: 'Boy',
            seasons: 'Winter',
            img: BOY_1
        },
        {
            name: 'White Shoes',
            wearer: 'Boy',
            seasons: 'Summer',
            img: BOY_2
        },
        {
            name: 'Grey Shoes',
            wearer: 'Girl',
            seasons: 'Winter',
            img: GIRL_1
        },
        {
            name: 'Brown Shoes',
            wearer: 'Girl',
            seasons: 'Winter',
            img: GIRL_2
        }
    ])

    return (
        <section className={styles.home}>
            <div className={styles.banner}>
                <img src={banner} alt="" />
            </div>
            <div className={styles.shoes}>
                {
                    shoes.map((shoe, idx) => (
                        <div className={styles.shoe} key={idx}>
                            <div className={styles.shoe__img}>
                                <img src={shoe.img} alt="" />
                            </div>
                            <div className={styles.shoe__info}>
                                <div className={styles.shoe__title}>
                                    <div className={styles.shoe__name}>
                                        {`${shoe.name} | ${shoe.wearer}`}
                                    </div>
                                    <div className={styles.shoe__colors}></div>
                                </div>
                                <div className={styles.shoe__season}>
                                    {`Season: ${shoe.seasons}`}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ul className={styles.options}>
                <li className={styles.option}><Link to='/man'>MAN</Link></li>
                <li className={styles.option}><Link to='/woman'>WOMAN</Link></li>
                <li className={styles.option}><Link to='/boy'>BOY</Link></li>
                <li className={styles.option}><Link to='/girl'>GIRL</Link></li>
            </ul>
        </section>
    )
}

export default Home
