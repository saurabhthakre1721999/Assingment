import Home from "./home";
import About from "./about";
import Contact from "./contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <h1>Nahi hai re baba :D</h1>,
  },
]);
const Approuter = () => {
  return <RouterProvider router={router} />;
};
export default Approuter;
