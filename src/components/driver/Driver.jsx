import React from 'react'
import styles from './Driver.module.css'

import backLogo from '../../images/Drive.jpg'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={backLogo} alt="/" />

        </div>
        <div className={styles.right}>
            <h2>Find your perfect <span>anime girl driver</span></h2>
            <p>No picking more than 1 waifu</p>
            <button>Browse Waifus</button>
        </div>

    </div>
  )
}

export default Driver