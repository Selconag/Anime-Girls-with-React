import React from 'react'
import styles from './Luxury.module.css'


export const Luxury = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h2>Luxury Selection</h2>
            <div className={styles.text_bg}>
                <p>
                    <span>Select from top luxury vehicles</span>
                </p>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="https://preview.redd.it/nurd94oqqqr41.jpg?width=1080&crop=smart&auto=webp&s=ab0e10bd34de6a8bbde4cf7a906807c9937b9f80"
                 alt="/" />
                <div className={styles.content}>
                    <h3>Mitsubishi Miku</h3>

                </div>
            </div>
            <div className={styles.card}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Mio_Akiyama_from_K-On%21_itasha_right_20090815.jpg"
                 alt="/" />
                <div className={styles.content}>
                    <h3>Mazda Mio</h3>

                </div>
            </div>
            <div className={styles.card}>
                <img src="https://pbs.twimg.com/media/D11pd7dU0AATO3e?format=jpg&name=medium"
                 alt="/" />
                <div className={styles.content}>
                    <h3>Skyline Asuka</h3>

                </div>
            </div>
            <div className={styles.card}>
                <img src="https://img.mipon.org/wp-content/uploads/2019/06/02073623/rem_car2.jpg"
                alt="/" />
                <div className={styles.content}>
                    <h3>Subaru Rem</h3>

                </div>
            </div>
        </div>        
    </div>
  )
}
export default Luxury
