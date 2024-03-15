import { useEffect } from 'react'
import { actions } from '../actions'
import { axiosInstance } from '../api'
import BlogList from '../components/content/blogs/BlogList'
import Sidebar from '../components/sidebar/Sidebar'
import { useBlogs } from '../hooks'

export default function HomePage() {
  const { dispatch } = useBlogs()

  useEffect(() => {
    dispatch({
      type: actions.blogs.BLOGS_FETCHING,
    })
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs?page=1')
        if (response.status === 200) {
          dispatch({
            type: actions.blogs.BLOGS_FETCHED,
            data: response.data,
          })
        }
      } catch (error) {
        dispatch({
          type: actions.blogs.DATA_FETCH_ERROR,
          error: error.message,
        })
      }
    }

    fetchBlogs()
  }, [dispatch])

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <BlogList />
        <Sidebar />
      </div>
    </div>
  )
}
