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
import { Provider } from "react-redux"
import store from "./redux/app/store"
import ToastProvider from "./components/ToastProvider"
import authLoader from "./loaders/unit/authLoader"
import ViewAllNote from "./components/ViewAllNote"
import noteLoader from "./loaders/unit/NoteLoader"
import oneNoteLoader from "./loaders/unit/oneNoteLoader"

const routes = [
  {
    path: "/",
    element: <Layout />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading M - Notes...</div>,
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
    loader: authLoader,
    hydrateFallbackElement: <div className="m-5">Loading Dashboard...</div>,
    children: [
      {
        index: true,
        element: <ViewAllNote />,
        loader: noteLoader,
        hydrateFallbackElement: <div className="relative top-20">Loading Dashboard...</div>
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
        element: <ViewOneNote />,
        loader: oneNoteLoader,
        hydrateFallbackElement: <div>Loading Note...</div>
      },
      {
        path: "editnote/:noteId",
        element: <EditNote />,
        loader: oneNoteLoader,
        hydrateFallbackElement: <div>Loading Note...</div>
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
    <>
      <Provider store={store}>
        <ToastProvider />
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }} />
      </Provider>
    </>
  )
}

export default App