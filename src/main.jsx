import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import WorkExperience from './pages/Work/Work.jsx';
import Education from './pages/Education/Education.jsx';
import Projects from './pages/Projects/Projects.jsx';
import SingleProject from './pages/SingleProject/SingleProject.jsx';
//style
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Main.css'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    //path pattern to match against the URL to determine if this route mates a URL link href, or form action
    path: '/',
    //tell us what component we want to render when user hits homepage(Nav and Outlet)
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/WorkExperience',
        element: <WorkExperience />
      },
      {
        path: '/Education',
        element: <Education />
      },
      {
        path: 'Projects',
        element: <Projects />
      },
      {
        path: 'SingleProject',
        element: <SingleProject />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
