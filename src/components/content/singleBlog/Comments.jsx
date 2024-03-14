import Comment from './Comment'
import CommentForm from './CommentForm'

export default function Comments() {
  return (
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">Comments (3)</h2>
        <CommentForm />
        <Comment />
      </div>
    </section>
  )
}
