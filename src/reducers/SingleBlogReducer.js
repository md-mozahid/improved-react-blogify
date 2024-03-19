import { actions } from '../actions'
const {
  BLOG_FETCHED,
  BLOG_FETCHING,
  BLOG_FETCH_ERROR,
  BLOG_COMMENTED,
  BLOG_COMMENTED_ERROR,
  BLOG_COMMENT_DELETED,
  BLOG_COMMENT_DELETED_ERROR,
  BLOG_LIKED,
  BLOG_FAVORITE,
  BLOG_DELETED,
} = actions.singleBlog

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

    case BLOG_COMMENTED: {
      return {
        ...state,
        loading: false,
        blog: {
          ...state.blog,
          comments: action.data.comments,
          // ...action.data,
        },
      }
    }

    case BLOG_COMMENTED_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }

    // delete comment
    case BLOG_COMMENT_DELETED: {
      const updatedComments = state.blog.comments.filter(
        (comment) => comment.id !== action.data
      )
      return {
        ...state,
        loading: false,
        blog: {
          ...state.blog,
          comments: updatedComments,
        },
      }
    }
    case BLOG_COMMENT_DELETED_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }

    // BLOG LIKE
    case BLOG_LIKED: {
      return {
        ...state,
        loading: false,
        blog: {
          ...state.blog,
          likes: action.data,
        },
      }
    }

    // favorite blog
    case BLOG_FAVORITE: {
      return {
        ...state,
        loading: false,
        blog: {
          ...state.blog,
          isFavourite: action.data,
        },
      }
    }

    case BLOG_DELETED: {
      const deleteBlog = state?.blogs?.filter((blog) => blog?.id !== action.data)
      return {
        ...state,
        blogs: deleteBlog,
      }
    }
  }
}

export { SingleBlogReducer, initialState }
