import { useEffect } from 'react'
import { useAuth, useProfile } from '../hooks'
import MyBlogs from '../components/profile/MyBlogs'
import ProfileInfo from '../components/profile/ProfileInfo'

import { actions } from '../actions'
import { serverApi } from '../api'
import { useAxios } from '../hooks'

export default function ProfilePage() {
  const { state, dispatch } = useProfile()
  const { axiosInstance } = useAxios()
  const { auth } = useAuth()

  console.log(state)

  useEffect(() => {
    dispatch({
      type: actions.profile.DATA_FETCHING,
    })

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `${serverApi}/blogs/${auth?.user?.id}`
        )
        console.log(response.data.blogs)
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          data: error.message,
        })
      }
    }
    fetchData()
  }, [auth?.user?.id, axiosInstance, dispatch])

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <ProfileInfo />
        <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
        <div className="my-6 space-y-4">
          <MyBlogs />
        </div>
      </div>
    </main>
  )
}
