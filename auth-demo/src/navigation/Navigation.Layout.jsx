import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import ProtectedView from "./ProtectedView";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("../pages/Home.Layout"));
const Login = React.lazy(() => import("../pages/Login.Layout"));
const Contact = React.lazy(() => import("../pages/Contact.Layout"));

export const routesMap = {
  root: "/",
  home: "/home",
  login: "/login",
  contact: "/contact",
};

const router = createBrowserRouter([
  {
    path: routesMap.root,
    element: (
      <Suspense fallback={<div class="loader"></div>}>
        <ProtectedView>
          <Home />
        </ProtectedView>
      </Suspense>
    ),
  },
  {
    path: routesMap.home,
    element: (
      <Suspense fallback={<div class="loader"></div>}>
        <ProtectedView>
          <Home />
        </ProtectedView>
      </Suspense>
    ),
  },
  {
    path: routesMap.login,
    element: (
      <Suspense fallback={<div class="loader"></div>}>
        <ProtectedView>
          <Login />
        </ProtectedView>
      </Suspense>
    ),
  },
  {
    path: routesMap.contact,
    element: (
      <Suspense fallback={<div class="loader"></div>}>
        <ProtectedView>
          <Contact />
        </ProtectedView>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div class="loader"></div>}>
        <>
          <h1>Oops! It's 404</h1>
          <div>
            <Link to={routesMap.root}>Go to home</Link>
            <br />
            <Link to={routesMap.login}>Go to Login</Link>
          </div>
        </>
      </Suspense>
    ),
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
