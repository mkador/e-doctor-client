import Main from '../layouts/Main'
import Blog from '../Pages/Blog/Blog'
import Home from '../Pages/Home/Home/Home'
import Login from '../Pages/Login/Login/Login'
import SignUp from '../Pages/Login/SignUp/SignUp'
import AddServices from '../shared/AddServices/AddServices'
import MyReviews from '../shared/MyReviews/MyReviews'
import Service from '../shared/Services/Service'
import ServicesAll from '../shared/Services/ServicesAll'

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
        element: <Service></Service>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
        element: <MyReviews></MyReviews>,
      },
    ],
  },
])

export default router
