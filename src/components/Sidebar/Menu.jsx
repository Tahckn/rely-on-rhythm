import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { VscLibrary } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import * as React from 'react'

function Menu() {
  const activeClassName =
    'h-10 flex gap-x-4 items-center text-sm font-semibold outline-none text-white ring-1 ring-primary ring-opacity-60 bg-active rounded hover:text-white px-4'
  const normal =
    'h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white hover:transition duration-300 px-4'
  return (
    <nav className="px-2">
      <ul className="flex flex-col ">
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
            Home
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
            Search
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
            Your Library
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
