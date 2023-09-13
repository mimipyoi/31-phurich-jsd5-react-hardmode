import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomeUser from '../componant/HomeUser.jsx';
import HomeAdmin from '../componant/HomeAdmin.jsx';
import HomeNormal from '../componant/HomeNormal.jsx';
import Owner from '../componant/Owner.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/userhome",
    element: <HomeUser />
  },
  {
    path: "/adminhome",
    element: <HomeAdmin />
  },
  {
    path: "/owner",
    element: <Owner />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

