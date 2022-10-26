import { BsFillPlayFill } from 'react-icons/bs'
import { BsFillPauseFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrent } from '../stores/player'

function SongItem({ item }) {
  const dispatch = useDispatch()
  const { current, playing, controls } = useSelector((state) => state.player)

  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause()
      } else {
        controls.play()
      }
    } else {
      dispatch(setCurrent(item))
    }
  }

  const isCurrentItem = current?.id === item.id && playing

  return (
    <NavLink
      className={'bg-footer p-4 rounded-lg hover:bg-active duration-300 group'}
      key={item.id}
      to="/"
    >
      <div className="relative mb-4">
        <img
          className=" aspect-square object-cover hover:drop-shadow-2xl rounded"
          src={item.image}
          alt={item.title}
        />
        <div
          className={`opacity-0 ${
            isCurrentItem ? 'opacity-100' : ''
          } translate-y-5 group-hover:translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100`}
        >
          <button
            onClick={updateCurrent}
            className="flex hover:scale-110 duration-100 items-center justify-center w-10 h-10 shadow-lg rounded-full bg-primary absolute bottom-2 right-2"
          >
            {isCurrentItem ? (
              <BsFillPauseFill
                className="opacity-100"
                color="white"
                size="24"
              />
            ) : (
              <BsFillPlayFill color="white" size="24" />
            )}
          </button>
        </div>
      </div>
      <h6 className="text-base font-semibold line-clamp-1">{item.title}</h6>
      <p className=" text-sm mt-1 text-link line-clamp-2">{item.description}</p>
    </NavLink>
  )
}

export default SongItem
