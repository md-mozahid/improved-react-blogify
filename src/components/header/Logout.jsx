import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LogoutIcon } from '../../constant/images'
import { useAuth } from '../../hooks'

export default function Logout() {
  const { setAuth } = useAuth()
  const navigate = useNavigate()
  const handleClick = () => {
    setAuth(null)
    navigate('/login')
    toast.success('Logout successful')
  }
  return (
    <li>
      <button
        to="/login"
        className="text-white hover:text-white transition-all duration-200 flex gap-2"
        onClick={handleClick}>
        <img src={LogoutIcon} alt="login" />
        Logout
      </button>
    </li>
  )
}
