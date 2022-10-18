import { Menu } from '@headlessui/react'
import { AiFillCaretDown } from 'react-icons/ai'

function User() {
  const user = {
    name: 'Taha Ceken',
    avatar: 'https://avatars.githubusercontent.com/u/77683100?s=40&v=4',
  }

  return (
    <Menu as="nav" className={'relative'}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex duration-200 ${
              open ? 'ring-opacity-100 bg-active' : 'ring-opacity-50 bg-black'
            } hover:drop-shadow-2xl items-center justify-center h-8 rounded-lg pr-2`}
          >
            <img
              className={'w-8 h-8 p-1 mr-2 rounded-full'}
              src={user.avatar}
              alt="photo"
            />
            <span className={'hidden sm:block mr-2 text-sm font-semibold'}>
              {user.name}
            </span>
            <AiFillCaretDown
              className={
                open ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
              }
            />
          </Menu.Button>
          <Menu.Items
            className={
              'absolute p-1 bg-active top-full right-0 w-48 rounded translate-y-2'
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 rounded text-sm ${
                    active && 'bg-white bg-opacity-10 duration-150'
                  }`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 rounded text-sm ${
                    active && 'bg-white bg-opacity-10 duration-150'
                  }`}
                  href="#"
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}

export default User
