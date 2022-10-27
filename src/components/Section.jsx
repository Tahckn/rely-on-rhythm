import { NavLink } from 'react-router-dom'
import SongItem from './SongItem'
import useWindowDimensions from '../widthUtil'
import { useState, useEffect } from 'react'

function Section({ title, more = false, items }) {
  const { width } = useWindowDimensions()

  const wide = items.slice(0, 8)
  const large = items.slice(0, 6)
  const medium = items.slice(0, 4)
  const small = items.slice(0, 3)
  const xsmall = items.slice(0, 2)

  const [item, setItem] = useState(large)

  useEffect(() => {
    if (width < 640) setItem(xsmall)
    else if (width < 768) setItem(small)
    else if (width < 1024) setItem(medium)
    else if (width < 1280) setItem(large)
    else setItem(wide)
  }, [width])

  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className=" text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
        {more && (
          <NavLink
            className={
              'text-xs text-link hover:underline tracking-wider uppercase font-semibold'
            }
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-6">
        {item.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Section
