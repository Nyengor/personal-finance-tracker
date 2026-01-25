import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ManageMoney from "./pages/ManageMoney";
import Login from "./pages/Login";
import Categories from "./pages/Categories";

import '@fontsource/roboto';

export default function App() {
  const router = createBrowserRouter([
  {path: "/", element: <Dashboard/>},
  {path: "/sign-up", element: <Signup/>},
  {path: "/login", element: <Login/>},
  {path: "/manage-money", element: <ManageMoney/>},
  {path: "/categories", element: <Categories/>},
]);

  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )}
