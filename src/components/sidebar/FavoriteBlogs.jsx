import { Link } from 'react-router-dom'

export default function FavoriteBlogs() {
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      <ul className="space-y-5 my-5">
        <li>
          <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
            <Link to="/single-blog">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </Link>
          </h3>
          <p className="text-slate-600 text-sm">
            #tailwindcss, #server, #ubuntu
          </p>
        </li>
      </ul>
    </div>
  )
}
