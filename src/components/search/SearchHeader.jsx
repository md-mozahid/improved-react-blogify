import { useEffect, useReducer, useState } from 'react'
import { actions } from '../../actions'
import { serverApi } from '../../api'
import { CloseIcon } from '../../constant/images'
import { useAxios } from '../../hooks'
import { useDebounce } from '../../hooks/useDebounce'
import { SearchReducer, initialState } from '../../reducers/SearchReducer'
import SearchContent from './SearchContent'

export default function SearchHeader({ onClose }) {
  const [state, dispatch] = useReducer(SearchReducer, initialState)
  const [searchTerm, setSearchTerm] = useState('')
  const debounceValue = useDebounce(searchTerm, 800)
  const { axiosInstance } = useAxios()

  useEffect(() => {
    if (searchTerm?.length > 0) {
      dispatch({ type: actions.search.DATA_FETCHING })

      const fetchSearchData = async () => {
        try {
          const response = await axiosInstance.get(
            `${serverApi}/search?q=${debounceValue}`
          )
          dispatch({
            type: actions.search.DATA_FETCHED,
            data: response.data,
          })
        } catch (error) {
          dispatch({
            type: actions.search.DATA_FETCH_ERROR,
            error: error.message,
            // length: length,
          })
        }
      }
      fetchSearchData()
    }
  }, [debounceValue, dispatch, axiosInstance, searchTerm?.length])

  return (
    <section className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
      <div className="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
        <div>
          <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">
            Search for Your Desire Blogs
          </h3>
          <input
            type="text"
            placeholder="Start Typing to Search"
            className="w-full bg-transparent p-2 text-base text-white outline-none border rounded-lg focus:ring focus:ring-indigo-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="">
          <h3 className="text-slate-400 font-bold mt-6">Search Results</h3>
          <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
            {state?.search?.data?.map((blog) => (
              <SearchContent key={blog?.id} blog={blog} onClose={onClose} />
            ))}
          </div>
        </div>

        <button onClick={() => onClose(false)}>
          <img
            src={CloseIcon}
            alt="Close"
            className="absolute right-2 top-2 cursor-pointer w-8 h-8"
          />
        </button>
      </div>
    </section>
  )
}
