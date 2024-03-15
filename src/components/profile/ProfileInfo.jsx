import Bio from './Bio'
import ProfileImage from './ProfileImage'

export default function ProfileInfo({ user }) {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <ProfileImage user={user} />
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {user?.firstName} {user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{user?.email}</p>
      </div>
      <Bio bio={user?.bio} />
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  )
}
