// import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { BsFillPlayFill } from "react-icons/bs"
import HeroSlider from './heroSlider'
import { useEffect, useState } from "react"
import noImage from "../images/No_Image_Available.jpg"


const Hero = () => {

    const id = (window.location.search.split("=")[1])
    const api_key = "e31671c359169ad6021c28eb5db767a1";
    const api_url = "https://api.themoviedb.org/3/"

    let defaultId = 667538

    const [movie, setMovie] = useState("")

    useEffect(() => {
        const fetchingMovies = async (endpoint) => {
            const res = await fetch(`${api_url}${endpoint}?api_key=${api_key}`)
            const data = await res.json()
            setMovie(data)
        }
        fetchingMovies(`movie/${id ? id : defaultId}`)
    }, [id, defaultId])
    return (
        <div className='hero'>
            <div className="hero-container">
                {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt="" /> : <img src={noImage} alt={movie.title} />}
                <div className="hero-info">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <div className="rating">
                        <h4>Rating :</h4>
                        <AiFillStar color='gold' size={"22"} />
                        <span>{movie.vote_average}</span>
                    </div>
                    <p>Date OF Release : {movie.release_date}</p>
                    <button>WATCH NOW <BsFillPlayFill size={"22"} /></button>
                </div>
                <HeroSlider />
            </div>
        </div>
    )
}

export default Hero