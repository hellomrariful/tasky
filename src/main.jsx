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
import Dashboard from "./Layout/Dashboard";
import Profile from "./Pages/Profile/Profile";
import ToDo from "./Pages/Dashboard/ToDo";
import Task from "./Pages/Dashboard/Task";
// import PrivateRoute from "./Routes/PrivateRoute";
// import Dashboard from "./Layout/Dashboard";
// import ToDo from "./Pages/Dashboard/ToDo";

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
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/whyTasky",
        element: <WhyTasky></WhyTasky>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <ToDo></ToDo>,
      },
      {
        path: "/dashboard/addTask",
        element: <Task></Task>,
      },
    ],
  },
]);

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WhyTasky from "./Pages/WhyTasky/WhyTasky";
import FAQ from "./Pages/FAQ/FAQ";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
