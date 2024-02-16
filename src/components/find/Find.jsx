import React from 'react'
import styles from './Find.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Card from './Card'
import 'swiper/css'
import 'swiper/css/navigation'

import logo1 from '../../images/Drive.jpg'

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1> Find your drive and driver UwU </h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore worlds largest Anime Girls with Cars Collection Here</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
      <Swiper
      modules={[Navigation,Pagination,Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      breakpoints={{
        340:{
          width: 200,
          slidesPerView: 1,
        },
        768:{
          width: 768,
          slidesPerView: 3,
        },
        1040:{
          width: 1040,
          slidesPerView: 5,
        }

      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <Card /*image='../../images/Drive.jpg'*/
          image ='https://images.unsplash.com/photo-1657726565620-1fa7b3d63c90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG95b3RhJTIwY29yb2xsYSUyMGFlODZ8ZW58MHx8MHx8fDA%3D'
          make = 'Toyota Corolla'/>
        </SwiperSlide>
        <SwiperSlide>
          <Card /*image='../../images/Drive.jpg'*/
          image ='https://images.unsplash.com/photo-1608585951410-cff38376191a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          make = 'Subaru'/>
        </SwiperSlide>
        <SwiperSlide>
          <Card /*image='../../images/Drive.jpg'*/
          image ='https://images.unsplash.com/photo-1618205062886-3976f4bb8219?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          make = 'Toyota Supra'/>
        </SwiperSlide>
        <SwiperSlide>
          <Card /*image='../../images/Drive.jpg'*/
          image ='https://images.unsplash.com/photo-1695159859513-145db96b56de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWl0c3ViaXNoaSUyMGVjbGlwc2V8ZW58MHx8MHx8fDA%3D'
          make = 'Mitsubishi Eclipse'/>
        </SwiperSlide>
        <SwiperSlide>
          <Card /*image='../../images/Drive.jpg'*/
          image ='https://images.unsplash.com/photo-1630381933629-1ea495aab22d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG90dXMlMjBjYXJ8ZW58MHx8MHx8fDA%3D'
          make = 'Lotus'/>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Find