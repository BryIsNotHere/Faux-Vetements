import { useLocation } from "react-router-dom"
import DarkMode from "./DarkMode"
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping, FaCaretDown } from "react-icons/fa6"
import { animate } from "framer-motion"

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Rated",
    link: null,
    refKey: "topProducts",
  },
  {
    id: 3,
    name: "For Kids",
    link: "/faux-kids",
  },
  {
    id: 4,
    name: "For Men",
    link: "/faux-men",
  },
  {
    id: 5,
    name: "For Women",
    link: "/faux-women",
  },
]

const DropdownLinks = [
  {
    id: 1,
    name: "Top Rated",
    link: "topProducts",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "products",
  },
]

const Navbar = ({
  handleOrderPopup,
  scrollToSection,
  showTopRated,
  showTrending,
}) => {
  const location = useLocation()

  const isFauxPage =
    location.pathname.includes("faux-men") ||
    location.pathname.includes("faux-women") ||
    location.pathname.includes("faux-kids")

  let additionalText = ""
  if (location.pathname.includes("faux-men")) {
    additionalText = "MEN"
  } else if (location.pathname.includes("faux-women")) {
    additionalText = "WOMEN"
  } else if (location.pathname.includes("faux-kids")) {
    additionalText = "KIDS"
  }

  const handleScroll = (refKey) => {
    if (refKey && scrollToSection[refKey]?.current) {
      const yOffset = scrollToSection[refKey].current.offsetTop

      animate(window.scrollY, yOffset, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        onUpdate: (latest) => window.scrollTo(0, latest),
      })
    }
  }

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            {!isFauxPage && (
              <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                Faux Vêtements
              </a>
            )}

            {isFauxPage && (
              <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                Faux
                <span className="text-sm">{` ${additionalText}`}</span>
              </a>
            )}
          </div>

          <div className="flex justify-between items-center gap-2">
            {/* Search bar */}
            <div>
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>

            {/* Order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-300">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div>
        <div className="flex justify-center">
          <ul
            className={`sm:flex hidden items-center gap-4 ${!showTrending ? "mt-2 mb-2" : ""}`}
          >
            {Menu.filter(
              (item) => item.name !== "Top Rated" || showTopRated
            ).map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                  onClick={() => handleScroll(data.refKey)}
                >
                  {data.name}
                </a>
              </li>
            ))}

            {showTrending && (
              <li className="group relative cursor-pointer hover:text-primary">
                <a className="flex items-center gap-[2px] py-2 duration-200">
                  Trending
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 group-hover:text-primary" />
                  </span>
                </a>
                <div className="absolute x-[9999] hidden group-hover:block w-[150px] rounded-md bg-white dark:bg-gray-900 dark:text-white p-2 text-black">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          onClick={() => handleScroll(data.link)}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
