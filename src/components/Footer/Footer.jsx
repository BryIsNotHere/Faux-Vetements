import { FaInstagram, FaLinkedin, FaLocationArrow, FaYoutube } from "react-icons/fa6"
import { FaMobileAlt } from "react-icons/fa"

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
]

const FooterCategories = [
  {
    title: "Oversized Tees",
    link: "/#",
  },
  {
    title: "Shirts",
    link: "/#",
  },
  {
    title: "Sweaters",
    link: "/#",
  },
  {
    title: "Hoodies",
    link: "/#",
  },
]

const Footer = () => {
  return (
    <div className="bg-primary dark:bg-gray-800 text-white py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 pv-44 pt-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Faux Vêtements
            </h1>
            <p>
              Faux Vêtements is a conceptual clothing brand created by Bryan
              Nicholas and designed as a part of my creative portfolio. All
              images, including products and testimonials, are sourced from
              Pinterest for visual representation only. This project showcases
              UI/UX design, branding, and frontend development skill in ReactJS.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:translate-x-1 duration-300 text-gray-200"
                      key={link.id}
                    >
                      <a href={link.link}>
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Our Clothings
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterCategories.map((link) => (
                    <li
                      className="cursor-pointer hover:translate-x-1 duration-300 text-gray-200"
                      key={link.id}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/bry_nicholas">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/bryan-n-9b9927223/">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <FaYoutube className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Indonesia</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+62 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
