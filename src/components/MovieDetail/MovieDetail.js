import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAsyncItemDetail } from '../../features/movies/movieSlice'

const MovieDetail = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncItemDetail(imdbID))
  }, [dispatch, imdbID])
  return <div>MovieDetail</div>
}

export default MovieDetail
