import React, { useEffect, useState } from 'react'
import Card from './card'
import { useSearchParams } from 'react-router-dom'


const SearchBar = () => {
    let [paramsKey] = useSearchParams()

    const [movies, setMovies] = useState("")

    const searchTerm = (paramsKey.get("search-term"))
    const searchType = (paramsKey.get("type"))

    const api_key = "e31671c359169ad6021c28eb5db767a1";
    const api_url = "https://api.themoviedb.org/3/"


    useEffect(() => {
        const fetchingMovies = async (endpoint) => {
            const res = await fetch(`${api_url}${endpoint}?api_key=${api_key}&query=${searchTerm}`)
            const data = await res.json()
            setMovies(data)
        }
        fetchingMovies(`search/${searchType}`)
    }, [searchType, searchTerm],)


    return (
        <div className='popular-movies'>
            <p style={{ fontSize: "18px", marginBottom: "2rem" }}>Total no of Results {movies?.total_results} found</p>
            <div className="movies-container">

                {movies?.results?.map((mov) => {
                    return <Card key={mov.id} movie={mov} />
                })}
            </div>
        </div>
    )
}

export default SearchBar