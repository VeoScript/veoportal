import React from 'react'

const SideBanner = () => {
  return (
    <div className="hidden md:flex flex-row items-center justify-center w-full md:w-[5rem] h-auto md:h-screen overflow-hidden border-r border-neutral-800 bg-accent-2">
      <span className="flex flex-row items-center justify-center w-full h-full animate-marquee">
        <span className="text-white text-4xl whitespace-nowrap rotate-0 md:-rotate-90 space-x-10">
          {Array.apply(0, Array(100)).map(function (x, i) {
            return <span key={i}>👋 jeromevillaruel1998@gmail.com</span>
          })}
        </span>
      </span>
    </div>
  )
}

export default SideBanner