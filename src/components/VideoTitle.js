import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='w-1/4 py-6 text-lg'>{overview}</p>
        <div className=''>
        <button className='bg-white  text-black py-4 px-12 rounded-lg text-lg hover:bg-opacity-50'> ▶ Play</button>
        <button className='bg-gray-500 text-white py-4 px-12 rounded-lg text-lg bg-opacity-50 mx-2'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle