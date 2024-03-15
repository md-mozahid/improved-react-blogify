import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import BlogProvider from './providers/BlogProvider.jsx'
import ProfileProvider from './providers/ProfileProvider.jsx'
import router from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
        transition:Bounce
      />
      <ProfileProvider>
        <BlogProvider>
          <RouterProvider router={router} />
        </BlogProvider>
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>
)
