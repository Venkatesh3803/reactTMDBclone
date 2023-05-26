import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode, } from 'swiper';
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom';
import noImage from "../images/No_Image_Available.jpg"


const HeroSwiperCard = ({ noOfCards, delay, movies }) => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={10}
                slidesPerView={noOfCards}
                autoplay={{ delay: delay }}
                freeMode={true}
            >
                {movies?.results?.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Link to={`/?id=${item.id}`}>
                                {item.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="" /> : <img src={noImage} alt="" />}
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>



        </div>
    )
}

export default HeroSwiperCard