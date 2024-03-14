import { Link, useNavigate } from 'react-router-dom'

export default function PopularBlogs() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/profile')
  }
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>
      <ul className="space-y-5 my-5">
        <li>
          <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
            <Link to="/single-blog">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </Link>
          </h3>
          <p className="text-slate-600 text-sm">
            by{' '}
            <span className="cursor-pointer" onClick={handleClick}>
              Saad Hasan
            </span>
            <span>·</span> 100 Likes
          </p>
        </li>
      </ul>
    </div>
  )
}
