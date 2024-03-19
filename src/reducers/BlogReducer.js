import { actions } from '../actions'

const { BLOGS_FETCHED, BLOGS_FETCHING, BLOG_CREATED, BLOG_CREATED_ERROR } =
  actions.blogs

const initialState = {
  blogs: [],
  loading: false,
  error: null,
}

const BlogReducer = (state, action) => {
  switch (action.type) {
    case BLOGS_FETCHING: {
      return {
        ...state,
        loading: true,
      }
    }

    case BLOGS_FETCHED: {
      return {
        ...state,
        loading: false,
        blogs: action.data.blogs,
      }
    }
    case BLOG_CREATED: {
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.data.blogs],
      }
    }
    case BLOG_CREATED_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
  }
}

export { BlogReducer, initialState }
