import { Link } from 'react-router-dom'
import Avatar from '../../../utils/Avatar'
import { formateDate } from '../../../utils/formateDate'

export default function BlogAuthor({ blog }) {
  return (
    <div className="flex justify-center items-center my-4 gap-4">
      <div className="flex items-center capitalize space-x-2">
        {blog?.author?.avatar ? (
          Avatar(blog?.author?.avatar)
        ) : (
          <div className="avatar-img bg-indigo-600 text-white">
            <span className="">{blog?.author?.firstName?.charAt(0)}</span>
          </div>
        )}
        <Link to={`/profile/${blog?.author?.id}`}>
          <h5 className="text-slate-500 text-sm">
            {blog?.author?.firstName} {blog?.author?.lastName}
          </h5>
        </Link>
      </div>
      <span className="text-sm text-slate-700 dot">
        {formateDate(blog?.createdAt)}
      </span>
      <span className="text-sm text-slate-700 dot">
        {blog?.likes?.length ?? 0} Likes
      </span>
    </div>
  )
}
