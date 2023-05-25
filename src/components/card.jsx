import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Card = ({ movie, tv }) => {
    return (
        <div className='card'>
            {movie ? <div className="info">
                <Link to={`../movie-details?id=${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                    <h3>{movie?.title}</h3>
                    <div className="rating">
                        <h3>Rating: </h3>
                        <AiFillStar color='gold' size={"22"} />
                        <p>{movie.vote_average}</p>
                    </div>
                    <p>Lang :HI</p>
                    <button style={{ padding: "0.5rem 1rem", fontSize: "12px", fontWeight: "400" }}>More Info</button>
                </Link>
            </div>
                :
                <div className="info">
                    <Link to={`../tv-details?id=${tv.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <img src={`https://image.tmdb.org/t/p/w500${tv?.poster_path}`} alt="" />
                        <h3>{tv?.name}</h3>
                        <div className="rating">
                            <h3>Rating: </h3>
                            <AiFillStar color='gold' size={"22"} />
                            <p>{tv.vote_average}</p>
                        </div>
                        <p>Lang :HI</p>
                        <button style={{ padding: "0.5rem 1rem", fontSize: "12px", fontWeight: "400" }}>More Info</button>
                    </Link>
                </div>}
        </div>
    )
}

export default Card