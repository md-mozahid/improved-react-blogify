import { actions } from '../actions'
const { BLOG_FETCHED, BLOG_FETCHING, BLOG_FETCH_ERROR } = actions.singleBlog

const initialState = {
  blog: [],
  loading: false,
  error: null,
}

const SingleBlogReducer = (state, action) => {
  switch (action.type) {
    case BLOG_FETCHING: {
      return {
        ...state,
        loading: true,
      }
    }
    case BLOG_FETCHED: {
      return {
        ...state,
        loading: false,
        blog: action.data,
      }
    }
    case BLOG_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
  }
}

export { SingleBlogReducer, initialState }
