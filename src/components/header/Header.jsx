import { Link } from 'react-router-dom'
import { Logo } from '../../constant/images'
import { useAuth } from '../../hooks'
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile'
import Search from './Search'
import Write from './Write'

export default function Header() {
  const { auth } = useAuth()
  const user = auth?.user

  return (
    <header>
      <nav className="container">
        <div>
          <Link to="/">
            <img className="w-32" src={Logo} alt="lws" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            {user && (
              <>
                <Write />
                <Search />
              </>
            )}
            {user ? <Logout /> : <Login />}
            {user && <Profile />}
          </ul>
        </div>
      </nav>
    </header>
  )
}
