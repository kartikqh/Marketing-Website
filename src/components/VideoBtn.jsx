import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";


const VideoBtn = ({name}) => {

  return (
    <button className="bg-transparent flex items-center gap-2" style={{color: '#CF58B2'}}>
      <FaRegCirclePlay size={"28px"} /> 
      <span className="text-lg text-gray-800 font-medium tracking-wide">{name}</span>
    </button>
  )
}

export default VideoBtn