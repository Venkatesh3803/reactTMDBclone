import React, { useEffect, useState } from 'react'
import SwiperCard from './swiperCard';



const PopularMovies = () => {
    const api_key = "e31671c359169ad6021c28eb5db767a1";
    const api_url = "https://api.themoviedb.org/3/"

    const [movies, setMovies] = useState("")

    const fetchingMovies = async (endpoint) => {
        const res = await fetch(`${api_url}${endpoint}?api_key=${api_key}`)
        const data = await res.json()
        setMovies(data)
    }
    useEffect(() => {
        fetchingMovies("movie/upcoming")
    }, [])
    return (
        <div className='popular-movies'>
            <h1>Popular Movies</h1>
            <div className="popular-container">
                <SwiperCard movies={movies} noOfCards={6} delay={4000} />
            </div>
        </div>
    )
}

export default PopularMovies