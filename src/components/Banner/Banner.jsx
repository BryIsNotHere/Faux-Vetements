import { AiFillCreditCard, AiFillShopping, AiFillTruck } from "react-icons/ai"
import bannerTag from "../../assets/banner/winter-sale.gif"

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div data-aos="zoom-in">
            <img
              src={bannerTag}
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale – Up to 50% OFF! ❄️
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Stay warm in style! Grab exclusive discounts on winter fashion
              before the season ends.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <AiFillShopping className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-gray-800" />
                <p>Premium Clothing with Premium Materials</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <AiFillTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-gray-600" />
                <p>Fast & Free Shipping Across The Continent</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <AiFillCreditCard className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-gray-400" />
                <p>Hassle-Free Payments with Multiple Options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
