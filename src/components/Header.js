import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGetSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);



  const handleGptSearchClick =()=>{
       dispatch(toggleGetSearchView())
  }

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
   
    });
  }


      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
    navigate("/browse");

  } else {
    dispatch(removeUser());
    navigate("/");
 
  }

});
return ()=>unsubscribe();
   
    },[]);


    const handleLanguageChange = (e)=>{
      dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute flex w-screen px-8 py-2 z-10 bg-gradient-to-b from-black justify-between'>
        <img className="w-44" src = {LOGO}
        alt ="logo"
        />
        {user && <div className='flex p-2'>
          {showGptSearch &&
          <select onChange={handleLanguageChange} className='rounded bg-gray-600 p-2 m-2'>
            {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
          </select>
        }
          <button onClick={handleGptSearchClick} className='bg-purple-600 rounded-lg px-4 py-2 mx-4 my-2'>{showGptSearch?"Homepage":"GPT Search"}</button>
          <img className="w-12 h-12" alt = "user-Icon" src={user?.photoURL} />
          <button onClick={handleSignOut} className='font-bold text-white'>SignOut</button>
        </div>}
    </div>
  )
}

export default Header