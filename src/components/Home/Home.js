import React, { useEffect, useState } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'
import './Home.scss'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
  const movieText = 'Harry'
  const dispatch = useDispatch()
  //const [movieData, setMovieData] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch(err => {
          console.log('Err: ', err)
        })
      dispatch(addMovies(response.data))
      //setMovieData(response.data.Search)
    }

    fetchMovies()
  }, [])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home
