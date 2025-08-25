import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from "../utils/languageConstants"
// import openai from '../utils/openai';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPENAI_KEY } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
    const langKey = useSelector((store)=>store.config.lang);
    const searchText = useRef(null);

    const searchmovieTMDB = async (movie)=>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
      const json = await data.json();
      return json.results;
    }

const genAI = new GoogleGenerativeAI(OPENAI_KEY);

    const handleGptSearchClick = async () =>{
         console.log(searchText.current.value);

         const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " + searchText.current.value + "only give me names of 5 movies comma seperated like the example result given ahead Example Result: Bahubali, Saaho, RadheShyam, Adipurush, Salaar";
    // const gptResults = await openai.chat.completions.create({
    //   messages:[{role:'user',content:gptQuery}],
    //   model: 'gpt-3.5-turbo',
    // console.log(gptResults.choices);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const gptResults = await model.generateContent(gptQuery);

  if(!gptResults.response) {
    //  TODO: Write Error Handling
  }
  console.log(gptResults.response?.candidates[0]?.content?.parts[0].text);
  const gptMovies = gptResults.response?.candidates[0]?.content?.parts[0].text.split(",");
  console.log(gptMovies);

  const promiseArray = gptMovies.map((movie)=>searchmovieTMDB(movie));

  const tmdbresults = await Promise.all(promiseArray);
  console.log(tmdbresults);
  dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbresults}));
};


  return (
    <div className='pt-28 flex justify-center'>
        <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
            <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceholder} className='col-span-9 p-4 m-4 rounded-lg'/>
            <button onClick={handleGptSearchClick} className='bg-red-600 text-white col-span-3 rounded-lg m-4 py-2 px-4'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar