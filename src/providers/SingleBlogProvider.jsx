import { useReducer } from 'react'
import { SingleBlogContext } from '../context'
import { SingleBlogReducer, initialState } from '../reducers/SingleBlogReducer'

export default function SingleBlogProvider({ children }) {
  const [state, dispatch] = useReducer(SingleBlogReducer, initialState)
  return (
    <SingleBlogContext.Provider value={{ state, dispatch }}>
      {children}
    </SingleBlogContext.Provider>
  )
}
