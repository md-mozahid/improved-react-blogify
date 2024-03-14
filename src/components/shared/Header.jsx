import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { Logo, SearchIcon } from '../../constant/images'
import { SearchModal } from '../../pages'

export default function Header() {
  const [searchModal, setSearchModal] = useState(false)

  const handleModal = () => {
    setSearchModal(true)
  }

  return (
    <header>
      <nav className="container">
        <div>
          <Link to="/">
            <img className="w-32" src={Logo} alt="lws" />
          </Link>
        </div>

        {/* <!-- Actions - Login, Write, Home, Search --> */}
        {/* <!-- Notes for Developers --> */}
        {/* <!-- For Logged in User - Write, Profile, Logout Menu --> */}
        {/* <!-- For Not Logged in User - Login Menu --> */}
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="/create-blog"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                Write
              </Link>
            </li>
            <li>
              <button
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleModal}>
                <img src={SearchIcon} alt="Search" />
                <span>Search</span>
              </button>
              {searchModal &&
                createPortal(
                  <SearchModal onClose={setSearchModal} />,
                  document.body
                )}
            </li>
            <li>
              <Link
                to="/login"
                className="text-white/50 hover:text-white transition-all duration-200">
                Login
              </Link>
            </li>
            <li className="flex items-center">
              <div className="avater-img bg-orange-600 text-white">
                <span className="">S</span>
              </div>
              <Link to="/profile">
                <span className="text-white ml-2">Saad Hasan</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
