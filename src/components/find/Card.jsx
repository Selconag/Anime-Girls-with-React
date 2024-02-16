import React from 'react'
import styles from './Find.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Card = ({image,make}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="/" />
      <p>{make}</p>
    </div>
  )
}

export default Card