import { useState } from "react"
import oversizedImg from "../../assets/products/oversized-tee-model.jpg"
import oversizedImgAlt from "../../assets/products/oversized-tee-model-alt.jpg"
import hoodieImg from "../../assets/products/hoodie-model.jpg"
import hoodieImgAlt from "../../assets/products/hoodie-model-alt.jpg"
import knitwearImg from "../../assets/products/knitwear-model.jpg"
import knitwearImgAlt from "../../assets/products/knitwear-model-alt.jpg"
import cropImg from "../../assets/products/crop-model.jpg"
import cropImgAlt from "../../assets/products/crop-model-alt.jpg"
import poloImg from "../../assets/products/polo-model.jpg"
import poloImgAlt from "../../assets/products/polo-model-alt.jpg"
import { FaStar } from "react-icons/fa6"

const ProductsData = [
  {
    id: 1,
    img: oversizedImg,
    imgAlt: oversizedImgAlt,
    title: "Oversized Tee",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: hoodieImg,
    imgAlt: hoodieImgAlt,
    title: "Hoodie",
    rating: 4.0,
    color: "Black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: knitwearImg,
    imgAlt: knitwearImgAlt,
    title: "Knitwear",
    rating: 4.6,
    color: "Beige",
    aosDelay: "400",
  },
  {
    id: 4,
    img: cropImg,
    imgAlt: cropImgAlt,
    title: "Y2K Jersey",
    rating: 5.0,
    color: "White",
    aosDelay: "600",
  },
  {
    id: 5,
    img: poloImg,
    imgAlt: poloImgAlt,
    title: "Polo Half-Zip",
    rating: 4.5,
    color: "Cream",
    aosDelay: "800",
  },
]

const Products = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Seller Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Here are some picks of our best selling products.
          </p>
        </div>
        {/* Body */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
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
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View Button */}
          <div className="flex justify-center">
            <button
              data-aos="fade-up"
              className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-md hover:bg-gray-200 hover:text-primary"
              onClick={() => alert("Cannot View Product Yet !")}
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
