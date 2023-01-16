import React from 'react'
import styles from './Girl.module.scss'

import list from '../../Img/Girl/list'

const Girl = () => {
    return (
        <section className={styles.shoes}>
            {
                list.map((shoe, idx) => (
                    <div className={styles.shoe} key={idx}>
                        <div className={styles.shoe__img}>
                            <img src={shoe.img} alt="" />
                        </div>
                        <div className={styles.shoe__info}>
                            <div className={styles.shoe__title}>
                                <div className={styles.shoe__name}>
                                    {`${shoe.name} | Girl`}
                                </div>
                            </div>
                            <div className={styles.shoe__season}>
                                {`Season: ${shoe.seasons}`}
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Girl
