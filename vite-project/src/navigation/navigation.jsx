import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home/home";
import Order from "../pages/Order/order";

import Login from "../pages/login/login";
import Protectedview from "../Protected view/protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protectedview>
        <Home />
      </Protectedview>
    ),
  },
  {
    path: "/login",
    element: (
      <Protectedview>
        <Login />
      </Protectedview>
    ),
  },
  {
    path: "/order",
    element: (
      <Protectedview>
        <Order />
      </Protectedview>
    ),
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};
export default Navigation;
