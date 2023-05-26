import React, { useState } from 'react'
import "../styles.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom'


const Navber = () => {

    const [search, setSearch] = useState("")
    const [type, setType] = useState("movie")
    
    console.log(search)
    return (
        <div className='navber'>
            <div className="nav-container">
                <div className="nav-left">
                    <div className="logo">
                        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                            <h2>TMDB <span>Clone.</span></h2>
                        </Link>
                    </div>
                    <div className="links">
                        <ul>
                            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                                <li>Home</li>
                            </Link>
                            <Link to={"/movies"} style={{ textDecoration: "none", color: "white" }}>
                                <li>Movies</li>
                            </Link>
                            <Link to={"/tv-shows"} style={{ textDecoration: "none", color: "white" }}>
                                <li>Tv Shows</li>
                            </Link>
                            <li>UpComing</li>
                        </ul>
                    </div>
                </div>
                <div className="nav-right">

                    <div className="search">
                        <div className="radio">
                            <input onClick={(e) => setType(e.target.value)} type="radio" value='tv' name='movie' />
                            <label>tv</label>
                        </div>
                        <div className="radio">
                            <input onClick={(e) => setType(e.target.value)} type="radio" value='movie' name='movie' />
                            <label>Movies</label>
                        </div>
                    </div>



                    <div className="search">
                        <input type="text" placeholder='Search here...' onChange={(e) => setSearch(e.target.value)} />
                        <Link to={`../search?type=${type}&search-term=${search}`}>
                            <AiOutlineSearch className='search-icon' />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navber
