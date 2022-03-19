import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        {/* <link rel="shortcut-icon" href="#" /> */}
        {/* <link rel="apple-touch-icon" href="#" /> */}
        <meta
          name="description"
          content="A simple project starter using Typescript, React, NextJS and Styled-components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
