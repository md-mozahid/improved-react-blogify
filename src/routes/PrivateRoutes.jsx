import { Navigate, useLocation } from "react-router-dom"

export default function PrivateRoutes({ children }) {
  const { auth, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <div>Loading...</div>
  }

  if (auth.accessToken) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}
