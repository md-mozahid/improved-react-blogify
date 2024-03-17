import { useState } from 'react'
import { toast } from 'react-toastify'
import { actions } from '../../actions'
import { CheckIcon, EditIcon } from '../../constant/images'
import { useAuth, useAxios, useProfile } from '../../hooks'

export default function Bio({ bio }) {
  const { state, dispatch } = useProfile()
  const { auth } = useAuth()
  const { axiosInstance } = useAxios()
  const isLoggedInUser = state?.user?.id === auth?.user?.id
  // console.log(state)

  const [updateBio, setUpdateBio] = useState(state?.user?.bio)
  const [editMode, setEditMode] = useState(false)

  const handleUpdateBio = async () => {
    dispatch({
      type: actions.profile.DATA_FETCHING,
    })
    try {
      const response = await axiosInstance.patch(`/profile`, {
        updateBio,
      })

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        })
      }
      toast.success(response.data.message)
      setEditMode(false)
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      })
    }
  }
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {bio || 'Edit Your Bio'}
          </p>
        ) : (
          <textarea
            className="p-2 leading-[188%] text-gray-600 lg:text-lg rounded-md"
            value={updateBio}
            rows={5}
            cols={60}
            onChange={(e) => setUpdateBio(e.target.value)}
          />
        )}
      </div>
      {isLoggedInUser && (
        <>
          {!editMode ? (
            <button
              className="flex-center h-7 w-7 rounded-full"
              onClick={() => setEditMode(true)}>
              <img src={EditIcon} alt="Edit" />
            </button>
          ) : (
            <button
              className="flex-center h-7 w-7 rounded-full"
              onClick={handleUpdateBio}>
              <img src={CheckIcon} alt="Check" />
            </button>
          )}
        </>
      )}
    </div>
  )
}
