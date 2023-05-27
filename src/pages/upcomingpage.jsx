import React from 'react'
import Navber from '../components/navber'
import Footer from '../components/footer'
import Movies from '../components/movies'

const TvPage = () => {
    return (
        <>
            <Navber />
            <Movies upComing="upcoming" />
            <Footer />
        </>
    )
}

export default TvPage