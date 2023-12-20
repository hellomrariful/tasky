import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Layout/Root";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Layout/Dashboard";
import ToDo from "./Pages/Dashboard/ToDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "home",
        element: <ToDo></ToDo>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
