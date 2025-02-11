import Slider from "react-slick"
import testImg1 from "../../assets/testimonies/testimonial-model-1.jpg"
import testImg2 from "../../assets/testimonies/testimonial-model-2.jpg"
import testImg3 from "../../assets/testimonies/testimonial-model-3.jpg"
import testImg4 from "../../assets/testimonies/testimonial-model-4.jpg"
import testImg5 from "../../assets/testimonies/testimonial-model-5.jpg"

const testimonialData = [
  {
    id: 1,
    name: "Clara",
    text: "Absolutely love the quality! It's stylish, comfy, and perfect for my daily fits. Definitely my go-to brand now!",
    img: testImg1,
  },
  {
    id: 2,
    name: "Kezia",
    text: "The fabric is so soft, and the colors are just adorable! It feels so comfy, like a warm hug. Totally recommend! 🥰",
    img: testImg2,
  },
  {
    id: 3,
    name: "Aurora",
    text: "Just how I like it, Everything feels effortless yet edgy—perfect for my everyday look.",
    img: testImg3,
  },
  {
    id: 4,
    name: "Gregory",
    text: "Timeless and sophisticated. The craftsmanship speaks for itself. This is what premium fashion should feel like.",
    img: testImg4,
  },
  {
    id: 5,
    name: "Ray",
    text: "The perfect mix of rugged and effortless. Worn-in but never worn out. This brand just gets my aesthetic.",
    img: testImg5,
  },
]

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers said about us
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Here is what they have said about us!
          </p>
        </div>

        {/* Testimonies */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 my-10 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img src={data.img} className="rounded-full w-20 h-20" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-5">
                      <p className="text-xs text-gray-400 dark:text-white/60">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 dark:text-white/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
