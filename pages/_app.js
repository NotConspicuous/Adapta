import { useEffect } from 'react'
import '../styles/globals.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className="cursor"></div>
      <Script src="styles.js"></Script>
    </>
  )
}

export default MyApp
