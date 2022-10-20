import { Range, getTrackBackground } from 'react-range'
import { useState } from 'react'

function CustomRange({ value, step, min, max, onChange, h, w }) {
  const [hover, setHover] = useState(false)
  function toggleHover() {
    setHover(true)
  }
  function toggleHoverFalse() {
    setHover(false)
  }
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className={`w-full flex h-9 group `}
          style={{ ...props.style }}
          onMouseOver={toggleHover}
          onMouseLeave={toggleHoverFalse}
        >
          <div
            ref={props.ref}
            className={'h-1 w-full rounded-md self-center'}
            style={{
              background: getTrackBackground({
                values: [value],
                colors: [`${hover ? '#c33e47' : '#b3b3b3'}`, '#535353'],
                min: min,
                max: max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className={`h-${h} w-${w} rounded-full outline-none bg-white shadow-sm shadow-white duration-50 ${
            !isDragged ? 'opacity-0' : ''
          } group-hover:opacity-100`}
          style={{ ...props.style }}
        ></div>
      )}
    />
  )
}

export default CustomRange
