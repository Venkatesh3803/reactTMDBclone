import React from 'react'
import Navber from '../components/navber'
import Movies from '../components/movies'
import Footer from '../components/footer'

const MoviesPage = () => {
  return (
    <>
      <Navber />
      <Movies topRated="top_rated" />
      <Footer />
    </>
  )
}

export default MoviesPage