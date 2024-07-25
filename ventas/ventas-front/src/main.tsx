import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss'
import {Login,Singup, Dashboard ,ProtectedRoute} from "./routes"
import { AuthProvider } from './routes/Authprovider';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Login />,
  },
  {
    path: "/singup",
    element: <Singup />,
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children:[
      {path: "/dashboard",
        element: <Dashboard/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
