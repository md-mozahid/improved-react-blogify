import { serverApi } from '../../api'
import { EditIcon } from '../../constant/images'

export default function ProfileImage({ user }) {
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
        {user?.avatar ? (
          <img
            className="rounded-full"
            src={`${serverApi}/uploads/avatar/${user?.avatar}`}
            alt=""
          />
        ) : (
          <span className="">{user?.firstName?.charAt(0)}</span>
        )}
      </div>

      <button className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
        <img src={EditIcon} alt="Edit" />
      </button>
    </div>
  )
}
