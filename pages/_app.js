import base from '../styles/base.scss'
import navbarstyle from "../styles/navbarstyle.scss"
import indexstyle from "../styles/indexstyle.scss"
import swiper from "../styles/swiper.scss"
import restauratiestyle from "../styles/restauratiestyle.scss"
import media from "../styles/mediastyle.scss"
import treecyclestyle from "../styles/treecyclestyle.scss"
import loginstyle from "../styles/loginstyle.scss"
import contactstyle from "../styles/contactstyle.scss"



//components
import Navbar from "../comps/navbar"


// includes Navbar + dropdown.
function MyApp({ Component, pageProps }) {

  return(
    <div className="bg">
    <Navbar/>
    <Component {...pageProps} />
    </div>
  ) 
}
export default MyApp
