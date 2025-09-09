import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./wrappers/Layout"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import VerifyPage from "./pages/VerifyPage"
import Dashboard from "./wrappers/Dashboard"
import NewNote from "./components/NewNote"
import Logout from "./components/Logout"
import ViewOneNote from "./components/ViewOneNote"
import EditNote from "./components/EditNote"
import DeleteNote from "./components/DeleteNote"
import UserDashboardWrapper from "./wrappers/UserDashboardWrapper"

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "verify",
        element: <VerifyPage />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <UserDashboardWrapper />
      },
      {
        path: "create",
        element: <NewNote />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "viewonenote/:noteId",
        element: <ViewOneNote />
      },
      {
        path: "editnote/:noteId",
        element: <EditNote />
      },
      {
        path: "deletenote/:noteId",
        element: <DeleteNote />
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
})

const App = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  )
}

export default App