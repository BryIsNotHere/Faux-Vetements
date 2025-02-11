import { useState } from "react"
import "aos/dist/aos.css"
import { fauxMenImages } from "../../assets/image/images"
import { FaStar } from "react-icons/fa6"

const ProductsData = [
  {
    id: 1,
    type: "jacket",
    img: fauxMenImages.hoodieImg,
    imgAlt: fauxMenImages.hoodieImgAlt,
    title: "Hoodie",
    rating: 4.0,
    color: "Black",
  },
  {
    id: 2,
    type: "casual",
    img: fauxMenImages.poloImg,
    imgAlt: fauxMenImages.poloImgAlt,
    title: "Polo Half-Zip",
    rating: 4.5,
    color: "Cream",
  },
  {
    id: 3,
    type: "jacket",
    img: fauxMenImages.leatherJacketImg,
    imgAlt: fauxMenImages.leatherJacketImgAlt,
    title: "Black Leather Jacket",
    rating: 5.0,
    color: "Black",
  },
]

const Products = () => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [selectedType, setSelectedType] = useState("all")

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value)
  }

  const filteredProducts =
    selectedType === "all"
      ? ProductsData
      : ProductsData.filter((product) => product.type === selectedType)

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-4xl font-bold">
            Faux for Men
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Timeless style, all-day confidence, fashion built for the bold.
          </p>
        </div>
        {/* Dropdown for filtering products */}
        <div data-aos="fade-up" className="mb-6 text-center">
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="p-2 border rounded-md bg-primary dark:bg-gray-800 text-gray-800 dark:text-gray-300"
          >
            <option value="all">All Products</option>
            <option value="casual">Casual</option>
            <option value="jacket">Jackets</option>
          </select>
        </div>
        {/* Body */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card */}
            {filteredProducts.map((data, index) => {
              const aosDelay = index * 200
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={aosDelay}
                  key={data.id}
                  className="space-y-3"
                  onMouseEnter={() => setHoveredItem(data.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={hoveredItem === data.id ? data.imgAlt : data.img}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1 mb-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
