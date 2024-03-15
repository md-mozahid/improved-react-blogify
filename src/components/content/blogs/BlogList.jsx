import { useBlogs } from '../../../hooks'
import LoaderPulse from '../../shared/LoaderPulse'
import BlogCard from './BlogCard'

export default function BlogList() {
  const { state } = useBlogs()

  let content = null

  if (state?.blogs?.length === 0) content = <LoaderPulse />
  if (state?.blogs?.length > 0)
    content = state?.blogs?.map((blog) => (
      <BlogCard key={blog?.id} blog={blog} />
    ))
  return <div className="space-y-3 md:col-span-5">{content}</div>
}
