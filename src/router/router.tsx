import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import ErrorPage from '../pages/ErrorPage'
import Companies from '../pages/Companies'
import Admin from '../pages/Admin'
import { AppRoute } from './AppRoute'
import Auth from '../pages/Auth'
import ProtectedRoute from '../pages/ProtectedRoute'

// Function to get the access token from cookies
//const getAccessToken = () => {
//  return Cookies.get('accessToken');
//}
//
//// Function to check if the user is authenticated
//const isAuthenticated = () => {
//  return !!getAccessToken();
//}

const router = createBrowserRouter([
  {
    path: AppRoute.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: AppRoute.AUTH, element: <Auth /> },
      {
        path: AppRoute.HOME,
        element: (
          <ProtectedRoute>
            <Companies />
          </ProtectedRoute>
        )
      },
      {
        path: AppRoute.ADMIN,
        element: (
          <ProtectedRoute requireAdmin>
            <Admin />
          </ProtectedRoute>
        )
      }
    ]
  }
])

export default router
