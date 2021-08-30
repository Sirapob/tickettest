import '../styles/globals.css'
import App from 'next/app'
import TicketTypeProvider from '../contexts/TicketTypeContext'
function MyApp({ Component, pageProps }) {
  return <TicketTypeProvider><Component {...pageProps} /></TicketTypeProvider>
}
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  // const { pathname, query, req, res } = appContext.ctx
  const { query, req } = appContext.ctx
  const isServer = !!req


  if (isServer && req.headers['x-lang'] !== undefined) {
    appProps.headerLang = req.headers['x-lang']
  }



  return { ...appProps }
}

export default MyApp
