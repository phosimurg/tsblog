import '../styles/globals.css'
import type { AppProps } from 'next/app'


// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
//import "../css/customcss.css";



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
