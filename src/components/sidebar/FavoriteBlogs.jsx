import { useEffect, useState } from 'react'
import { serverApi } from '../../api'
import { useAxios } from '../../hooks'
import FavoriteBlog from './FavoriteBlog'

export default function FavoriteBlogs() {
  const [favoriteBlog, setFavoriteBlog] = useState(null)
  const { axiosInstance } = useAxios()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `${serverApi}/blogs/favourites`
        )
        if (response.status === 200) {
          setFavoriteBlog(response.data.blogs)
        }
      } catch (error) {
        if (error && error.response.status === 500) {
          console.error('Please login first', error)
        }
      }
    }
    fetchData()
  }, [axiosInstance])

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favorites ❤️
      </h3>
      <ul className="space-y-5 my-5">
        {favoriteBlog?.length === 0 ? (
          <p className="">You have no favorite blog!</p>
        ) : (
          favoriteBlog?.map((favorite) => (
            <FavoriteBlog key={favorite?.id} favorite={favorite} />
          ))
        )}
      </ul>
    </div>
  )
}
