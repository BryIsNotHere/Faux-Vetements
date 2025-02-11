import { useState } from "react"
import { FaStar } from "react-icons/fa6"
import vneckImg from "../../assets/top-products/vneck-sweatshirt-model.png"
import vneckImgAlt from "../../assets/top-products/vneck-sweatshirt-model-alt.png"
import jacketImg from "../../assets/top-products/leather-jacket-model.png"
import jacketImgAlt from "../../assets/top-products/leather-jacket-model-alt.png"
import bomberImg from "../../assets/top-products/bomber-model.png"
import bomberImgAlt from "../../assets/top-products/bomber-model-alt.png"

const ProductsData = [
  {
    id: 1,
    img: vneckImg,
    imgAlt: vneckImgAlt,
    title: "V-Neck Sweatshirt",
    description: "Long Sleeve V-Neck Sweatshirt made out of 100% Cotton.",
  },
  {
    id: 2,
    img: jacketImg,
    imgAlt: jacketImgAlt,
    title: "Black Leather Jacket",
    description: "Retro Styled Jacket made with Authentic PU Leather.",
  },
  {
    id: 3,
    img: bomberImg,
    imgAlt: bomberImgAlt,
    title: "Black Bomber Jacket",
    description: "Bomber Jacket made out of 51% Cotton and 49% Polyester",
  },
]

const TopProducts = ({ handleOrderPopup }) => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div>
      <div className="container">
        {/* Header */}
        <div>
          <div className="text-left mb-24 ml-7">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Rated Products For You
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Best Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Here are the top 3 of our best rated products of all time.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[400px]"
              key={data.id}
              onMouseEnter={() => setHoveredItem(data.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div className="h-[100px]">
                <img
                  src={hoveredItem === data.id ? data.imgAlt : data.img}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Details */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold dark:text-white/80 dark:text-light">
                  {data.title}
                </h1>
                <p className="text-gray-500 dark:text-white/60 dark:text-light group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => handleOrderPopup()}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
