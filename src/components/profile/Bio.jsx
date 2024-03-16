import { useState } from "react";
import { EditIcon, CheckIcon } from "../../constant/images";

export default function Bio({ bio }) {
  const [updateBio, setUpdateBio] = useState(bio);
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
        ) : (
          <textarea
            className="p-2 leading-[188%] text-gray-600 lg:text-lg rounded-md"
            value={updateBio}
            rows={5}
            cols={60}
            onChange={(e) => setUpdateBio(e.target.value)}
          />
        )}
      </div>

      {!editMode ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 rounded-full"
          // onClick={handleBioEdit}
        >
          <img src={CheckIcon} alt="Check" />
        </button>
      )}
    </div>
  );
}
