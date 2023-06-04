import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {

  const [isCollapse, setIsCollapse] = React.useState<boolean>(false)

  return (
    <div className="absolute md:fixed top-0 left-0 md:left-20 z-20 flex flex-col md:flex-row items-center justify-between w-full p-5 space-y-5 md:space-y-0 backdrop-blur-sm md:backdrop-blur-xl bg-transparent bg-opacity-50">
      <div className="flex flex-row items-center justify-between w-full">
        <Link href="/" className="w-full">
          <Image
            src="/images/veo.png"
            className="w-[3rem] h-[2rem] object-cover bg-transparent"
            alt="veoscript"
            width={100}
            height={100}
            quality={100}
          />
        </Link>
        <button
          type="button"
          className="block md:hidden outline-none"
          onClick={() => isCollapse ? setIsCollapse(false) : setIsCollapse(true)}
        >
          {isCollapse
            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>          
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
          }
        </button>
      </div>
      <div className={`${isCollapse ? 'flex' : 'hidden md:flex'} flex-col md:flex-row items-start md:items-center justify-start md:justify-end w-full space-x-0 md:space-x-5 space-y-3 md:space-y-0 mr-0 md:mr-[10rem] text-white`}>
        <p className="w-[10rem] font-prompt font-light text-sm">928 Bonifactio St. Brgy. Guerrero, Bato, Leyte</p>
        <p className="w-[10rem] font-prompt font-light text-sm select-all">jeromevillaruel1998@gmail.com (+63) 9753286466</p>
      </div>
    </div>
  )
}

export default NavBar
