import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';

const Tvdetails = () => {
    const id = (window.location.search.split("=")[1])

    const api_key = "e31671c359169ad6021c28eb5db767a1";
    const api_url = "https://api.themoviedb.org/3/"

    const [tv, setTv] = useState()

    useEffect(() => {
        const fetchingMovies = async (endpoint) => {
            const res = await fetch(`${api_url}${endpoint}?api_key=${api_key}`)
            const data = await res.json()
            setTv(data)
        }
        fetchingMovies(`tv/${id}`)
    }, [id])

    return (
        <div className='movie-details'>
            <div className="movie-details-container">
                <div className="background-img">
                    <img src={`https://image.tmdb.org/t/p/w500${tv?.backdrop_path}`} alt="" />
                </div>
                <div className="movie-details-left">
                    <div className="poster-image">
                        <img src={`https://image.tmdb.org/t/p/w500${tv?.poster_path}`} alt="" />
                    </div>
                </div>
                <div className="movie-details-right">
                    <div className="details-info">
                        <h1>{tv?.name}</h1>
                        <p>{tv?.overview?.slice(0, 320)}</p>
                        <p>Started On :{tv?.first_air_date
                        }</p>
                        <div className="rating">
                            <h3>Rating: </h3>
                            <AiFillStar color='gold' size={"22"} />
                            <p>{tv?.vote_average}</p>
                        </div>
                        <p>No of Episodes :{tv?.number_of_episodes}</p>
                        <p style={{ display: "flex", gap: "12px" }}>Genres : {tv?.genres?.map(g => {
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
                        <p>{tv?.tagline}</p>
                    </div>
                    <hr />
                    <div className="production-details">
                        <div>
                            <h3>Production Companies:</h3>
                            <div style={{ display: "flex", gap: "10px" }}>
                                {tv?.production_companies?.map(p => {
                                    return (
                                        <p key={p.id}>{p.name}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <h3>NetWorks:- </h3>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            {tv?.networks?.map(n => {
                                return (
                                    <img style={{ width: "12%", backgroundColor: "white", padding: "12px", borderRadius: "10px" }} key={n.id} src={`https://image.tmdb.org/t/p/w500${n?.logo_path}`} alt="" />
                                )
                            })}
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <h3>Revenue Generated : </h3>
                        <p>${tv?.revenue}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Tvdetails