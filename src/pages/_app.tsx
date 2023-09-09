import React from 'react'
import NProgress from '~/components/organisms/NProgress'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '~/styles/tailwind.css'
import "aos/dist/aos.css"

import AOS from "aos"
import { Prompt, Rock_Salt } from 'next/font/google'


const prompt = Prompt({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: true,
})

const rock_salt = Rock_Salt({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
  preload: true,
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3 // retry to refetch the data from api if the internet is slow or no internet connection.
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {  

  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <style jsx global>
        {`
          :root {
            --prompt-font: ${prompt.style.fontFamily};
            --rock_salt-font: ${rock_salt.style.fontFamily};
          }
        `}
      </style>
      <QueryClientProvider client={queryClient}>
        <NProgress />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}
