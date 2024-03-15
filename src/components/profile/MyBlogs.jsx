import BlogCard from '../content/blogs/BlogCard'

export default function MyBlogs({ blogs }) {
  let content = null
  if (blogs?.length === 0) content = <div>No blogs found !</div>
  if (blogs?.length > 0)
    content = blogs.map((blog) => <BlogCard key={blog?.id} blog={blog} />)

  return <>{content}</>
}
