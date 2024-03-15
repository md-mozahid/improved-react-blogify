import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-red-500 text-3xl my-10">404</h3>
      <h1 className="text-5xl mb-10">Page Not Found</h1>
      <p className="text-lg">Sorry, we could not find the page.</p>
      <div className="flex gap-5 mt-10">
        <button className="text-blue-500">Go Back</button>
        <button className="bg-sky-500 px-3 py-1 rounded-md text-white">
          <Link to="/">Go to Home</Link>
        </button>
      </div>
    </div>
  )
}
