import { actions } from '../actions'

const { BLOGS_FETCHED, BLOGS_FETCHING } = actions.blogs

const initialState = {
  blogs: [],
  loading: false,
  error: null,
}

const BlogReducer = (state, actions) => {
  switch (actions.type) {
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
        blogs: actions.data.blogs,
      }
    }
  }
}

export { BlogReducer, initialState }
