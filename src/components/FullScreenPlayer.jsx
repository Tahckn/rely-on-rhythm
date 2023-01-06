import React from 'react'
import { useSelector } from 'react-redux'
import browserMobile from '../browserDetect'
import { BsShuffle } from 'react-icons/bs'
import { BsPauseCircleFill } from 'react-icons/bs'
import { BsPlayCircleFill } from 'react-icons/bs'
import { BsSkipStartFill } from 'react-icons/bs'
import { BsSkipEndFill } from 'react-icons/bs'
import { BsFullscreenExit } from 'react-icons/bs'
import { IoRepeatOutline } from 'react-icons/io5'
import { secondsToTime } from '../utils'
import CustomRange from './CustomRange'
import logo from './img/logo.svg'

function FullScreenPlayer({ toggle, controls, state, volumeIcon }) {
  const { current } = useSelector((state) => state.player)
  const mobile = browserMobile()

  return (
    <div className="h-full relative">
      <div
        className="absolute inset-0 bg-cover blur-md opacity-40 bg-center"
        style={{ backgroundImage: `url(${current.image})` }}
      ></div>

      <div className="w-[50%] mx-auto">
        <img src={logo} alt="logo" />
      </div>

      <div className="absolute left-8 bottom-36 flex items-center gap-x-5">
        <img
          className="w-24 h-24 object-cover rounded-md"
          src={current.image}
          alt=""
        />
        <div>
          <h3 className="font-semibold text-3xl">{current.title}</h3>
          <p className="font-thin opacity-60 text-base">
            {current.description}
          </p>
        </div>
      </div>
      <div className="w-full absolute bottom-4 flex flex-col px-8 items-center">
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

        <div className="flex  items-center mb-1.5 gap-x-5">
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
        <div
          className={`flex items-center ${
            mobile ? 'bottom-24 right-6' : 'bottom-4 right-6'
          } absolute  gap-x-3`}
        >
          <button
            onClick={controls[state.muted ? 'unmute' : 'mute']}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200"
          >
            {volumeIcon}
          </button>
          <div className="w-[5.813rem] max-w-full">
            <CustomRange
              step={0.01}
              min={0}
              max={1}
              height={'h-2'}
              width={'w-2'}
              value={state?.muted ? 0 : state?.volume}
              onChange={(value) => {
                controls.unmute()
                controls.volume(value)
              }}
            />
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200"
          >
            <BsFullscreenExit size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FullScreenPlayer
