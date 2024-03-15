import { serverApi } from '../api'

export default function Thumbnail(thumbnail) {
  const blogThumbnail = `${serverApi}/uploads/blog/${thumbnail}`
  return <img className="blog-thumb" src={blogThumbnail} alt="thumbnail" />
}
