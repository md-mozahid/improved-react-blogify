import { Link } from 'react-router-dom'
import { LoginIcon } from '../../constant/images'

export default function Login() {
  return (
    <li>
      <Link
        to="/login"
        className="text-white hover:text-white transition-all duration-200 flex gap-2">
        <img src={LoginIcon} alt="login" />
        Login
      </Link>
    </li>
  )
}
