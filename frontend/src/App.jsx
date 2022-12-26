import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/user/Login';
import SignUp from './pages/user/Signup';

import RootLayout from './layouts/RootLayout';
import EnterUserLayout from './layouts/EnterUserLayout';



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />


      <Route path='user' element={<EnterUserLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
