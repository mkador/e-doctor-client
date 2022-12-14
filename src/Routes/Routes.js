import Main from '../layouts/Main'
import Blog from '../Pages/Blog/Blog'
import Home from '../Pages/Home/Home/Home'
import Login from '../Pages/Login/Login/Login'
import SignUp from '../Pages/Login/SignUp/SignUp'
import AddServices from '../shared/AddServices/AddServices'
import MyReviews from '../shared/MyReviews/MyReviews'
import Service from '../shared/Services/Service'
import ServicesAll from '../shared/Services/ServicesAll'
import PrivateRoutes from './PrivateRoutes'

const { createBrowserRouter } = require('react-router-dom')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/services',
        element: <ServicesAll></ServicesAll>,
      },
      {
        path: '/services/:id',
        element: (
          <PrivateRoutes>
            <Service></Service>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://e-doctor-server.vercel.app/services/${params.id}`),
      },
      {
        path: '/allServices',
        element: <ServicesAll></ServicesAll>,
      },
      {
        path: '/addServices',
        element: <AddServices></AddServices>,
      },
      {
        path: '/myReviews',
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
    ],
  },
])

export default router
