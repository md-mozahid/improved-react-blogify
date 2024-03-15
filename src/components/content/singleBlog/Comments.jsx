import Comment from './Comment'
import CommentForm from './CommentForm'

export default function Comments({ blog }) {
  return (
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">
          Comments ({blog?.comments?.length ?? 0})
        </h2>
        <CommentForm />
        {blog?.comments?.map((comment) => (
          <Comment key={comment?.id} comment={comment} />
        ))}
      </div>
    </section>
  )
}
