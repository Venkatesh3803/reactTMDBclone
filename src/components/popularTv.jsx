import React, { useEffect, useState } from 'react'
import SwiperCard from './swiperCard';


const PopularTv = () => {
    const api_key = "e31671c359169ad6021c28eb5db767a1";
    const api_url = "https://api.themoviedb.org/3/"

    const [tv, setTv] = useState("")

    const fetchingMovies = async (endpoint) => {
        const res = await fetch(`${api_url}${endpoint}?api_key=${api_key}`)
        const data = await res.json()
        setTv(data)
    }
    useEffect(() => {
        fetchingMovies("tv/popular")
    }, [])
    return (
        <div className='popular-movies'>
            <h1>Popular Tv Shows</h1>
            <div className="popular-container">
                <SwiperCard tv={tv} noOfCards={6} delay={5000} />
            </div>
        </div>
    )
}

export default PopularTv