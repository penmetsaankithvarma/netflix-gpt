import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if (!posterPath) {
    return <div>No poster available</div>;
    }
  return (
    <div className="w-48 pr-4">
        <img alt="moviename" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard