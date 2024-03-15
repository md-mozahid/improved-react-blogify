import { useReducer } from 'react'
import { ProfileContext } from '../context'

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer()
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  )
}
