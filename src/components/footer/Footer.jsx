import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../images/logo_Redux.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img src={Logo} alt="" />
            <button>Share a waifu</button>
            
        </div>

    </div>
  )
}

export default Footer