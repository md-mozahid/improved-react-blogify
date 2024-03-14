import FavoriteBlogs from './FavoriteBlogs'
import PopularBlogs from './PopularBlogs'

export default function Sidebar() {
  return (
    <div className="md:col-span-2 h-full w-full space-y-5">
      <PopularBlogs />
      <FavoriteBlogs />
    </div>
  )
}
