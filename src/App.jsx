import './App.scss';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layouts
import LandingLayout from './layouts/LandingLayout';
import PageLayout from './layouts/PageLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingLayout />,
    },
    {
      path: "about",
      element: <PageLayout />,
    },
    {
      path: "writer",
      element: <PageLayout />,
    },
    {
      path: "engineer",
      element: <PageLayout />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
