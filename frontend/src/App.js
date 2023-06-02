import React, { useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { ExpensePage } from "./components/pages/ExpensePage";
import Login from "./components/pages/Login";

const App = () => {
  const user = true;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/expenses",
      element:<>
       {user ?<ExpensePage /> : <Navigate to="/" replace={true}/>}
      </>, 
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
