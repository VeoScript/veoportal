import React from 'react'

const SideBanner = () => {
  return (
    <div className="hidden md:flex w-full md:w-[5rem] h-auto border-r border-neutral-800 bg-accent-2">
      <div className="flex flex-row items-center justify-center w-full h-screen animate-marquee">
        <div className="text-white text-4xl whitespace-nowrap rotate-0 md:-rotate-90 space-x-10">
          {Array.apply(0, Array(5)).map(function (x, i) {
            return <span key={i}>👋 jeromevillaruel1998@gmail.com</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default SideBanner