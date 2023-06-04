import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className="sticky top-0 z-20 flex flex-row items-center justify-between w-full p-5 backdrop-blur-xl bg-transparent bg-opacity-50">
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
      <div className="flex flex-row items-center justify-end w-full space-x-5 mr-10">
        <p className="w-[10rem] font-prompt font-light text-sm">928 Bonifactio St. Brgy. Guerrero, Bato, Leyte</p>
        <p className="w-[10rem] font-prompt font-light text-sm select-all">jeromevillaruel1998@gmail.com (+63) 9753286466</p>
      </div>
    </div>
  )
}

export default NavBar
