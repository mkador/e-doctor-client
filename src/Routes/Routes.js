import Main from '../layouts/Main'
import Blog from '../Pages/Blog/Blog'
import Home from '../Pages/Home/Home/Home'

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
    ],
  },
])

export default router
