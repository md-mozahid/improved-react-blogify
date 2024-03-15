import { useNavigate } from 'react-router-dom'
import Thumbnail from '../../../utils/Thumbnail'
import AuthorInfo from './AuthorInfo'
import BlogActions from './BlogActions'

export default function BlogCard({ blog }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/single-blog/${blog?.id}`)
  }
  return (
    <>
      <div className="blog-card" onClick={handleClick}>
        {Thumbnail(blog?.thumbnail)}
        <div className="mt-2 relative">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            <a href="./single-blog.html">{blog?.title}</a>
          </h3>
          <p className="mb-6 text-base text-slate-500 mt-1">{blog?.content}</p>
          <AuthorInfo blog={blog} />
          <BlogActions />
        </div>
      </div>
    </>
  )
}
