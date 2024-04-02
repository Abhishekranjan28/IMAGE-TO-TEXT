import React from 'react'
import './Loading.css'
function Loading() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <span class="loader"></span>
        <div className='text-white text-[3vw]'>LOADING...</div>
    </div>
  )
}

export default Loading