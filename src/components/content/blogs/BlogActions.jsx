import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeleteIcon, EditIcon, ThreeDots } from '../../../constant/images'

export default function BlogActions() {
  const [showActions, setShowActions] = useState(false)
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.stopPropagation()
    setShowActions(!showActions)
  }
  const handleUpdate = (e) => {
    e.stopPropagation()
    setShowActions(false)
    navigate('/update-blog')
  }
  const handleDelete = (e) => {
    e.stopPropagation()
    setShowActions(false)
    alert('Are you want to delete this blog ?')
  }
  return (
    <>
      <div className="absolute right-0 top-0">
        <button onClick={handleClick}>
          <img src={ThreeDots} alt="3dots of Action" />
        </button>
        {showActions && (
          <div className="action-modal-container">
            <button
              className="action-menu-item hover:text-lwsGreen"
              onClick={handleUpdate}>
              <img src={EditIcon} alt="Edit" />
              Edit
            </button>
            <button
              className="action-menu-item hover:text-red-500"
              onClick={handleDelete}>
              <img src={DeleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  )
}
