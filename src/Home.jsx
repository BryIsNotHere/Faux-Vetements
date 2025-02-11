import { useRef, useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import TopProducts from "./components/TopRated/TopProducts"
import Banner from "./components/Banner/Banner"
import Subscribe from "./components/Subscription/Subscribe"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import PopupModal from "./components/Modal/PopupModal"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Home = () => {
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
        showTopRated={true}
        showTrending={true}
      />
      <Hero handleOrderPopup={handleOrderPopup} />
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={topProductsRef}>
        <TopProducts handleOrderPopup={handleOrderPopup} />
      </div>
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <PopupModal orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default Home
