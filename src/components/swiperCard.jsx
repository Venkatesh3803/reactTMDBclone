import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode, } from 'swiper';
import { Link } from 'react-router-dom';
import noImage from "../images/No_Image_Available.jpg"
import { AiFillStar } from 'react-icons/ai';


const SwiperCard = ({ noOfCards, delay, movies, tv }) => {
    return (
        <div>
            {movies ? <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={10}
                slidesPerView={noOfCards}
                autoplay={{ delay: delay }}
                freeMode={true}
            >
                {movies?.results?.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Link to={`/movie-details?id=${item.id}`} style={{ textDecoration: "none", color: "white" }}>
                                {item.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="" /> : <img src={noImage} alt="" />}
                                <div className="card-info">
                                    <h1>{item.title}</h1>
                                    {/* <p></p> */}
                                    <div className="rating">
                                        <h3>Rating:-</h3>
                                        <AiFillStar color='gold' size={"22"} />
                                        <p>{item.vote_average}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper> :

                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={10}
                    slidesPerView={noOfCards}
                    autoplay={{ delay: delay }}
                    freeMode={true}

                >
                    {tv?.results?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Link to={`/tv-details?id=${item.id}`} style={{ textDecoration: "none", color: "white" }}>
                                    {item.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="" /> : <img src={noImage} alt="" />}
                                    <div className="card-info">
                                        <h1>{item.name}</h1>
                                        {/* <p></p> */}
                                        <div className="rating">
                                            <h3>Rating:-</h3>
                                            <AiFillStar color='gold' size={"22"} />
                                            <p>{item.vote_average}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            }
        </div>
    )
}

export default SwiperCard