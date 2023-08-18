import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'

const Videocontainer = () => {
  useEffect(()=>{
    getVideos()
  },[])
  const getVideos = async()=>{
    const data = await fetch( YOUTUBE_VIDEO_API)
    const  response = await data.json()
    console.log(response)
  }
  return (
    <div className='mt-2'>
      Videocontainer
    </div>
  )
}

export default Videocontainer
