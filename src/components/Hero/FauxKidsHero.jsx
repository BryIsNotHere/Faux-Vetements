import image1 from "../../assets/hero/faux-kids-model-1.png"
import image2 from "../../assets/hero/faux-kids-model-2.png"
import image3 from "../../assets/hero/faux-kids-model-3.png"
import Slider from "react-slick"

const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Street Style, Big Attitude",
    description:
      "Let them rule the playground in bold, comfy, and effortlessly cool outfits.",
  },
  {
    id: 2,
    img: image2,
    title: "Elegance Beyond Their Years",
    description:
      "Classic, refined, and timeless—style that makes them look sharp and confident.",
  },
  {
    id: 3,
    img: image3,
    title: "Sporty Vibes, Endless Energy",
    description:
      "Designed for play, built for movement. Keep them stylish while they stay active.",
  },
]

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-12 -z[8]"></div>

      <div className="container pb-8 sm:pb-0 ml-8">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text and Contents */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ml-1">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={() => handleOrderPopup()}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[600px] h-[600px] sm:h-[450px] sm:w-[450px] sm:scale-90 lg:scale-100 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
