import { useNavigate } from 'react-router-dom'
import { ReactRoadmap } from '../../../constant/images'
import AuthorInfo from './AuthorInfo'
import BlogActions from './BlogActions'

export default function BlogCard() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/single-blog')
  }
  return (
    <>
      <div className="blog-card" onClick={handleClick}>
        <img className="blog-thumb" src={ReactRoadmap} alt="" />
        <div className="mt-2 relative">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            <a href="./single-blog.html">React Roadmap in 2024</a>
          </h3>
          <p className="mb-6 text-base text-slate-500 mt-1">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
            dolor pretium donec dictum. Vici consequat justo enim. Venenatis
            eget adipiscing luctus lorem.
          </p>
          <AuthorInfo />
          <BlogActions />
        </div>
      </div>
    </>
  )
}
