import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks'

export default function PrivateRoutes({ children }) {
  const { auth } = useAuth()
  const location = useLocation()

  if (auth?.accessToken) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}
