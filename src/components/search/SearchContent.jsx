import Thumbnail from '../../utils/Thumbnail'

export default function SearchContent({ blog }) {
  return (
    <div className="flex gap-6 py-2">
      {Thumbnail(blog?.thumbnail)}
      <div className="mt-2">
        <h3 className="text-slate-300 text-xl font-bold">{blog?.title}</h3>
        <p className="mb-6 text-sm text-slate-500 mt-1">{blog?.content}</p>
      </div>
    </div>
  )
}
