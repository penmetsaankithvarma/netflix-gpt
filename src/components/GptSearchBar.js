import React from 'react'
import { useSelector } from 'react-redux'
import lang from "../utils/languageConstants"

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang)
  return (
    <div className='pt-28 flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
            <input type="text" placeholder={lang[langKey].gptSearchPlaceholder} className='col-span-9 p-4 m-4 rounded-lg'/>
            <button className='bg-red-600 text-white col-span-3 rounded-lg m-4 py-2 px-4'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar