import '../styles/globals.css'
import type { AppProps } from 'next/app'

// import context provider
import { ContextProvider } from '../contexts/myContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
}

export default MyApp
