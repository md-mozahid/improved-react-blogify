import { createBrowserRouter } from 'react-router-dom'
import Root from '../layout/Root'
import {
  CreateBlog,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  SingleBlog,
  UpdateBlog,
} from '../pages'
import PrivateRoutes from './PrivateRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/single-blog',
        element: <SingleBlog />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },

      {
        path: '/create-blog',
        element: (
          <PrivateRoutes>
            <CreateBlog />
          </PrivateRoutes>
        ),
      },
      {
        path: '/update-blog',
        element: <UpdateBlog />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

export default router
