import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import './Home.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  //const [movieData, setMovieData] = useState([])
  useEffect(() => {
    dispatch(fetchAsyncMovies())
  }, [dispatch])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home
