import { EditIcon } from '../../constant/images'

export default function Bio({ bio }) {
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        <p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
      </div>
      <button className="flex-center h-7 w-7 rounded-full">
        <img src={EditIcon} alt="Edit" />
      </button>
    </div>
  )
}
