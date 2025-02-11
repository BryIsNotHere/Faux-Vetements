import { IoCloseOutline } from "react-icons/io5"

const PopupModal = ({ orderPopup, setOrderPopup }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setOrderPopup(false)
    }
  }

  return (
    <>
      {orderPopup && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div
            className="p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h1>Order Now</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  onClick={() => alert("Your item is being ordered !")}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PopupModal
