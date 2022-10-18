import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLeftCircle } from 'react-icons/ai'
import { AiOutlineRightCircle } from 'react-icons/ai'

function Navigation() {
  const [effect, setEffect] = useState(false)
  const [effect2, setEffect2] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="flex items-center gap-x-4">
      <div className="w-7 h-7 rounded-full shadow-xl shadow-primary/50">
        <button
          className={`${
            effect && 'animate-spin-reverse'
          } duration-200 w-7 h-7 flex items-center  rounded-full justify-center"`}
          onClick={() => {
            navigate(-1)
            setEffect(true)
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          <AiOutlineLeftCircle
            className="rounded-full"
            size="27"
            color="#c33e47"
          />
        </button>
      </div>
      <div className="w-7 h-7 rounded-full shadow-xl shadow-primary/50">
        <button
          className={`${
            effect2 && 'animate-spin-fast'
          } duration-200 w-7 h-7 flex items-center  rounded-full justify-center"`}
          onClick={() => {
            navigate(+1)
            setEffect2(true)
          }}
          onAnimationEnd={() => setEffect2(false)}
        >
          <AiOutlineRightCircle size="27" color="#c33e47" />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
