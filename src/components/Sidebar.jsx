import logo from './img/logo.svg'
import Menu from './Sidebar/Menu'
import Playlists from './Sidebar/Playlists'
import { AiFillPlusSquare } from 'react-icons/ai'
import { BiHeartSquare } from 'react-icons/bi'
import { BsArrowDownCircle } from 'react-icons/bs'
function Sidebar() {
  return (
    <aside className="w-60 pt-6 flex flex-col bg-sidebar flex-shrink-0">
      <a href="#" className="mb-5 px-4">
        <img src={logo} alt="logo" className="h-10" />
      </a>

      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <a
              href=""
              className="py-2 px-6 flex text-sm text-opacity-70 items-center text-link font-semibold hover:transition duration-300 hover:text-white"
            >
              <span className="w-6 h-6 flex items-center  justify-center mr-4 rounded-sm">
                <AiFillPlusSquare size={23} />
              </span>
              Create Playlist
            </a>
          </li>
          <li>
            <a
              href=""
              className="py-2 px-6 flex text-sm items-center text-opacity-70 text-link font-semibold hover:transition duration-300 hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 rounded-sm">
                <BiHeartSquare size={24} />
              </span>
              Liked Songs
            </a>
          </li>
        </ul>
      </nav>

      <Playlists />
      <a
        href="#"
        className="text-link font-semibold h-10 border-t border-link/20 text-md gap-2 tracking-tight p-2 flex items-center"
      >
        <BsArrowDownCircle className="mx-2" size="22" />
        <span>Install App </span>
      </a>
    </aside>
  )
}

export default Sidebar
