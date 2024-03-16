import { useEffect, useState } from 'react'
import { useAxios } from '../../hooks'
import PopularBlog from './PopularBlog'

export default function PopularBlogs() {
  const [popularBlog, setPopularBlog] = useState(null)
  const { axiosInstance } = useAxios()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/blogs/popular`)
        if (response.status === 200) {
          setPopularBlog(response.data.blogs)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [axiosInstance])

  // decide what to render
  let content = null
  if (popularBlog?.length === 0) content = <div>Popular blog not found!</div>
  if (popularBlog?.length > 0)
    content = popularBlog?.map((popular) => (
      <PopularBlog key={popular?.id} popular={popular} />
    ))

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>
      {content}
    </div>
  )
}
