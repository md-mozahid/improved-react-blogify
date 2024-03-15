import { useNavigate } from 'react-router-dom'
import Avatar from '../../../utils/Avatar'
import { formateDate } from '../../../utils/formateDate'

export default function AuthorInfo({ blog }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.stopPropagation()
    navigate(`/profile/${blog?.author?.id}`)
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center capitalize space-x-2">
          <div className="avatar-img bg-indigo-600 text-white">
            {blog?.author?.avatar ? (
              Avatar(blog?.author?.avatar)
            ) : (
              <span className="">{blog?.author?.firstName.charAt(0)}</span>
            )}
          </div>

          <div>
            <h5 className="text-slate-500 text-sm">
              <p onClick={handleClick}>
                {blog?.author?.firstName} {blog?.author?.lastName}
              </p>
            </h5>
            <div className="flex items-center text-xs text-slate-700">
              <span>{formateDate(blog?.createdAt)}</span>
            </div>
          </div>
        </div>

        <div className="text-sm px-2 py-1 text-slate-700">
          <span>{blog?.likes?.length ?? 0} Likes</span>
        </div>
      </div>
    </>
  )
}
