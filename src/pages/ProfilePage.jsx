import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { actions } from '../actions'
import { serverApi } from '../api'
import MyBlogs from '../components/profile/MyBlogs'
import ProfileInfo from '../components/profile/ProfileInfo'
import { useAuth, useAxios, useProfile } from '../hooks'

export default function ProfilePage() {
  const { state, dispatch } = useProfile()
  const { axiosInstance } = useAxios()
  const { auth } = useAuth()
  const { profileId } = useParams()

  useEffect(() => {
    dispatch({
      type: actions.profile.DATA_FETCHING,
    })

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `${serverApi}/profile/${profileId}`
        )
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          })
        }
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          data: error.message,
        })
      }
    }
    fetchData()
  }, [auth?.user?.id, axiosInstance, dispatch, profileId])

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <ProfileInfo user={state?.user} />
        <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
        <div className="my-6 space-y-4">
          <MyBlogs blogs={state?.blogs} />
        </div>
      </div>
    </main>
  )
}
