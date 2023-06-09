import React, { useState } from 'react'
import "../styles.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'


const Navber = () => {

    const [search, setSearch] = useState("")
    const [type, setType] = useState("movie")
    const active = (window.location.pathname)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search === "") {
            alert("please enter movie name")
        }
        navigate(`../search?type=${type}&search-term=${search}`)
    }



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
                                <li className={active === "/" ? "active" : ""}>Home</li>
                            </Link>
                            <Link to={"/movies"} style={{ textDecoration: "none", color: "white" }}>
                                <li className={active === "/movies" ? "active" : ""}>Movies</li>
                            </Link>
                            <Link to={"/tv-shows"} style={{ textDecoration: "none", color: "white" }}>
                                <li className={active === "/tv-shows" ? "active" : ""}>Tv Shows</li>
                            </Link>
                            <Link to={"/up-coming"} style={{ textDecoration: "none", color: "white" }}>
                                <li className={active === "/up-coming" ? "active" : ""}>Up Coming</li>
                            </Link>

                        </ul>
                    </div>
                </div>
                <div className="nav-right">

                    <div className="search">
                        <div className="radio">
                            <input onClick={(e) => setType(e.currentTarget.value)} type="radio" value='tv' name='movie' />
                            <label>tv</label>
                        </div>
                        <div className="radio">
                            <input onClick={(e) => setType(e.currentTarget.value)} type="radio" value='movie' name='movie' />
                            <label>Movies</label>
                        </div>
                    </div>



                    <form onSubmit={handleSubmit} className="search">
                        <input type="text" placeholder='Search here...' onChange={(e) => setSearch(e.target.value)} />
                        <button style={{ backgroundColor: "transparent", padding: "0" }} type='submit'><AiOutlineSearch /></button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Navber
