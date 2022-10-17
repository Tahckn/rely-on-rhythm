import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Search from '../views/Search'
import Collection from '../views/Collection'

function Content() {
  return (
    <main className="flex-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="collection" element={<Collection />}></Route>
      </Routes>
    </main>
  )
}

export default Content
