import Layout from 'components/Layout'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from "styles/theme"

function MyApp({ Component, pageProps }) {

  return <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
}
export default MyApp
