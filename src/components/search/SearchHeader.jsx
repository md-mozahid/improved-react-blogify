import { useEffect, useState } from 'react'
import { actions } from '../../actions'
import { serverApi } from '../../api'
import { CloseIcon } from '../../constant/images'
import { useAxios, useBlogs } from '../../hooks'
import { useDebounce } from '../../hooks/useDebounce'
import SearchContent from './SearchContent'

export default function SearchHeader({ onClose }) {
  const { state, dispatch } = useBlogs()
  const [searchTerm, setSearchTerm] = useState('')
  const debounceValue = useDebounce(searchTerm, 800)
  const { axiosInstance } = useAxios()

  useEffect(() => {
    if (searchTerm?.length > 0) {
      const fetchSearchData = async () => {
        try {
          const response = await axiosInstance.get(
            `${serverApi}/search?q=${debounceValue}`,
            { query: 'await' }
          )
          dispatch({
            type: actions.blogs.BLOGS_SEARCH,
            data: response.data,
          })
        } catch (error) {
          console.error(error)
        }
      }
      fetchSearchData()
    }
  }, [debounceValue, dispatch, axiosInstance, searchTerm.length])

  // const searchByString = (blog) =>
  //   blog?.title?.toLowerCase().includes(state?.search?.toLowerCase())

  // useEffect(() => {
  //   dispatch({
  //     type: actions.blogs.BLOGS_SEARCH,
  //     data: searchTerm,
  //   })
  // }, [dispatch, searchTerm])

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
            {state?.blogs?.map((blog) => (
              <SearchContent key={blog?.id} blog={blog} />
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
