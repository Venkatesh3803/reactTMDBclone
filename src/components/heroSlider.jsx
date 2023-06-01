import React, { useEffect, useState } from 'react'
import "../styles.css"
import SwiperCard from './swiperCard';



const HeroSlider = () => {
    const api_key = "e31671c359169ad6021c28eb5db767a1";
    const api_url = "https://api.themoviedb.org/3/"

    const [movies, setMovies] = useState("")

    useEffect(() => {
        const fetchingMovies = async (endpoint) => {
            const res = await fetch(`${api_url}movie/${endpoint}?api_key=${api_key}`)
            const data = await res.json()
            setMovies(data)
        }
        fetchingMovies("upcoming")
    }, [])

    return (
        <div className='hero-slider'>
            <SwiperCard movies={movies} noOfCards={3} delay={2000} heroSlider />
        </div >
    )
}

export default HeroSlider
