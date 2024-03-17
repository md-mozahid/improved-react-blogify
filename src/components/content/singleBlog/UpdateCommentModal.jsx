import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../../../utils'

export default function UpdateCommentModal({ comment }) {
  const [isEditMode, setIsEditMode] = useState(false)
  return (
    <>
      <div className="w-1/2 p-4 bg-slate-500 text-white rounded-md relative">
        <div className="flex items-start space-x-4 my-8">
          {comment && comment.author.avatar ? (
            Avatar(comment?.author?.avatar)
          ) : (
            <div className="avatar-img bg-orange-600 text-white">
              <span className="">{comment?.author?.firstName?.charAt(0)}</span>
            </div>
          )}

          <div className="w-full">
            <h5 className="text-slate -500 font-bold cursor-pointer">
              <Link to={`/profile/${comment?.author?.id}`}>
                {comment?.author?.firstName} {comment?.author?.lastName}
              </Link>
            </h5>
            <p className="text-slate-300">{comment?.content}</p>
          </div>
        </div>
      </div>
    </>
  )
}
