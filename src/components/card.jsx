import React from 'react'
import { Link } from 'react-router-dom'
import noImage from "../images/No_Image_Available.jpg"

const Card = ({ movie, tv }) => {
    return (
        <div className='card'>
            {movie ? <div className="info">
                <Link to={`../movie-details?id=${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" /> : <img src={noImage} alt="" />}
                </Link>
            </div>
                :
                <div className="info">
                    <Link to={`../tv-details?id=${tv.id}`} style={{ textDecoration: "none", color: "white" }}>
                    {tv.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${tv?.poster_path}`} alt="" /> : <img src={noImage} alt="" />}
                    
                    </Link>
                </div>}
        </div>
    )
}

export default Card