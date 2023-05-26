import React, { useEffect, useState } from 'react'
import Card from './card'

const Movies = () => {
    
    const api_key = "e31671c359169ad6021c28eb5db767a1";
    const api_url = "https://api.themoviedb.org/3/"

    const [movies, setMovies] = useState("")

    useEffect(() => {
        const fetchingMovies = async (endpoint) => {
            const res = await fetch(`${api_url}${endpoint}?api_key=${api_key}`)
            const data = await res.json()
            setMovies(data)
        }
        fetchingMovies("movie/top_rated")
    }, [])
    return (
        <div className='popular-movies'>
            <h1>Movies</h1>
            <div className="movies-container">
                {movies?.results?.map((mov) => {
                    return <Card key={mov.id} movie={mov} />
                })}
            </div>
        </div>
    )
}

export default Movies