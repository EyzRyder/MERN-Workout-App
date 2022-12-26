import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';

import Home from './pages/Home';

import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      {/* <Route path='careers' element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=':id' element={<CareerDetails />} loader={careerDetailsLoader} />
      </Route> */}

      {/* <Route path='*' element={<NotFound />} /> */}

    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
