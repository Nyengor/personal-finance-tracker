import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddTransactionForm from "./pages/AddTransactionForm";
import TransactionList from "./pages/TransactionList";
import Login from "./pages/Login";


export default function App() {
  const router = createBrowserRouter([
  {path: "/", element: <Dashboard/>},
  {path: "sign-up", element: <Signup/>},
  {path: "login", element: <Login/>},
  {path: "add-transaction", element: <AddTransactionForm/>},
  {path: "transaction-list", element: <TransactionList/>},
]);

  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )}
