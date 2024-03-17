import { actions } from '../actions'

const { BLOGS_FETCHED, BLOGS_FETCHING, BLOGS_SEARCH } = actions.blogs

const initialState = {
  blogs: [],
  loading: false,
  error: null,
  search: '',
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

    case BLOGS_SEARCH: {
      return {
        ...state,
        loading: true,
        search: action.data,
      }
    }
  }
}

export { BlogReducer, initialState }
