import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import FauxMenHero from "./components/Hero/FauxMenHero"
import FauxMenProducts from "./components/Products/FauxMenProducts"
import Footer from "./components/Footer/Footer"
import PopupModal from "./components/Modal/PopupModal"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from "aos"
import "aos/dist/aos.css"

const FauxMen = () => {
  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

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
      <Navbar handleOrderPopup={handleOrderPopup} />
      <FauxMenHero handleOrderPopup={handleOrderPopup} />
      <FauxMenProducts />
      <Footer />
      <PopupModal orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default FauxMen
