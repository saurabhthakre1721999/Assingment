//import Home from "./home";
//import About from "./about";
//import Contact from "./contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Allproducts from "./home";
import First from "./first";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Allproducts />,
  },
  {
    path: "/detail/:productid",
    element: <First />,
  },
]);
const Allproductsrout = () => {
  return <RouterProvider router={router} />;
};
export default Allproductsrout;
