import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function Search() {
  return (
    <div className="ml-4 relative">
      <label
        htmlFor="search-input"
        className="w-12 h-10 flex justify-center items-center absolute top-0 left-0 cursor-text"
      >
        <AiOutlineSearch color="black" size="23" />
      </label>
      <input
        autoFocus={true}
        type="text"
        id="search-input"
        placeholder="Artists or songs"
        className="h-10 outline-none font-medium text-black pl-12 bg-white rounded-3xl max-w-full
         w-[22.75rem]
         placeholder-black/50 text-sm"
      />
    </div>
  )
}

export default Search
