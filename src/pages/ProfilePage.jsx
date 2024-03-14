import BlogCard from '../components/content/blogs/BlogCard'
import ProfileInfo from '../components/profile/ProfileInfo'

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <ProfileInfo />
        <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
        <div className="my-6 space-y-4">
          <BlogCard />
        </div>
      </div>
    </main>
  )
}
