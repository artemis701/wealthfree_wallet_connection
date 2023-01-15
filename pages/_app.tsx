import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { SigningCosmWasmProvider } from 'contexts/cosmwasm'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'components/AlertTemplate'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
  containerStyle: { zIndex: 1040 }
}

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <SigningCosmWasmProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <Layout>
          <AnyComponent {...pageProps} />
        </Layout>
      </AlertProvider>
    </SigningCosmWasmProvider>
  )
}
export default MyApp



