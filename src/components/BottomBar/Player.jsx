import { BsPauseCircleFill } from 'react-icons/bs'
import { BsPlayCircleFill } from 'react-icons/bs'
import { BsSkipStartFill } from 'react-icons/bs'
import { BsSkipEndFill } from 'react-icons/bs'
import { BsShuffle } from 'react-icons/bs'
import { IoRepeatOutline } from 'react-icons/io5'
import { BsFullscreen } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { IoVolumeOffOutline } from 'react-icons/io5'
import { IoVolumeLowOutline } from 'react-icons/io5'
import { IoVolumeMediumOutline } from 'react-icons/io5'
import { IoVolumeHighOutline } from 'react-icons/io5'
import { useAudio, useFullscreen, useToggle } from 'react-use'
import { secondsToTime } from '../../utils'
import CustomRange from '../CustomRange'
import { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setControls, setPlaying } from '../../stores/player'
import browserMobile from '../../browserDetect'
import FullScreenPlayer from '../FullScreenPlayer'

function Player() {
  const fsRef = useRef()
  const [show, toggle] = useToggle(false)
  const isFullScreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false),
  })

  const dispatch = useDispatch()
  const { current } = useSelector((state) => state.player)
  const mobile = browserMobile()

  const [audio, state, controls] = useAudio({
    src: current?.src,
  })

  useEffect(() => {
    controls.play()
  }, [current])

  useEffect(() => {
    dispatch(setPlaying(state.playing))
  }, [state.playing])

  useEffect(() => {
    dispatch(setControls(controls))
  }, [])

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return <IoVolumeOffOutline />

    if (state.volume > 0 && state.volume < 0.33) return <IoVolumeLowOutline />

    if (state.volume >= 0.33 && state.volume < 0.66)
      return <IoVolumeMediumOutline />
    return <IoVolumeHighOutline />
  }, [state.volume, state.muted])

  return (
    <div className="flex px-4 w-full justify-between items-center h-full">
      {!mobile && (
        <div className="min-w-[11.25rem]  w-[30%] ">
          {current && (
            <div className="flex items-center">
              <div className="flex items-center mr-3">
                <div className="h-14 w-14 mr-3">
                  <img src={current.image} alt="" />
                </div>
                <div>
                  <h6 className="text-sm line-clamp-1">{current.title}</h6>
                  <p className="text-[0.688rem] text-white opacity-70">
                    {current.description}
                  </p>
                </div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200">
                <BsHeart size={13} />
              </button>
            </div>
          )}
        </div>
      )}

      <div
        className={`max-w-[45.125] ${
          mobile && 'ml-2'
        } pt-2 w-[40%]  flex flex-col px-4 items-center`}
      >
        <div className="flex  items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200">
            <BsShuffle size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200">
            <BsSkipStartFill size={18} />
          </button>
          <button
            onClick={controls[state?.playing ? 'pause' : 'play']}
            className="w-8 h-8 flex  items-center justify-center hover:scale-105 duration-150"
          >
            {state?.playing ? (
              <BsPauseCircleFill size={32} color="white" />
            ) : (
              <BsPlayCircleFill size={32} color="white" />
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
          {audio}
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
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
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
          disabled={!current.image}
          onClick={toggle}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 duration-200"
        >
          <BsFullscreen size={11} />
        </button>
      </div>
      <div ref={fsRef}>
        {isFullScreen ? (
          <FullScreenPlayer
            volumeIcon={volumeIcon}
            controls={controls}
            state={state}
            toggle={toggle}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Player
