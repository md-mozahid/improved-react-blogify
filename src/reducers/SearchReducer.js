import { actions } from '../actions'
const { DATA_FETCHING, DATA_FETCHED, DATA_FETCH_ERROR } = actions.search

const initialState = {
  search: [],
  loading: false,
  error: null,
}

const SearchReducer = (state, action) => {
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
        search: action.data,
      }
    }
    case DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }

    default:
      return state
  }
}

export { SearchReducer, initialState }
