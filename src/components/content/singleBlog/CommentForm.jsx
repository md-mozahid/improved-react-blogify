import { useState } from 'react'
import { toast } from 'react-toastify'
import { actions } from '../../../actions'
import { serverApi } from '../../../api'
import { useAuth, useAxios, useSingleBlog } from '../../../hooks'
import Avatar from '../../../utils/Avatar'

export default function CommentForm() {
  const { state, dispatch } = useSingleBlog()
  const { auth } = useAuth()
  const { axiosInstance } = useAxios()
  const [comment, setComment] = useState('')

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({ type: actions.singleBlog.BLOG_FETCHING })
    if (auth?.authToken) {
      try {
        const response = await axiosInstance.post(
          `${serverApi}/blogs/${state?.blog?.id}/comment`,
          { content: comment }
        )
        if (response.status === 200) {
          dispatch({
            type: actions.singleBlog.BLOG_COMMENTED,
            data: response.data,
          })
          setComment('')
        }
      } catch (error) {
        console.error(error)
        dispatch({
          type: actions.singleBlog.BLOG_COMMENTED_ERROR,
          error: error.message,
        })
      }
    } else {
      toast.error('Please, need login for commenting!')
    }
  }

  return (
    <div className="flex items -center space-x-4">
      <div className="avatar-img bg-indigo-600 text-white">
        {auth?.user?.avatar ? (
          Avatar(auth?.user?.avatar)
        ) : (
          <span className="">{auth?.user?.firstName?.charAt(0)}</span>
        )}
      </div>
      <form className="w-full" onSubmit={handleClick}>
        <textarea
          className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
          placeholder="Write a comment"
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}></textarea>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            // onClick={handleClick}
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  )
}
