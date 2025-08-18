import React, { useState } from 'react'
import Header from './Header'

const Login = () => {


  const [isSignInForm,setIsSignInForm] = useState(true);
  const toggleSignInForm = ()=>{
     setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
            alt='backgroundimage'
            />
        </div>
        <form className='w-3/12 bg-black absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Enter Your Full Name' className='w-full my-4 p-4 bg-gray-700 rounded-lg '/>}
        <input type='text' placeholder='Email Adress' className='w-full my-4 p-4 bg-gray-700 rounded-lg '/>
        <input type='password' placeholder='Password' className='w-full my-4 p-4 bg-gray-700 rounded-lg'/>
        <button className='w-full bg-red-700 rounded-lg my-6 p-3'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="" >{isSignInForm?
         <p>New to Netflix? <span className='cursor-pointer hover:text-blue-400' onClick={toggleSignInForm}>Sign up now</span></p>
       : <p>Already Registered? <span className="cursor-pointer hover:text-blue-400" onClick={toggleSignInForm}>Sign in now</span></p>}
       </p>
    </form>
        
    </div>
  )
}

export default Login  