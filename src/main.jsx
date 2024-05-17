import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Office from './Pages/Office.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Office/>,
  },
  {
    path: "/office",
    element: <Office/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

