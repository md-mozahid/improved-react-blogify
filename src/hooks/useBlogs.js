import { useContext } from 'react'
import { BlogContext } from '../context'

export const useBlogs = () => {
  return useContext(BlogContext)
}
