import React from 'react'
import "../styles.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom'


const Navber = () => {
    return (
        <div className='navber'>
            <div className="nav-container">
                <div className="nav-left">
                    <div className="logo">
                        <h2>TMDB <span>Clone.</span></h2>
                    </div>
                    <div className="links">
                        <ul>
                            <Link to={"/"} style={{textDecoration:"none",color:"white"}}>
                                <li>Home</li>
                            </Link>
                            <Link to={"/movies"}style={{textDecoration:"none",color:"white"}}>
                                <li>Movies</li>
                            </Link>
                            <Link to={"/tv-shows"}style={{textDecoration:"none",color:"white"}}>
                                <li>Tv Shows</li>
                            </Link>
                            <li>UpComing</li>
                        </ul>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="search">
                        <input type="text" placeholder='Search here...' />
                        <AiOutlineSearch className='search-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navber
