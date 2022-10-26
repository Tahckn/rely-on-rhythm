import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Search from '../views/Search'
import Collection from '../views/Collection'
import ErrorPage from './ErrorPage'

function Content() {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route
            path="/"
            errorElement={<ErrorPage />}
            element={<Home />}
          ></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="collection" element={<Collection />}></Route>
        </Routes>
      </div>
    </main>
  )
}

export default Content
