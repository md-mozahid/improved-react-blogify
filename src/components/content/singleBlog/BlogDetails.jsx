import { serverApi } from '../../../api'
import Tags from '../../../components/shared/Tags'
import BlogAuthor from './BlogAuthor'

export default function BlogDetails({ blog }) {

  return (
    <>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl">{blog?.title}</h1>
        <BlogAuthor blog={blog} />
        <img
          className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
          src={`${serverApi}/uploads/blog/${blog?.thumbnail}`}
          alt=""
        />
        <Tags tags={blog?.tags} />
        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          {blog?.content}
        </div>
      </div>
    </>
  )
}
