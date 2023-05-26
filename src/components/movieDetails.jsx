import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'


const MovieDetails = () => {
    const id = (window.location.search.split("=")[1])

    const api_key = "e31671c359169ad6021c28eb5db767a1";
    const api_url = "https://api.themoviedb.org/3/"

    const [movie, setMovie] = useState("")

    useEffect(() => {
        const fetchingMovies = async (endpoint) => {
            const res = await fetch(`${api_url}${endpoint}?api_key=${api_key}`)
            const data = await res.json()
            setMovie(data)
        }
        fetchingMovies(`movie/${id}`)
    }, [id])

    return (
        <div className='movie-details'>
            <div className="movie-details-container">
                <div className="background-img">
                    <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt="" />
                </div>
                <div className="movie-details-left">
                    <div className="poster-image">
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                    </div>
                </div>
                <div className="movie-details-right">
                    <div className="details-info">
                        <h1>{movie.title}</h1>
                        <p>{movie.overview?.slice(0,320)}</p>
                        <p>Release date :{movie.release_date}</p>
                        <div className="rating">
                            <h3>Rating: </h3>
                            <AiFillStar color='gold' size={"22"} />
                            <p>{movie.vote_average}</p>
                        </div>
                        <p>Duration :{movie.runtime} Min</p>
                        <p style={{ display: "flex", gap: "12px" }}>Genres : {movie?.genres?.map(g => {
                            return <li style={{ listStyle: "none" }} key={g.id}>{g.name}</li>
                        })}</p>
                        <button>Home Page</button>

                    </div>
                </div>

            </div>
            <div className="details-buttom">
                <div className="border">
                <div className="">
                        <h3>TagLine : </h3>
                        <p>{movie.tagline}</p>
                    </div>
                    <hr />
                    <div className="production-details">
                        <div>
                            <h3>Production Companies:</h3>
                            <div style={{ display: "flex", gap: "10px" }}>
                                {movie?.production_companies?.map(p => {
                                    return (
                                        <p key={p.id}>{p.name}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <h3>Budget : </h3>
                        <p>${movie.budget}</p>
                    </div>
                    <hr />
                    <div className="">
                        <h3>Revenue Generated : </h3>
                        <p>${movie.revenue}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails