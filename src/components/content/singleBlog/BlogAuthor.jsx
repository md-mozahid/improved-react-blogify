import { Link } from 'react-router-dom'

export default function BlogAuthor({ blog }) {
  return (
    <div className="flex justify-center items-center my-4 gap-4">
      <div className="flex items-center capitalize space-x-2">
        <div className="avatar-img bg-indigo-600 text-white">
          <span className="">S</span>
        </div>
        <Link to="/profile">
          <h5 className="text-slate-500 text-sm">
            {blog?.firstName} {blog?.lastName}
          </h5>
        </Link>
      </div>
      <span className="text-sm text-slate-700 dot">June 28, 2018</span>
      <span className="text-sm text-slate-700 dot">100 Likes</span>
    </div>
  )
}
