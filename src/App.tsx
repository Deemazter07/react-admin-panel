import "./styles/global.scss";
import Home from "./pages/home/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import User from "./pages/user/User";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

export const mainPath = "/react-admin-panel";

function Layout() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: `${mainPath}/`,
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: `${mainPath}/`,
          element: <Home />,
        },
        {
          path: `${mainPath}/users`,
          element: <Users />,
        },
        {
          path: `${mainPath}/users/:id`,
          element: <User />,
        },
        {
          path: `${mainPath}/products`,
          element: <Products />,
        },
        // {
        //   path: "/products/:id",
        //   element: <Product />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
