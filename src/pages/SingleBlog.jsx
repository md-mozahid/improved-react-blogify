import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { actions } from '../actions'
import { serverApi } from '../api'
import BlogDetails from '../components/content/singleBlog/BlogDetails'
import Comments from '../components/content/singleBlog/Comments'
import FloatingActions from '../components/content/singleBlog/FloatingActions'
import { useAxios, useSingleBlog } from '../hooks'

export default function SingleBlog() {
  const { state, dispatch } = useSingleBlog()
  const { axiosInstance } = useAxios()
  const { blogId } = useParams()


  useEffect(() => {
    dispatch({
      type: actions.singleBlog.BLOG_FETCHING,
    })

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`${serverApi}/blogs/${blogId}`)
        if (response.status === 200) {
          dispatch({
            type: actions.singleBlog.BLOG_FETCHED,
            data: response.data,
          })
        }
      } catch (error) {
        dispatch({
          type: actions.singleBlog.BLOG_FETCH_ERROR,
          error: error.message,
        })
      }
    }
    fetchData()
  }, [blogId, axiosInstance, dispatch])

  return (
    <>
      <BlogDetails blog={state?.blog} />
      <Comments blog={state?.blog} />
      <FloatingActions blog={state?.blog} />
    </>
  )
}
