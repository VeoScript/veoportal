import type { AppProps } from 'next/app'

import '~/styles/tailwind.css'
import { Prompt, Rock_Salt } from 'next/font/google'

const prompt = Prompt({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: false,
})

const rock_salt = Rock_Salt({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
  preload: false,
})

export default function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </>
  )
}
