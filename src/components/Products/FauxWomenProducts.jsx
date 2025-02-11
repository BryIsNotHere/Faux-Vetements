import { useState } from "react"
import "aos/dist/aos.css"
import { fauxWomenImages } from "../../assets/image/images"
import { FaStar } from "react-icons/fa6"

const ProductsData = [
  {
    id: 1,
    type: "casual",
    img: fauxWomenImages.oversizedImg,
    imgAlt: fauxWomenImages.oversizedImgAlt,
    title: "Oversized Tee",
    rating: 5.0,
    color: "White",
  },
  {
    id: 2,
    type: "casual",
    img: fauxWomenImages.knitwearImg,
    imgAlt: fauxWomenImages.knitwearImgAlt,
    title: "Knitwear",
    rating: 4.6,
    color: "Beige",
  },
  {
    id: 3,
    type: "edgy",
    img: fauxWomenImages.cropImg,
    imgAlt: fauxWomenImages.cropImgAlt,
    title: "Y2K Jersey",
    rating: 5.0,
    color: "White",
  },
  {
    id: 4,
    type: "jacket",
    img: fauxWomenImages.bomberImg,
    imgAlt: fauxWomenImages.bomberImgAlt,
    title: "Bomber Jacket",
    rating: 5.0,
    color: "Black and Cream",
  },
  {
    id: 5,
    type: "edgy",
    img: fauxWomenImages.edgyHoodieImg,
    imgAlt: fauxWomenImages.edgyHoodieImgAlt,
    title: "Oversized Hoodie",
    rating: 4.2,
    color: "Black",
  },
  {
    id: 6,
    type: "casual",
    img: fauxWomenImages.blueSweaterImg,
    imgAlt: fauxWomenImages.blueSweaterImgAlt,
    title: "Blue Sweater",
    rating: 4.3,
    color: "Blue",
  },
  {
    id: 7,
    type: "edgy",
    img: fauxWomenImages.cropY2kImg,
    imgAlt: fauxWomenImages.cropY2kImgAlt,
    title: "Crop Y2K",
    rating: 4.6,
    color: "Black and Gray",
  },
  {
    id: 8,
    type: "casual",
    img: fauxWomenImages.blackTeeImg,
    imgAlt: fauxWomenImages.blackTeeImgAlt,
    title: "Graphic Tee",
    rating: 4.6,
    color: "Black",
  },
  {
    id: 9,
    type: "casual",
    img: fauxWomenImages.vneckImg,
    imgAlt: fauxWomenImages.vneckImgAlt,
    title: "V-Neck Sweatshirt",
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
            Faux for Women
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Effortless style, all-day comfort, fashion made for modern
            trendsetters.
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
            <option value="edgy">Edgy</option>
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
