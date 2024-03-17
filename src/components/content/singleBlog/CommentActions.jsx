import { useState } from 'react'
import { toast } from 'react-toastify'
import { actions } from '../../../actions'
import { serverApi } from '../../../api'
import { DeleteIcon, EditIcon, ThreeDots } from '../../../constant/images'
import { useAuth, useAxios, useSingleBlog } from '../../../hooks'

export default function CommentActions({ comment, setIsEdit }) {
  const [showActions, setShowActions] = useState(false)
  const { auth } = useAuth()
  const { state, dispatch } = useSingleBlog()
  const { axiosInstance } = useAxios()
  const isLoggedInUser = comment?.author?.id === auth?.user?.id

  const handleClick = (e) => {
    e.stopPropagation()
    setShowActions(!showActions)
  }
  const handleUpdate = (e) => {
    e.stopPropagation()
    setIsEdit(true)
    setShowActions(false)
  }

  // blog comment delete
  const handleDelete = async (e) => {
    e.stopPropagation()
    try {
      const response = await axiosInstance.delete(
        `${serverApi}/blogs/${state?.blog?.id}/comment/${comment?.id}`
      )
      if (response.status === 200) {
        dispatch({
          type: actions.singleBlog.BLOG_COMMENT_DELETED,
          data: response.data,
        })
        toast.success('Comment delete successful')
      }
      setShowActions(false)
    } catch (error) {
      console.error(error)
    }
    // alert('Are you want to delete this blog ?')
  }

  return (
    <>
      {isLoggedInUser && (
        <div className="absolute right-0 top-0 place-items-center">
          <button onClick={handleClick}>
            <img src={ThreeDots} alt="3dots of Action" />
          </button>
          {showActions && (
            <div className="action-modal-container">
              <button
                className="action-menu-item hover:text-lwsGreen cursor-pointer"
                onClick={handleUpdate}>
                <img src={EditIcon} alt="Edit" />
                Edit
              </button>
              <button
                className="action-menu-item hover:text-red-500 cursor-pointer"
                onClick={handleDelete}>
                <img src={DeleteIcon} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
