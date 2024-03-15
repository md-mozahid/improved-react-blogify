import { serverApi } from '../api'

export default function Avatar(avatar) {
  const userAvatar = `${serverApi}/uploads/avatar/${avatar}`
  return <img className="rounded-full w-10" src={userAvatar} alt="avatar" />
}
