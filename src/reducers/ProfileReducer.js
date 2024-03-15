import { actions } from '../actions'

const {
  DATA_FETCHING,
  DATA_FETCHED,
  DATA_FETCH_ERROR,
  //   IMAGE_UPDATED,
  //   USER_DATA_EDITED,
} = actions.profile

const initialState = {
  user: null,
  blogs: [],
  loading: false,
  error: null,
}

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      }
    }
    case DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        blogs: action.data,
        user: action.data,
      }
    }
    case DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
  }
}

export { ProfileReducer, initialState }
