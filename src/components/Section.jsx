import { NavLink } from 'react-router-dom'
import SongItem from './SongItem'

function Section({ title, more = false, items }) {
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-6">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Section
