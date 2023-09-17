import './App.css';
import {createBrowserRouter,Navigate,RouterProvider} from "react-router-dom";
import Signin from './pages/signin';
import ProtectedRoute from './ProtectedRoute';
import NotfoundPage from './pages/Notfound';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Logout from './pages/logout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signup" replace />,
  },
  {
    path:"/logout",
    element:<Logout/>
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
    ),
  },
  {
    path:"*",
    element:<Navigate to="/notfound" replace/>,
  },
  {
    path:"/notfound",
    element: <NotfoundPage/>
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
