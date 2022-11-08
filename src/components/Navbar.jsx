import React, { useState } from 'react'
import { useMatch } from 'react-router-dom'
import Navigation from './Navbar/Navigation'
import User from './Navbar/User'
import Menu from './Sidebar/Menu'
import browserMobile from '../browserDetect'

function Navbar() {
  const mobile = browserMobile()
  const searchRoute = useMatch('/search')

  return (
    <nav className="sticky z-10 bg-[#101010] top-0 h-[3.75rem] flex items-center px-8 justify-between">
      <Navigation />
      {mobile ? <Menu /> : null}
      {searchRoute && <div>search kismindaasin</div>}
      <User />
    </nav>
  )
}
export default Navbar
