import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { actions } from '../../../actions'
import { serverApi } from '../../../api'
import {
  CommentIcon,
  HeartFilledIcon,
  HeartIcon,
  LikeFilledIcon,
  LikeIcon,
} from '../../../constant/images'
import { useAuth, useAxios, useSingleBlog } from '../../../hooks'

export default function FloatingActions({ blog }) {
  const { dispatch } = useSingleBlog()
  const { axiosInstance } = useAxios()
  const { auth } = useAuth()
  const [like, setLike] = useState(false)
  const [favorite, setFavorite] = useState(false)
  // const [favorite, setFavorite] = useState(auth?.user && blog?.isFavourite)

  // handle like field
  const handleLike = async () => {
    if (!auth?.user) {
      toast.error('Please login to like the blog!')
    }

    try {
      const response = await axiosInstance.post(
        `${serverApi}/blogs/${blog?.id}/like`
      )
      if (response.status === 200) {
        if (response?.data?.isLike) {
          dispatch({
            type: actions.singleBlog.BLOG_LIKED,
            data: response.data,
          })
          setLike(true)
        } else {
          setLike(false)
        }
      }
    } catch (error) {
      if (error && error.response.status === 403) {
        toast.error(error.message)
      } else {
        toast.error('An error ocurred in like!')
      }
    }
  }

  // after reload the page,like and favorite icon live there
  useEffect(() => {
    if (auth?.user && blog?.isFavourite) {
      setFavorite(true)
    }

    if (auth?.user && blog?.likes?.some((l) => l.id === auth?.user?.id)) {
      setLike(true)
    }
  }, [auth?.user, blog?.isFavourite, blog?.likes])

  // handle favorite blog
  const handleFavorite = async () => {
    if (!auth?.user) {
      toast.error('Please login to favorite the blog!')
    }

    try {
      const response = await axiosInstance.patch(
        `${serverApi}/blogs/${blog?.id}/favourite`
      )
      if (response.status === 200) {
        dispatch({
          type: actions.singleBlog.BLOG_FAVORITE,
          data: response.data.isFavourite,
        })
        setFavorite(true)
      } else {
        setFavorite(false)
      }
    } catch (error) {
      if (error && error.response.status === 403) {
        toast.error(error.message)
      } else {
        toast.error('An error ocurred in favorite blog!')
      }
    }
  }

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={handleLike}>
          <img src={like ? LikeFilledIcon : LikeIcon} alt="like" />
          <span>{blog?.likes?.length ?? 0}</span>
        </li>
        <li onClick={handleFavorite}>
          <img src={favorite ? HeartFilledIcon : HeartIcon} alt="Favorite" />
        </li>
        <a href="#comments">
          <li>
            <img src={CommentIcon} alt="Comments" />
            <span>{blog?.comments?.length ?? 0}</span>
          </li>
        </a>
      </ul>
    </div>
  )
}
