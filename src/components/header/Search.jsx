import { useState } from 'react'
import { createPortal } from 'react-dom'
import { SearchIcon } from '../../constant/images'
import { SearchModal } from '../../pages'

export default function Search() {
  const [searchModal, setSearchModal] = useState(false)
  const handleModal = () => {
    setSearchModal(true)
  }
  return (
    <li>
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleModal}>
        <img src={SearchIcon} alt="Search" />
        <span>Search</span>
      </button>
      {searchModal &&
        createPortal(<SearchModal onClose={setSearchModal} />, document.body)}
    </li>
  )
}
