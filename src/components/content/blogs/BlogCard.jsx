import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks'
import Thumbnail from '../../../utils/Thumbnail'
import AuthorInfo from './AuthorInfo'
import BlogActions from './BlogActions'

export default function BlogCard({ blog }) {
  const { auth } = useAuth()
  const navigate = useNavigate()
  const user = blog?.author?.id === auth?.user?.id
  const handleClick = () => {
    navigate(`/single-blog/${blog?.id}`)
  }

  return (
    <>
      <div className="blog-card" onClick={handleClick}>
        {Thumbnail(blog?.thumbnail)}
        <div className="mt-2 relative">
          <h3 className="text-slate-300 text-xl lg:text-2xl">{blog?.title}</h3>
          <p className="mb-6 text-base text-slate-500 mt-1 line-clamp-3">
            {blog?.content}
          </p>
          <AuthorInfo blog={blog} />
          {user && <BlogActions />}
        </div>
      </div>
    </>
  )
}
