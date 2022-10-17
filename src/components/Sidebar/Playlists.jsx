function Playlists() {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-5 overflow-auto">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href=""
              className="text-s text-link hover:text-white flex h-8 items-center hover:transition duration-200"
            >
              Top Gaming Tracks
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Playlists
