import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "@/pages/HomePage";




const router = createBrowserRouter([
    {path : '/', 
    element: <Layout />,
    children :[
      {index: true, element:<HomePage />}
    ]
    }
])



export default function AppRouter() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
  