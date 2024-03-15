import { Avatar } from '../../../utils'

export default function Comment({ comment }) {
  return (
    <>
      <div className="flex items-start space-x-4 my-8">
        {comment && comment.author.avatar ? (
          Avatar(comment?.author?.avatar)
        ) : (
          <div className="avatar-img bg-orange-600 text-white">
            <span className="">{comment?.author?.firstName?.charAt(0)}</span>
          </div>
        )}

        <div className="w-full">
          <h5 className="text-slate -500 font-bold">
            {comment?.author?.firstName} {comment?.author?.lastName}
          </h5>
          <p className="text-slate-300">{comment?.content}</p>
        </div>
      </div>
    </>
  )
}
