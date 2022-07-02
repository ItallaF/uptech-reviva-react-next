import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ProductProvider } from '../src/contexts/productContext';
import { CartProvider } from '../src/contexts/cartContenxt';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box; 
  font-family:  "Helvetica", sans-serif;
  font-size: 62.5%;
  margin: 0%;
  padding: 0%;     
}       
`;
interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ProductProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ProductProvider>
      </ThemeProvider>
    </>
  )
}

export default App
