const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-primary dark:bg-gray-800 bg-center bg-cover bg-no-repeat text-white py-16 px-6 text-center rounded-lg shadow-md"
    >
      <div className="max-w-4xl mx-auto container backdrop-blur-sm py-10">
        <div className="mt-6 mb-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <h1
            data-aos="fade-up"
            className="text-2xl text-center sm:text-left sm:text-4xl font-semibold"
          >
            Stay Updated And Never Miss Exclusive Deals and Updates!
          </h1>

          <input
            data-aos="fade-up"
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 text-black rounded-md focus:outline-none"
          />
          <button
            data-aos="fade-up"
            className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
            onClick={() =>
              alert("You have subscribed to our email! (Just Kidding)")
            }
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
