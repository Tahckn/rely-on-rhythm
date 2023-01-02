import React from 'react'
import { useSelector } from 'react-redux'

import { BsShuffle } from 'react-icons/bs'
import { BsPauseCircleFill } from 'react-icons/bs'
import { BsPlayCircleFill } from 'react-icons/bs'
import { BsSkipStartFill } from 'react-icons/bs'
import { BsSkipEndFill } from 'react-icons/bs'
import { IoRepeatOutline } from 'react-icons/io5'
import { secondsToTime } from '../utils'
import CustomRange from './CustomRange'

function FullScreenPlayer({ toggle, controls, state }) {
  const { current } = useSelector((state) => state.player)

  return (
    <div className="h-full relative">
      <div
        className="absolute inset-0 bg-cover blur-md opacity-40 bg-center"
        style={{ backgroundImage: `url(${current.image})` }}
      ></div>
      <div className="w-full absolute bottom-4 flex flex-col px-4 items-center">
        <div className="flex  items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200">
            <BsShuffle size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200">
            <BsSkipStartFill size={18} />
          </button>
          <button
            onClick={controls[state?.playing ? 'pause' : 'play']}
            className="w-16 h-16 flex  items-center justify-center hover:scale-105 duration-150"
          >
            {state?.playing ? (
              <BsPauseCircleFill size={45} color="white" />
            ) : (
              <BsPlayCircleFill size={45} color="white" />
            )}
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200">
            <BsSkipEndFill size={18} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200">
            <IoRepeatOutline size={18} />
          </button>
        </div>
        <div className="w-full flex mt-1 items-center gap-x-2">
          <div className="text-[0.7rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            height={'h-3'}
            width={'w-3'}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.7rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenPlayer
