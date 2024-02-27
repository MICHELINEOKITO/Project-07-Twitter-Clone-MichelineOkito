import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import UserProfil from './pages/userProfil';
import('./style/reset.css');
import('./style/App.css');
import('./style/index.css');




const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path:":userName",
        element:<UserProfil/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
