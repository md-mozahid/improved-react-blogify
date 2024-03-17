import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../../../utils'
import CommentActions from './CommentActions'

export default function Comment({ comment }) {
  const [isEdit, setIsEdit] = useState(false)
  const [updateComment, setUpdateComment] = useState(comment?.content)

  return (
    <>
      <div className="flex items-start space-x-4 my-8 relative">
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
          {isEdit ? (
            <>
              <input
                type="text"
                className="px-3 py-1 border-none rounded-l text-slate-700 outline-none"
                value={updateComment}
                onChange={(e) => setUpdateComment(e.target.value)}
              />
              <button className='bg-sky-500 px-2 py-1 rounded-r'>Update</button>
            </>
          ) : (
            <p className="text-slate-300">{comment?.content}</p>
          )}
        </div>
        <CommentActions comment={comment} setIsEdit={setIsEdit} />
      </div>
    </>
  )
}
