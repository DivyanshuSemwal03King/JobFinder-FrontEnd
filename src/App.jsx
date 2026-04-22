import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Jobs from './components/Jobs'
import JobDetailsPage from './components/ui/JobDetailsPage'
import PostNewJob from './components/PostNewJob'
import JobSeeker from './components/JobSeeker'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/jobs",
      element:<Jobs/>
    },
       {
      path: "/job/:id",
      element: <JobDetailsPage />
    },
    {
      path:"/post-job",
      element:<PostNewJob/>
    },
    {
      path:"/jobseeker",
      element:<JobSeeker/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    {/* <Login /> */}
    
     
    </>
  )
}

export default App
