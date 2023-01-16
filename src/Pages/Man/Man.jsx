import React from 'react'
import styles from './Man.module.scss'

import list from '../../Img/Man/list'

const Man = () => {
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
                                    {`${shoe.name} | Man`}
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

export default Man
