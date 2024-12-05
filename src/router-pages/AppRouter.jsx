import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";




const router = createBrowserRouter([
    {path : '/', 
    element: <Layout />,
    }
])



export default function AppRouter() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
  