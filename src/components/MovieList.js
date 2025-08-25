import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
   
    if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
     
  }
  console.log(movies);
  return (
    <div className='px-6 text-white'>
        <h1 className='text-3xl py-4'>{title}</h1>
        <div className='flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        
        <div className='flex'>
            {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
        </div>
    </div>
  )
}

export default MovieList