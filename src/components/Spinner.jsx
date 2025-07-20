import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center w-[full] h-[100vh] '>
      <svg width="50px" height="50px" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#4F46E5"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
          stroke-dasharray="100"
          stroke-dashoffset="60"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
    
  )
}

export default Spinner;