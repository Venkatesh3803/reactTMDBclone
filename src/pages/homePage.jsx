import React from 'react'
import Navber from '../components/navber'
import Hero from '../components/hero'
import PopularMovies from '../components/popularMovies'
import PopularTv from '../components/popularTv'
import Footer from '../components/footer'

const HomePage = () => {
    return (
        <>
            <Navber />
            <Hero />
            <PopularMovies />
            <PopularTv />
            <Footer />
        </>
    )
}

export default HomePage