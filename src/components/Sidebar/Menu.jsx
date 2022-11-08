import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { VscLibrary } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import * as React from 'react'
import browserMobile from '../../browserDetect'

function Menu() {
  const mobile = browserMobile()
  const activeClassName = `${
    mobile ? 'h-7 rounded-full px-2' : 'h-10 rounded px-4'
  } flex gap-x-4 items-center text-sm font-semibold outline-none text-white ring-1 ring-primary ring-opacity-60 bg-active  hover:text-white `
  const normal = `${
    mobile ? 'rounded-full h-7 px-2' : 'rounded h-10 px-4'
  }  flex gap-x-4 items-center text-sm font-semibold text-link  hover:text-white hover:transition duration-300 `
  return (
    <nav className=" px-2">
      <ul className={`flex ${mobile ? 'flex-row' : 'flex-col'} `}>
        <li>
          <NavLink
            to={'/'}
            end
            className={({ isActive }) => (isActive ? activeClassName : normal)}
          >
            <span>
              <AiOutlineHome
                className="active:text-white"
                color="#c33e47"
                size="22"
              />
            </span>
            {mobile ? null : 'Home'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'search'}
            className={({ isActive }) => (isActive ? activeClassName : normal)}
          >
            <span>
              <AiOutlineSearch color="#c33e47" size="22" />
            </span>
            {mobile ? null : 'Search'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'collection'}
            className={({ isActive }) => (isActive ? activeClassName : normal)}
          >
            <span>
              <VscLibrary color="#c33e47" size="22" />
            </span>
            {mobile ? null : 'Your Library'}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
