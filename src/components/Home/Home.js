import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import './Home.scss'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncMovies,
  fetchAsyncShows
} from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  const movieText = 'Time'
  const showText = 'Friends'
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home
