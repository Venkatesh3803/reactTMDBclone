import React, { useEffect, useState } from 'react'
import Card from './card'

const Tv = () => {
    const api_key = "e31671c359169ad6021c28eb5db767a1";
    const api_url = "https://api.themoviedb.org/3/"

    const [tv, setTv] = useState("")

    const fetchingMovies = async (endpoint) => {
        const res = await fetch(`${api_url}${endpoint}?api_key=${api_key}`)
        const data = await res.json()
        setTv(data)
    }
    useEffect(() => {
        fetchingMovies("tv/top_rated")
    }, [])
    return (
        <div className='popular-movies'>
            <h1>Tv Shows</h1>
            <div className="movies-container">
                {tv?.results?.map((tvshow) => {
                    return <Card key={tvshow.id} tv={tvshow} />
                })}
            </div>
        </div>
    )
}

export default Tv