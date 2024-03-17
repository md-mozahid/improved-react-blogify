import { Link } from 'react-router-dom'
import { Avatar } from '../../../utils'
import CommentActions from './CommentActions'

export default function Comment({ comment }) {
  
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
          <p className="text-slate-300">{comment?.content}</p>
        </div>
        <CommentActions comment={comment} />
      </div>
    </>
  )
}
