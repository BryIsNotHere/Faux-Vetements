import { useRef, useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import FauxWomenHero from "./components/Hero/FauxWomenHero"
import FauxWomenProducts from "./components/Products/FauxWomenProducts"
import Footer from "./components/Footer/Footer"
import PopupModal from "./components/Modal/PopupModal"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from "aos"
import "aos/dist/aos.css"

const FauxWomen = () => {
  const [orderPopup, setOrderPopup] = useState(false)

  const productsRef = useRef(null)
  const topProductsRef = useRef(null)

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
      <Navbar
        handleOrderPopup={handleOrderPopup}
        scrollToSection={{
          products: productsRef,
          topProducts: topProductsRef,
        }}
      />
      <FauxWomenHero handleOrderPopup={handleOrderPopup} />
      <FauxWomenProducts />
      <Footer />
      <PopupModal orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default FauxWomen
