import { NavLink } from 'react-router-dom'
import { BsFillPlayFill } from 'react-icons/bs'

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 ">
        {items.map((item) => (
          <NavLink
            className={
              'bg-footer p-4 rounded-lg hover:bg-active duration-300 group'
            }
            key={item.id}
            to="/"
          >
            <div className="relative mb-4">
              <img
                className="aspect-square object-cover hover:drop-shadow-2xl rounded"
                src={item.image}
                alt={item.title}
              />
              <div className="opacity-0 translate-y-5 group-hover:translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100">
                <button className="flex hover:scale-110 duration-100 items-center justify-center w-10 h-10 shadow-lg rounded-full bg-primary absolute bottom-2 right-2">
                  <BsFillPlayFill color="white" size="24" />
                </button>
              </div>
            </div>
            <h6 className="text-base font-semibold line-clamp-1">
              {item.title}
            </h6>
            <p className="text-sm mt-1 text-link line-clamp-2">
              {item.description}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default Section
