import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { actions } from '../../../actions'
import { serverApi } from '../../../api'
import { DeleteIcon, EditIcon, ThreeDots } from '../../../constant/images'
import { useAxios, useSingleBlog } from '../../../hooks'

export default function BlogActions({ blog }) {
  const [showActions, setShowActions] = useState(false)
  const { dispatch } = useSingleBlog()
  const { axiosInstance } = useAxios()

  const navigate = useNavigate()
  const handleUpdate = (e) => {
    e.stopPropagation()
    setShowActions(false)
    navigate('/update-blog')
  }

  const handleDelete = async (id) => {
     await axiosInstance.delete(`${serverApi}/blogs/${id}`)
    
      dispatch({
        type: actions.singleBlog.BLOG_DELETED,
        data: id,
      })
    
  }
  return (
    <>
      <div className="absolute right-0 top-0">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setShowActions(!showActions)
          }}>
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
              onClick={(e) => {
                handleDelete(blog?.id)
                setShowActions(false)
                e.stopPropagation()
              }}>
              <img src={DeleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  )
}
