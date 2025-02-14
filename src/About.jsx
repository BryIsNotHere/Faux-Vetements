import { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import AboutContent from "./components/AboutPage/AboutContent"
import Footer from "./components/Footer/Footer"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar hideSearchBar={true} hideOrderButton={true} />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default Home
