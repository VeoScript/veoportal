import React from 'react'
import NavBar from '../organisms/NavBar'
import SideBanner from '../organisms/SideBanner'
import Menu from '../organisms/Menu'

interface IProps {
  children: React.ReactNode
}

type MainTemplateProps = (props: IProps) => JSX.Element

const MainTemplate: MainTemplateProps = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen overflow-hidden select-none bg-accent-2">
      <SideBanner />
      <div className="relative flex-1 flex-col items-center justify-center w-full max-w-[1700px] h-full overflow-y-auto font-prompt text-white bg-accent-1">
        <NavBar />
        <Menu />
        {children}
      </div>
    </div>
  )
}

export default MainTemplate
