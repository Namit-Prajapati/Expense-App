import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ExpensePage } from "./components/pages/ExpensePage";
import Login from "./components/pages/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/expenses",
      element: <ExpensePage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
