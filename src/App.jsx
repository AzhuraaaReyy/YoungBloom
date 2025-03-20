import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import DashboardPage from "./Pages/Dashboard";
import HalamanUtama from "./Components/Fragments/HalamanUser";
import Login from "./Components/Fragments/FormLogin";
import Register from "./Components/Fragments/FormRegister";
import Posts from "./Components/Fragments/Postingan";
function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <HalamanUtama />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/homepage",
      element: <Posts />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
