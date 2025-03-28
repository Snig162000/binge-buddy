import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
  const [isSignIn, setIsSign] = useState(true);

  const signInToggle = () => {
    setIsSign(!isSignIn);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_small.jpg'
        alt='login-bg'
        />
      </div>
      <div className='bg-black p-14 absolute w-4/12 my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <form>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && <input className='my-2 p-3 w-full bg-gray-800' placeholder='Full Name' />}
        <input className='my-2 p-3 w-full bg-gray-800' placeholder='Email Address' />
        <input className='my-2 p-3 w-full bg-gray-800' placeholder='Password' />
        <button className='p-3 my-4 bg-red-700 w-full rounded-lg'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p onClick={signInToggle} className='cursor-pointer'>{isSignIn ? 'New to Netflix? Sign Up Now' : 'Already registered. Sign In Now'}</p>
      </form>
      </div>
    </div>
  )
}

export default Login