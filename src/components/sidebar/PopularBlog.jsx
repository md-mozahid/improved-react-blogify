import { Link } from 'react-router-dom'

export default function PopularBlog({ popular }) {
  return (
    <ul className="space-y-5 my-5">
      <li>
        <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
          <Link to={`/single-blog/${popular?.id}`}>{popular?.title}</Link>
        </h3>
        <p className="text-slate-600 text-sm">
          by{' '}
          <Link to={`/profile/${popular?.author?.id}`}>
            <span className="cursor-pointer">
              {popular?.author?.firstName} {popular?.author?.lastName}
            </span>
          </Link>
          <span>·</span> {popular?.likes?.length ?? 0} Likes
        </p>
      </li>
    </ul>
  )
}
