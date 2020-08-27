import GlobaStyles from './styles/globals'

import Head from 'next/head'
import Calculator from './Calculator'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Calculadora</h2>
      <Calculator />
      <GlobaStyles />
    </div>
  )
}
