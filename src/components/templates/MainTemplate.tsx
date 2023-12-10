import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Menu from '../organisms/Menu'
import SideBanner from '../organisms/SideBanner'

const NavBar = dynamic(() => import('../organisms/NavBar'), { ssr: false })
const Footer = dynamic(() => import('~/components/organisms/Footer'), { ssr: false })

interface IProps {
  children: ReactNode
}

type MainTemplateProps = (props: IProps) => JSX.Element

const MainTemplate: MainTemplateProps = ({ children }) => {
  return (
    <div className="flex flex-grow flex-row items-start justify-center w-full h-full overflow-x-hidden select-none bg-accent-2">
      <div className="hidden md:block fixed left-0 z-20">
        <SideBanner />
      </div>
      <NavBar />
      <div className="relative ml-0 md:ml-20 flex-1 flex-col items-center justify-center w-full max-w-[1920px] h-full font-prompt text-black dark:text-white bg-accent-6 dark:bg-accent-1">
        <Menu />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default MainTemplate
