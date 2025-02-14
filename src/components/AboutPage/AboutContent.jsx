import { AboutImages } from "../../assets/image/images"

const AboutContent = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            About Us
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p
              className="text-lg leading-relaxed text-justify indent-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Faux Vêtements is a conceptual clothing brand created by Bryan
              Nicholas and designed as part of my creative portfolio. It
              represents a fusion of modern aesthetics and timeless streetwear
              influences, bringing together bold designs, minimalistic elements,
              and high-fashion inspiration. This brand serves as an exploration
              of artistic expression through fashion, emphasizing individuality
              and creativity. All images, including product visuals and customer
              testimonials, are sourced from Pinterest and are used purely for
              conceptual and visual representation. Faux Vêtements is not a
              commercial brand but rather a showcase of my skills in UI/UX
              design, branding, and frontend development. This project
              highlights the seamless integration of digital design and
              e-commerce functionality, demonstrating expertise in ReactJS,
              responsive layouts, and user-centric experiences.
            </p>
          </div>

          {/* Right: Image Container */}
          <div className="md:w-1/2 flex flex-wrap justify-center md:justify-start gap-4">
            <img
              src={AboutImages.aboutUsImg}
              className="w-48 h-auto rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            />
            <img
              src={AboutImages.aboutUsMale}
              className="w-48 h-auto rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="800"
            />
            <img
              src={AboutImages.aboutUsFemale}
              className="w-48 h-auto rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="600"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
