import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Avatar } from '../../utils'

export default function Profile() {
  const { auth } = useAuth()
  const user = auth?.user

  return (
    <li className="flex items-center">
      {user && user?.avatar ? (
        Avatar(user?.avatar)
      ) : (
        <div className="avatar-img bg-orange-600 text-white">
          <span className="">{user?.firstName?.charAt(0)}</span>
        </div>
      )}

      <Link to="/profile">
        <span className="text-white ml-2">
          {user?.firstName} {user?.lastName}
        </span>
      </Link>
    </li>
  )
}
