import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen'><RouterProvider router={router} /></div>
  </StrictMode>,
)
