import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from 'react-router-dom';

import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/user/Login';
import SignUp from './pages/user/Signup';

import RootLayout from './layouts/RootLayout';
import EnterUserLayout from './layouts/EnterUserLayout';



function App() {
  const { user } = useAuthContext()

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<RootLayout />}>
        <Route index element={user ? <Home /> : <Navigate to="user/login" />} />
        <Route path='user' element={!user ? <EnterUserLayout /> : <Navigate to="/" />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
