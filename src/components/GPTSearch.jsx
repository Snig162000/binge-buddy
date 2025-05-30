import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    // <>
    // <div className="fixed -z-10">
    //     <img className='h-screen object-cover'
    //       src={BG_URL}
    //       alt="login-bg"
    //     />
    //   </div>
    <div className='h-screen bg-gradient-to-b from-black to-gray-900'>
        <GPTSearchBar />
        <GPTMovieSuggestions />
    </div>
    // </>
  )
}

export default GPTSearch