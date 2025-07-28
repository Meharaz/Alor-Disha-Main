import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import Donation from "../Pages/Donation/Donation";
import Events from "../Pages/Events/Events";
import BloodDoner from "../Pages/BloodDoner/BloodDoner";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/About',
          element: <About/>
        },
        {
          path: 'Services',
          element: <Services/>
        },
        {
          path: 'Contact',
          element: <Contact/>
        },
        {
          path: 'Blog',
          element: <Blog/>
        },
        {
          path: 'Donation',
          element: <Donation/>
        },
        {
          path: 'Events',
          element: <Events/>
        },
        
        {
          path: 'Blood',
          element: <BloodDoner/>
        }
      ]
    },
  ]);