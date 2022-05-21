import '@styles/index.scss'
import type { AppProps } from 'next/app'
import Providers from 'src/contexts/Providers'

function ListaRango({ Component, pageProps }: AppProps) {
  return (
  <Providers>
    <Component {...pageProps} />
  </Providers>
  )
}

export default ListaRango
