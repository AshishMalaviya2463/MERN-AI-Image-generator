import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/auth/Login"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import SignUp from "./pages/auth/SignUp"
import Toast from "./components/toast/Toast"

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <Navigate to={"/login"} />
  }
])

const App = () => {

  return (
    <Provider store={store}>
      <Toast />
      <RouterProvider router={routes} />
    </Provider >
  )
}

export default App