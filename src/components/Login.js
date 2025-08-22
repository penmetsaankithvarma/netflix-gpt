import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'; 
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice'
import { BG_URL, USER_PROFILE } from '../utils/constants';

const Login = () => {


  const [isSignInForm,setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick=()=>{
            const message = checkValidData(email.current.value,password.current.value);
            setErrorMessage(message);
            if(message) return;
  
    if(!isSignInForm)
    {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                  .then((userCredential) => {
            const user = userCredential.user;

            updateProfile(user, {
              displayName: name.current.value, photoURL:USER_PROFILE
           }).then(() => {

            const {uid,email,displayName,photoURL} = auth.currentUser;
    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));

        }).catch((error) => {
            setErrorMessage(error.message);
       });

         
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage)
          });

     }
      else
      {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           const user = userCredential.user;
           
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage)
  });
      }
    

  }

  const toggleSignInForm = ()=>{
     setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={BG_URL}
            alt='backgroundimage'
            />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 bg-black absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>

        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input ref = {name} type='text' placeholder='Enter Your Full Name' className='w-full my-4 p-4 bg-gray-700 rounded-lg '/>}

        <input ref={email} type='text' placeholder='Email Adress' className='w-full my-4 p-4 bg-gray-700 rounded-lg '/>

        <input ref={password} type='password' placeholder='Password' className='w-full my-4 p-4 bg-gray-700 rounded-lg'/>

        <p className='text-red-600 font-bold text-lg py-2 '>{errorMessage}</p>

        <button onClick={handleButtonClick} className='w-full bg-red-700 rounded-lg my-6 p-3'>{isSignInForm?"Sign In":"Sign Up"}</button>

        <div className="" >{isSignInForm?
         <p>New to Netflix? <span className='cursor-pointer hover:text-blue-400' onClick={toggleSignInForm}>Sign up now</span></p>
       : <p>Already Registered? <span className="cursor-pointer hover:text-blue-400" onClick={toggleSignInForm}>Sign in now</span></p>}

       </div>
    </form>
        
    </div>
  )
}

export default Login  