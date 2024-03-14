import BlogList from '../components/content/blogs/BlogList'
import Sidebar from '../components/sidebar/Sidebar'

export default function HomePage() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <BlogList />
        <Sidebar />
      </div>
    </div>
  )
}
