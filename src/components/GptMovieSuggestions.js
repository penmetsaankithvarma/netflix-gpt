import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {movieNames,movieResults} = useSelector((store)=>store.gpt);
  if(!movieNames && !movieResults) return null;

  return (
    <div className='bg-black text-white p-4 m-4 rounded-md bg-opacity-90'>
      <div>
        {movieNames.map((movieName,index)=> (<MovieList key={movieName} title ={movieName} movies={movieResults[index]}/>))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions